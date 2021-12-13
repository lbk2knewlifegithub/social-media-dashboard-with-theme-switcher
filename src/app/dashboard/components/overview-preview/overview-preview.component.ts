import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Overview } from '../../models/overview.model';

@Component({
  selector: 'lbk-overview-preview',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './overview-preview.component.html',
})
export class OverviewPreviewComponent {
  @Input() overview!: Overview;
}
