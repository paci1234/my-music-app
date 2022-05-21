import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MusicPlayerComponent} from './components/music-player/music-player.component';


const routes: Routes = [
  {
    path: 'player',
    component: MusicPlayerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
