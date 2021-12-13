import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Follower } from '../models/follower.mode';

@Component({
  selector: 'lbk-follower-preview-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="mt-12 container gap-6 grid md:grid-cols-2 xl:grid-cols-4">
      <ng-container *ngFor="let follower of followers">
        <lbk-follower-preview
          class="block"
          [follower]="follower"
        ></lbk-follower-preview>
      </ng-container>
    </div>
  `,
})
export class FollowerPreviewListComponent {
  @Input() followers!: Follower[];
}
