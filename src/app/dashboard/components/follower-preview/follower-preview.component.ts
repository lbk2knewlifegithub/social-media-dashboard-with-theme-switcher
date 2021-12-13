import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Follower } from '../../models/follower.mode';

@Component({
  selector: 'lbk-follower-preview',
  templateUrl: './follower-preview.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FollowerPreviewComponent {
  @Input() follower!: Follower;

  get isInstagram(): boolean {
    return this.follower.name == 'instagram';
  }
}
