import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Artists} from '../../artists';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss']
})
export class PlayerCardComponent implements OnInit, OnDestroy {
  artists: Artists[] = [];
  @Input() currentArtist: Artists;
  greatestHits: any;
  errorMessage = '';
  sub: Subscription;
  counter = 0;

  // audioList = [{
  //   url: './assets/artists/ariana-grande/ariana_grande-no_tears_left_to_cry.mp3',
  //   title: 'Ariana Grande',
  //   cover: './assets/images/artists/ariana_grande_bg.jpg'
  // }];

  constructor() { }

  ngOnInit(): void {
    this.greatestHits = this.currentArtist.greatestHits;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
