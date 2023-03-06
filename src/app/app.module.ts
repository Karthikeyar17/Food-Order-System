import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ForgotPasswordComponent } from './components/logins/forgot-password/forgot-password.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/logins/login/login.component';
import { HeaderComponent } from './components/h-f/header/header.component';
import { FooterComponent } from './components/h-f/footer/footer.component';
import { SignUpComponent } from './components/logins/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';
import { OrderFormComponent } from './components/orders/order-form/order-form.component';
import { OrderSuccessfulComponent } from './components/orders/order-successful/order-successful.component';
import { MyOrdersComponent } from './components/orders/my-orders/my-orders.component';
import { MenuComponent } from './components/menu/menu.component';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    HeaderComponent,
    FooterComponent,
    SignUpComponent,
    HomeComponent,
    OrderFormComponent,
    OrderSuccessfulComponent,
    MyOrdersComponent,
    MenuComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
