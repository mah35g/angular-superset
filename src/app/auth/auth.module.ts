import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { LoginPageComponentModule } from "./components/login-page";
import { UserComponentModule } from "./components/user";
import { AuthApiEffects } from "./auth.effects";

@NgModule({
  imports: [EffectsModule.forFeature([AuthApiEffects])],
  exports: [LoginPageComponentModule, UserComponentModule]
})
export class AuthModule {}
