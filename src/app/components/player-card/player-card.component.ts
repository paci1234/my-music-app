import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ArtistsService} from '../../artists.service';
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
  @Input() currentAudioList: Artists;
  @Input() currentHits: Artists;
  greatestHits: any;
  errorMessage = '';
  sub: Subscription;
  counter = 0;

  // audioList = [{
  //   url: './assets/artists/ariana-grande/ariana_grande-no_tears_left_to_cry.mp3',
  //   title: 'Ariana Grande',
  //   cover: './assets/images/artists/ariana_grande_bg.jpg'
  // }];

  constructor(
    private artistsSvc: ArtistsService
  ) { }

  ngOnInit(): void {
      this.sub = this.artistsSvc.getArtists().subscribe(
        res => {
          this.artists = res;
          this.greatestHits = this.currentArtist.greatestHits;
        },
        err => this.errorMessage = err
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
