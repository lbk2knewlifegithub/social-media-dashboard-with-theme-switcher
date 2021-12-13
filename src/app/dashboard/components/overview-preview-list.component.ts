import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Overview } from '../models/overview.model';

@Component({
  selector: 'lbk-overview-preview-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="container">
      <!-- title -->
      <h2 class="text-2xl font-bold text-muted xl:text-3xl">Overview - Today</h2>
      <!-- end title -->

      <!-- overview preview list -->
      <div class="mt-10 gap-6 grid md:grid-cols-2 xl:grid-cols-4">
        <ng-container *ngFor="let overview of overviews">
          <lbk-overview-preview
            class="block"
            [overview]="overview"
          ></lbk-overview-preview>
        </ng-container>
      </div>

      <!-- end overview preview list -->
    </div>
  `,
})
export class OverviewPreviewListComponent {
  @Input() overviews!: Overview[];
}
