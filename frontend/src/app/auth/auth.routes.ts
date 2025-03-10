import { Route, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";

export default [
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
] satisfies Route[];
