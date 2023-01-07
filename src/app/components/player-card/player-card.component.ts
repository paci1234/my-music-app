import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Artists} from '../../artists';
import {Subscription} from 'rxjs';

declare var $: any;

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

    $(document).ready(() => {
      $('#pick-an-artist').on('click', () => {
        $('html, body').animate({
          scrollTop: $('.album').offset().top - 50 + 'px'
        }, 200);
      });

    });

    this.chooseArtist();
  }

  triggerClick() {
    const scroll = document.querySelector("#pick-an-artist");
    if(scroll) {
      scroll.addEventListener('click', e => {});
      scroll.dispatchEvent(new Event('click'));
    }
  }

  chooseArtist() {
    this.triggerClick();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
