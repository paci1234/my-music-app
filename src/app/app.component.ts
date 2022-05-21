import {Component, OnInit, HostListener} from '@angular/core';
import {PrimeNGConfig} from 'primeng/api';
import {ArtistsService} from './artists.service';
import {Artists} from './artists';
import {forkJoin} from 'rxjs';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  public title = 'MY MUSIC APP';
  album = false;
  isBottom: boolean;
  lightColor: any = 'white';
  darkColor: any = 'black';
  checked = false;
  searchTerm: string;
  artists: Artists[];
  // Music player
  audioList = [
    {
      url: './assets/artists/ariana-grande/ariana_grande-no_tears_left_to_cry.mp3',
      title: 'Ariana Grande',
      cover: './assets/images/artists/ariana_grande_bg.jpg'
    }
  ];
  isReady = false;

  constructor(
    private primengConfig: PrimeNGConfig,
    private artistsSvc: ArtistsService
  ) {
  }

  ngOnInit() {
    forkJoin(
      this.artistsSvc.getArtists()
    ).subscribe(res => {
        this.artists = res[0];
      });
    {}
    // Jquery
    $(document).on('scroll', () => {
      if ($(window).scrollTop() > 30) {
        $('.toolbar').addClass('toolbar-on-scroll');
      } else {
        $('.toolbar').removeClass('toolbar-on-scroll');
      }
    });
    $(document).ready(() => {
      $('#search-in-album').on('shown.bs.modal', () => {
        $('#search-in-album').trigger('focus');
      });
      $('#albumBtn').on('click', () => {
        const target = $('html,body');
        target.animate({scrollTop: target.height()}, 200);
        $('#dummy').trigger('click');
      });
      $('#arrowDown').on('click', () => {
        $('html, body').animate({
          scrollTop: $('#action-buttons').offset().top
        }, 200);
      });
      $('#global-search').on('click', () => {
        $('html, body').animate({
          scrollTop: $('#action-buttons').offset().top
        }, 200);
      });
      $('#player').on('click', () => {
        $('html, body').animate({
          scrollTop: $('#music-player').offset().top
        }, 200);
      });
      $('#pick-an-artist').on('click', () => {
        $('html, body').animate({
          scrollTop: $('.album').offset().top
        }, 200);
      });
    });

    this.primengConfig.ripple = true;
    this.isReady = true;
  }

  openAlbum() {
    this.album = !this.album;
  }

  // @HostListener('window:scroll', [])
  // onScroll(): void {
  //   if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
  //     this.isBottom = true;
  //   } else {
  //     this.isBottom = false;
  //   }
  // }

  changeTheme() {
  }
}
