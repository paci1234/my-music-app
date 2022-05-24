import { Component, OnInit } from '@angular/core';
import {ArtistsService} from '../../artists.service';
import {Artists} from '../../artists';
import {forkJoin} from 'rxjs';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss']
})
export class PlayerCardComponent implements OnInit {
  artists: Artists[];
  audioList = [
    {
      url: './assets/artists/ariana-grande/ariana_grande-no_tears_left_to_cry.mp3',
      title: 'Ariana Grande',
      cover: './assets/images/artists/ariana_grande_bg.jpg'
    }
  ];
  constructor(
    private artistsSvc: ArtistsService
  ) { }

  ngOnInit(): void {
    forkJoin(
      this.artistsSvc.getArtists()
    ).subscribe(res => {
      this.artists = res[0];
    });
  }

}
