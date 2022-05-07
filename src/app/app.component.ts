import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  public title = 'MY MUSIC APP';
  album = false;
  lightColor: any = 'white';
  darkColor: any = 'black';
  checked = false;
  isReady = false;

  constructor() {}

  ngOnInit() {
    this.isReady = true;
  }

  openAlbum() {
    this.album = !this.album;
  }

  changeTheme() {}
}
