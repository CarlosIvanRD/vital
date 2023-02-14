import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'
import { RegisterComponent } from './home/register/register.component'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'register', component: RegisterComponent},
  {
    path: 'home',
    loadChildren: () => import('~/app/home/home.module').then((m) => m.HomeModule),
  },
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
