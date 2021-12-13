import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components';
import { AppComponent } from './containers';

const CONTAINERS = [AppComponent];
const COMPONENTS = [FooterComponent];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [COMPONENTS, CONTAINERS],
})
export class CoreModule {}
