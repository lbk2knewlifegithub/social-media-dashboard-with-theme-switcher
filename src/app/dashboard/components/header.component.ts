import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lbk-header',
  template: `
    <header>
      <nav class="container mt-8 bg-fill lg:flex lg:justify-between">
        <div>
          <a href="#" class="block font-bold text-2xl text-fill md:text-3xl xl:text-4xl">
            Social Media Dashboard
          </a>
          <p class="text-muted font-semibold">Total Followers: 23,004</p>
        </div>

        <!--    dark mode desktop-->
        <div class="hidden gap-4 items-center lg:flex">
          <p class="text-muted font-semibold pb-1 text-lg">Dark Mode</p>

          <!--      switch-->
          <lbk-switch
            (click)="onToggleDarkMode()"
            [active]="isDarkMode"
          ></lbk-switch>
          <!--      end desktop-->
        </div>
        <!--    end dark mode mobile-->

        <!-- line -->
        <div class="h-[1px] rounded-full my-4 bg-top-bg lg:hidden"></div>
        <!-- endline -->

        <!--    dark mode mobile-->
        <div class="flex justify-between items-center lg:hidden">
          <p class="text-skin-muted text-muted font-semibold">Dark Mode</p>

          <!--      switch-->
          <lbk-switch
            (click)="onToggleDarkMode()"
            [active]="isDarkMode"
          ></lbk-switch>
          <!--      end switch-->
        </div>
        <!--    end dark mode mobile-->
      </nav>
    </header>
  `,
})
export class HeaderComponent implements OnInit {
  isDarkMode!: boolean;
  darkModeKey = 'darkMode';

  ngOnInit(): void {
    const raw = localStorage.getItem(this.darkModeKey) ?? false;
    this.isDarkMode = raw === 'true';
    this.updateDarkMode();
  }

  onToggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    this.updateDarkMode();
  }

  updateDarkMode() {
    if (this.isDarkMode) return this.toDarkMode();
    else return this.toLightMode();
  }

  toDarkMode() {
    document.body.classList.add('dark');
    localStorage.setItem(this.darkModeKey, 'true');
  }

  toLightMode() {
    document.body.classList.remove('dark');
    localStorage.setItem(this.darkModeKey, 'false');
  }
}
