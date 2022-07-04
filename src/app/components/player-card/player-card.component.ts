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
  @Input() artist: Artists;
  @Input() audio: Artists;
  @Input() currentHits: Artists;
  greatestHits: any;
  errorMessage = '';
  sub: Subscription;

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
        artists => {
          this.artists = artists;
        },
        err => this.errorMessage = err
    );
      // this.greatestHits = this.currentHits.greatestHits;
      // console.log(this.currentHits.greatestHits);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
