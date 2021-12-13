import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  FollowerPreviewComponent,
  FollowerPreviewListComponent,
  HeaderComponent,
  OverviewPreviewComponent,
  OverviewPreviewListComponent,
  SwitchComponent
} from './components';
import { DashboardPageComponent } from './containers';
import { DashboardRoutingModule } from './dashboard-routing.module';

const COMPONENTS = [
  HeaderComponent,
  FollowerPreviewComponent,
  FollowerPreviewListComponent,
  SwitchComponent,
  OverviewPreviewComponent,
  OverviewPreviewListComponent,
];

const CONTAINERS = [DashboardPageComponent];

@NgModule({
  imports: [CommonModule, DashboardRoutingModule],
  declarations: [COMPONENTS, CONTAINERS],
})
export class DashboardModule {}
