import {Component, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.scss']
})
export class MusicPlayerComponent implements OnInit {
  pageTitle = 'Music player';
  @Output() audioList = [
    {
      url: './assets/artists/ariana-grande/ariana_grande-no_tears_left_to_cry.mp3',
      title: 'Ariana Grande',
      cover: './assets/images/artists/ariana_grande_bg.jpg'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
