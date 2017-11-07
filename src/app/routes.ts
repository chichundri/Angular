import { Routes } from "@angular/router";
import { RegisterComponent } from './EMS/register/register.component';
import { LoginComponent } from './EMS/login/login.component';
import { DashboardComponent } from './EMS/dashboard/dashboard.component';


export const appRoutes: Routes = [
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: '', redirectTo: '/login', pathMatch: 'prefix'},
];
