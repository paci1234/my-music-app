import { Component, OnInit, HostListener } from '@angular/core';
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
  isReady = false;

  constructor() {}

  ngOnInit() {
    this.isReady = true;
    $(document).on('scroll', function() {
      if ( $(window).scrollTop() > 30) {
        $('.toolbar').addClass('toolbar-on-scroll');
      } else {
        $('.toolbar').removeClass('toolbar-on-scroll');
      }
    });
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
