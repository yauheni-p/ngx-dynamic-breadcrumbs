import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs.component';
import { RouterModule } from '@angular/router';
import { DefaultDividerComponent } from './default-divider/default-divider.component';

@NgModule({
  declarations: [BreadcrumbsComponent, DefaultDividerComponent],
  imports: [CommonModule, RouterModule],
  exports: [BreadcrumbsComponent]
})
export class BreadcrumbsModule {}
