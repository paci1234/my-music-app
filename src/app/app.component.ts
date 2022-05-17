import { Component, OnInit, HostListener } from '@angular/core';
import {trigger} from '@angular/animations';
import {PrimeNGConfig} from 'primeng/api';
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
  isReady = false;

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    // Jquery
    $(document).on('scroll', () => {
      if ( $(window).scrollTop() > 30) {
        $('.toolbar').addClass('toolbar-on-scroll');
      } else {
        $('.toolbar').removeClass('toolbar-on-scroll');
      }
    });
    $(document).ready(() => {
      $('#search-in-album').on('shown.bs.modal', () => {
        $('#search-in-album').trigger('focus');
      });
      $('#albumBtn').on( 'click', () => {
        const target = $('html,body');
        target.animate({scrollTop: target.height()}, 200);
        $('#dummy').trigger('click');
      });
      $('#arrowDown').on( 'click', () => {
        $('html, body').animate({
          scrollTop: $("#action-buttons").offset().top
        }, 200);
      });
    });
    // End of Jquery
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

  changeTheme() {}
}
