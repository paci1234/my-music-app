import {Component, OnDestroy, OnInit} from '@angular/core';
import {PrimeNGConfig} from 'primeng/api';
import {ArtistsService} from './artists.service';
import {Artists} from './artists';
import {forkJoin, Subscription} from 'rxjs';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, OnDestroy {

  constructor(
    private primengConfig: PrimeNGConfig,
    private artistsSvc: ArtistsService
  ) {
  }
  public title = 'MY MUSIC APP';
  public currentArtist: Artists;
  public currentAudioList: Artists;
  public currentHits: Artists;
  album = false;
  sub: Subscription;
  musicPlayer = false;
  isBottom: boolean;
  lightColor: any = 'white';
  darkColor: any = 'black';
  checked = false;
  searchTerm: string;
  artists: Artists[];
  artistName: any;
  isReady = false;

  ngOnInit() {
    forkJoin(
      this.artistsSvc.getArtists()
    ).subscribe(res => {
        this.artists = res[0];
      });
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
          scrollTop: $('#action-buttons').offset().top - 50 + 'px'
        }, 200);
      });
      $('#global-search').on('click', () => {
        $('html, body').animate({
          scrollTop: $('.album').offset().top - 50 + 'px'
        }, 200);
      });
      $('#player').on('click', () => {
        $('html, body').animate({
          scrollTop: $('#music-player').offset().top - 50 + 'px'
        }, 200);
      });
      $('#scrollToMusicPlayer').on('click', () => {
        console.log('triggered');
        $('html, body').animate({
          scrollTop: $('#music-player').offset().top - 50 + 'px'
        }, 200);
      });
      $('#pick-an-artist').on('click', () => {
        $('html, body').animate({
          scrollTop: $('.album').offset().top - 50 + 'px'
        }, 200);
      });
      $('#myMusicAppTitle').on('click', () => {
        $('html, body').animate({
          scrollTop: $('body').offset().top
        }, 200);
      });
    });

    this.primengConfig.ripple = true;
    this.isReady = true;
  }

  openAlbum() {
    this.album = !this.album;
  }

  openPlayer(artist) {
    this.currentArtist = artist;
    this.currentAudioList = artist;
    this.currentHits = artist;
  }

  // @HostListener('window:scroll', [])
  // onScroll(): void {
  //   if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
  //     this.isBottom = true;
  //   } else {
  //     this.isBottom = false;
  //   }
  // }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  changeTheme() {
  }
}
