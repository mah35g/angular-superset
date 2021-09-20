import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { EffectsModule } from "@ngrx/effects";
import { MaterialModule } from "src/app/material.module";
import { DashboardPageComponent } from "./components/dashboard-page/dashboard-page.component";
import { DashboardDetailComponent } from "./components/dashboard-detail/dashboard-detail.component";
import { DashboardListComponent } from "./components/dashboard-list/dashboard-list.component";
import { DashboardApiEffects } from "./dashboard-api.effects";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule.forChild([{ path: "dashboard", component: DashboardPageComponent }]),
    EffectsModule.forFeature([DashboardApiEffects])
  ],
  exports: [DashboardPageComponent],
  declarations: [
    DashboardPageComponent,
    DashboardDetailComponent,
    DashboardListComponent
  ]
})
export class DashboardModule {}
