import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {USER_ROUTES} from './user/user.routes';
import {USER_COMPANIES} from './companie/companie.routes';


import {ADMIN_ROUTES} from './admin/admin.routes';
import {UserComponent} from './user/user.component';
import {FormComponent} from './form/form.component';
import {AuthGuardService} from './auth/authguard.service';
import {MainPageComponent} from './mainPage/mainPage.component';

import {CompanieComponent} from './companie/companie.component';
//import {CompanieDetailComponent} from './companie/companieDetail.component';
//import {EditCompanieComponent} from './companie/editCompanie.component';


import {MapComponent} from './map/map.component';

import {AdminComponent} from './admin/admin.component';
import {ErrorPageComponent} from './errorPage/errorPage.component';
import {AdminGuardService} from './admin/services/adminGuard';

const APP_ROUTES: Routes = [
  {path: '', component: MainPageComponent, pathMatch: 'full'},
  {path: 'companie', component: CompanieComponent, children: USER_COMPANIES},
//  {path: 'companie/:id', component: CompanieDetailComponent},
//  {path: 'companie/edit/:id', component: EditCompanieComponent},
  {path: 'map', component: MapComponent, pathMatch: 'full'},
  {path: 'user', component: UserComponent, children: USER_ROUTES},
  {path: 'form', component: FormComponent, canActivate: [AuthGuardService]},
  {path: 'admin', component: AdminComponent, children: ADMIN_ROUTES, canActivate: [AdminGuardService]},
  {path: '404', component: ErrorPageComponent},
  {path: '**', redirectTo: '404'}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
