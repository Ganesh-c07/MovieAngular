import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScreensComponent } from './Movies/components/screens/screens.component';
import { ShowComponent } from './Movies/components/show/show.component';
import { SeatmapComponent } from './Movies/components/seatmap/seatmap.component';
import { MoviesComponent } from './Movies/components/movies/movies.component';
import { LoginComponent } from './Movies/components/login/login.component';
import { HomeComponent } from './Movies/components/home/home.component';
import { BookingComponent } from './Booking/components/booking/booking.component';
import { PaymentComponent } from './Booking/components/payment/payment.component';
import { PayResultComponent } from './Booking/components/pay-result/pay-result.component';
import { AdminHomeComponent } from './AddView/components/admin-home/admin-home.component';
import { AddMovieComponent } from './AddView/components/add-movie/add-movie.component';
import { ViewMovieComponent } from './AddView/components/view-movie/view-movie.component';
import { ViewShowComponent } from './AddView/components/view-show/view-show.component';
import { ViewScreenComponent } from './AddView/components/view-screen/view-screen.component';
import { ViewTheatreComponent } from './AddView/components/view-theatre/view-theatre.component';
import { AddScreenComponent } from './AddView/components/add-screen/add-screen.component';
import { AddShowComponent } from './AddView/components/add-show/add-show.component';
import { AddTheatreComponent } from './AddView/components/add-theatre/add-theatre.component';
import { AuthguardGuard } from './Admin/authguard.guard';
import { Admin } from './Admin/admin';
import { SignupComponent } from './CustomerRegistration/components/signup/signup.component';

const routes: Routes = [
  {
    path:'admin',
    component:AdminHomeComponent,
    canActivate:[Admin],
    children:[{path:'viewMovie',component:ViewMovieComponent},
    {path:'viewTheatre',component:ViewTheatreComponent},
    {path:'viewScreen',component:ViewScreenComponent},
    {path:'viewShow',component:ViewShowComponent},
    {path:'addMovie',component:AddMovieComponent},
    {path:'addTheatre',component:AddTheatreComponent},
    {path:'addScreen',component:AddScreenComponent},
    {path:'addShow',component:AddShowComponent}]},
  {path:'login',component:LoginComponent},
  {path:"screen",component:ScreensComponent},
  {path:"show",component:ShowComponent},
  {path:'seatmap',component:SeatmapComponent,canActivate:[AuthguardGuard]},
  {path:'movies',component:MoviesComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'booking',component:BookingComponent,canActivate:[AuthguardGuard]},
  {path:'payment',component:PaymentComponent,canActivate:[AuthguardGuard]},
  {path:'payResult',component:PayResultComponent,canActivate:[AuthguardGuard] },
  {path:'**',component:HomeComponent, }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
