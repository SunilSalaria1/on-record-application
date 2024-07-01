import { Routes } from '@angular/router';
import {LoginComponent} from '../app/pages/auth/login/login.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { ForgotPasswordComponent } from './pages/auth/forgot-password/forgot-password.component';
import { CreateNewPasswordComponent } from './pages/auth/create-new-password/create-new-password.component';
import { OtpVerificationComponent } from './pages/auth/otp-verification/otp-verification.component';
import { PageNotFoundComponent } from './pages/error/page-not-found/page-not-found.component';

export const routes: Routes = [
    //auth routes
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'sign-up', component: SignupComponent },
    { path: 'forgot-password', component: ForgotPasswordComponent },
    { path: 'create-new-password', component: CreateNewPasswordComponent },
    { path: 'otp-verification', component: OtpVerificationComponent },
    { path: '**', component: PageNotFoundComponent }
];
