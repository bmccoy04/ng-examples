import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { RoomsComponent } from './schedule/room/rooms.component';

const routes: Routes = [
  { path:'', component:HomeComponent },
  { path:'schedule', component:ScheduleComponent},
  { path:'schedule/rooms', component:RoomsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
