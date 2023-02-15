import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptModule } from '@nativescript/angular'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { InicioComponent } from './home/inicio/inicio.component'
import { RegisterComponent } from './home/register/register.component'

@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, AppRoutingModule],
  declarations: [AppComponent, RegisterComponent, InicioComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
