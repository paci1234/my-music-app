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
  filteredArtists: Artists[] = [];
  @Input() artist: Artists;
  errorMessage = '';
  sub: Subscription;
  name: any;
  src: any;
  bio: any;
  arianaGrande: any;
  greatestHits: any;
  audioList = [
    {
      url: './assets/artists/ariana-grande/ariana_grande-no_tears_left_to_cry.mp3',
      title: 'Ariana Grande',
      cover: './assets/images/artists/ariana_grande_bg.jpg'
    },
    {
      url: './assets/artists/justin-timberlake/justin-timberlake-cry-me-a-river.mp3',
      title: 'Justin Timberlake',
      cover: './assets/images/artists/justin_timberlake_bg.jpg'
    }
  ];
  constructor(
    private artistsSvc: ArtistsService
  ) { }

  ngOnInit(): void {
      this.sub = this.artistsSvc.getArtists().subscribe(
        artists => {
          this.artists = artists;
          this.filteredArtists = this.artists;
        },
        err => this.errorMessage = err
      // this.arianaGrande = artists[0][0];
      // this.name = this.arianaGrande.name;
      // this.src = this.arianaGrande.src;
      // this.bio = this.arianaGrande.bio;
      // this.greatestHits = this.arianaGrande.greatestHits;
    );
  }

  openMusicPlayer() {
    console.log('Passed through the openMusicPlayer function');
    this.filteredArtists.filter((x) => {
      if (x.name === 'Ariana Grande') {
        x.name = this.name;
        // this.src = x.src;
        // this.bio = x.bio;
        // this.greatestHits = x.greatestHits;
      }
      return this.name;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
