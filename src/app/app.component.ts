import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  public title = 'MY MUSIC APP';
  album = false;
  isReady = false;

  constructor() {}

  ngOnInit() {
    this.isReady = true;
  }
}
