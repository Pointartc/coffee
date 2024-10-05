import {Routes} from '@angular/router';

export const routes: Routes = [
  {path: '', loadChildren: () => import('./main/main/main.module').then(m => m.MainModule), pathMatch: "full"},
  {path: 'Login', loadChildren: () => import('./login/login/login.module').then(m => m.LoginModule), pathMatch: "full"}
];

