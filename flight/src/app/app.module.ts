import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/admin/login/login.component';
import { LayoutComponent } from './pages/admin/layout/layout.component';
import { AllFlightsComponent } from './pages/admin/all-flights/all-flights.component';
import { BookingsComponent } from './pages/admin/bookings/bookings.component';
import { CityComponent } from './pages/admin/city/city.component';
import { NewFlightComponent } from './pages/admin/new-flight/new-flight.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    AllFlightsComponent,
    BookingsComponent,
    CityComponent,
    NewFlightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
