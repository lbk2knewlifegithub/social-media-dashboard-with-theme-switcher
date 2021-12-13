import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'lbk-switch',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div
      class="bg-toggle cursor-pointer relative inline-block h-[30px] w-[56px] rounded-full hover:bg-gradient-to-r hover:from-toggle-start hover:to-toggle-end group"
    >
      <!-- ball -->
      <div
        class="absolute w-[22px] h-[22px] {{
          active ? 'right-1' : 'left-1'
        }} duration-100 rounded-full bg-fill  top-1/2 -translate-y-1/2 group-hover:bg-white"
      ></div>
      <!-- end ball -->
    </div>
  `,
})
export class SwitchComponent {
  @Input() active!: boolean;
}
