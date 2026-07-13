import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Profile } from './profile/profile';
import { Signup } from './signup/signup';

//{path:'login', component:Login},   path value can be anything component value is in ts file i.e class name
export const routes: Routes = [
    {path:'login', component:Login},
    {path:'profile', component:Profile},
    {path:'signup', component:Signup}
];
