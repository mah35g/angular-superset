import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { EffectsModule } from "@ngrx/effects";
import { MaterialModule } from "./material.module";
import { AuthModule } from "./auth";
import { DashboardModule } from "./dashboard";
import { reducers, metaReducers } from "./shared/state";
import { httpInterceptorProviders } from "./interceptors";
import { AuthApiEffects } from "./auth/auth.effects";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "", pathMatch: "full", redirectTo: "/dashboard" }
    ]),
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([AuthApiEffects]),
    MaterialModule,
    DashboardModule,
    AuthModule
  ],
  bootstrap: [AppComponent],
  providers: [httpInterceptorProviders]
})
export class AppModule {}
