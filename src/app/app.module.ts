import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';
import {DataViewModule} from 'primeng/dataview';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {ArtistsService} from './artists.service';
import {HttpClientModule} from '@angular/common/http';
import {DividerModule} from 'primeng/divider';
import {AngMusicPlayerModule} from 'ang-music-player';
import { MusicPlayerComponent } from './components/music-player/music-player.component';
import {CardModule} from 'primeng/card';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    MusicPlayerComponent
  ],
  imports: [
    RouterModule.forRoot([]),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ButtonModule,
    RippleModule,
    DataViewModule,
    ScrollingModule,
    HttpClientModule,
    DividerModule,
    AngMusicPlayerModule,
    CardModule
  ],
  providers: [ArtistsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
