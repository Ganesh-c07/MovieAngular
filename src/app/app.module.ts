import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScreensComponent } from './Movies/components/screens/screens.component';
import { SeatmapComponent } from './Movies/components/seatmap/seatmap.component';
import { ShowComponent } from './Movies/components/show/show.component';
import { LoginComponent } from './Movies/components/login/login.component';
import { HomeComponent } from './Movies/components/home/home.component';
import { MoviesComponent } from './Movies/components/movies/movies.component';
import { BookingComponent } from './Booking/components/booking/booking.component';
import { PaymentComponent } from './Booking/components/payment/payment.component';
import { PayResultComponent } from './Booking/components/pay-result/pay-result.component';
import { SignupComponent } from './CustomerRegistration/components/signup/signup.component';
import { ResetpasswordComponent } from './CustomerRegistration/components/resetpassword/resetpassword.component';
import { ProfileComponent } from './CustomerRegistration/components/profile/profile.component';
import { ScreenService } from './Movies/services/screen.service';
import { SeatService } from './Movies/services/seat.service';
import { ShowService } from './Movies/services/show.service';


import { FormsModule} from '@angular/forms';



// Modules
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddMovieComponent } from './AddView/components/add-movie/add-movie.component';
import { AdminMovieService } from './AddView/services/admin-movie.service';
import { AdminScreenService } from './AddView/services/admin-screen.service';
import { AdminShowService } from './AddView/services/admin-show.service';
import { AdminTheatreService } from './AddView/services/admin-theatre.service';
import { AdminHomeComponent } from './AddView/components/admin-home/admin-home.component';
import { AddTheatreComponent } from './AddView/components/add-theatre/add-theatre.component';
import { AddShowComponent } from './AddView/components/add-show/add-show.component';
import { ViewMovieComponent } from './AddView/components/view-movie/view-movie.component';
import { ViewScreenComponent } from './AddView/components/view-screen/view-screen.component';
import { ViewShowComponent } from './AddView/components/view-show/view-show.component';
import { ViewTheatreComponent } from './AddView/components/view-theatre/view-theatre.component';
import { AddScreenComponent } from './AddView/components/add-screen/add-screen.component';
import { AuthenticationService } from './authentication.service';
import { JwtHelperService,JWT_OPTIONS } from '@auth0/angular-jwt';
import { AuthguardGuard } from './Admin/authguard.guard';
import { HttpInterceptorInterceptor } from './http-interceptor.interceptor';
import { BookingService } from './Booking/service/booking.service';
import { PaymentService } from './Booking/service/payment.service';
import { Admin } from './Admin/admin';
import { UserserviceService } from './CustomerRegistration/service/userservice.service';
import { AttachmovieComponent } from './AddView/components/attachmovie/attachmovie.component';
import { TicketService } from './Booking/services/ticket.service';
import { TicketsViewComponent } from './Movies/components/tickets-view/tickets-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ScreensComponent,
    SeatmapComponent,
    ShowComponent,
    LoginComponent,
    HomeComponent,
    MoviesComponent,
    BookingComponent,
    PaymentComponent,
    PayResultComponent,
    SignupComponent,
    ResetpasswordComponent,
    ProfileComponent,
    AddMovieComponent,
    AdminHomeComponent,
    AddTheatreComponent,
    AddShowComponent,
    ViewMovieComponent,
    ViewScreenComponent,
    AddScreenComponent,
    ViewShowComponent,
    ViewTheatreComponent,
    AttachmovieComponent,
    TicketsViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    ScreenService,
    AuthenticationService,
    AuthguardGuard
    ,
    Admin,
    TicketService,
    UserserviceService,
    BookingService,
    PaymentService,
    SeatService,
    ShowService,
    AdminMovieService,
    AdminScreenService,
    AdminShowService,
    AdminTheatreService,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
