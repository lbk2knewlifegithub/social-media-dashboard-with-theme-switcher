import { Component } from '@angular/core';
import * as fromData from 'src/app/dashboard/data';
import { Follower } from '../models/follower.mode';
import { Overview } from '../models/overview.model';

@Component({
  selector: 'lbk-dashboard-page',
  template: `
    <!-- header -->
    <lbk-header></lbk-header>
    <!-- end header -->

    <!--followers preview list-->
    <lbk-follower-preview-list
      [followers]="followers"
    ></lbk-follower-preview-list>
    <!--followers preview list-->

    <!--overview today-->
    <lbk-overview-preview-list
    class="block mt-16 mb-32"
      [overviews]="overviews"
    ></lbk-overview-preview-list>
    <!--end overview today-->
  `,
})
export class DashboardPageComponent {
  followers: Follower[] = fromData.followers;
  overviews: Overview[] = fromData.overviews;
}
