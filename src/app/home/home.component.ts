import { Component, OnInit } from '@angular/core';
import { IImage } from '../../models/IImage';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  //images that are desplayed in the carrosell
  //Sourced: npmjs.com
  imageUrls: (string | IImage)[] = [
    { url: 'https://i.redd.it/48t7k73gcycy.png' },
    { url: 'https://i.redd.it/i42lna99hyiy.png' },
    { url: 'https://i.redd.it/n346gjjajfuy.png'},
    { url: 'https://i.redd.it/78tortovrt911.png'},
    {url: 'https://i.redd.it/fymwqa1zz6hy.jpg'},
    {url: 'http://i.imgur.com/5HS6gmr.jpg'}
    
  ];
  //settings for the carosell
  height: string = '425px';
  minHeight: string;
  disableSwiping: boolean = false;
  autoPlay: boolean = true;
  autoPlayInterval: number = 3333;
  stopAutoPlayOnSlide: boolean = true;
  debug: boolean = false;
  backgroundSize: string = 'cover';
  backgroundPosition: string = 'center center';
  backgroundRepeat: string = 'no-repeat';
  showDots: boolean = true;
  dotColor: string = '#FFF';
  showCaptions: boolean = true;
  captionColor: string = '#FFF';
  captionBackground: string = 'rgba(0, 0, 0, .35)';
  lazyLoad: boolean = false;
  hideOnNoSlides: boolean = false;
  width: string = '100%';
  ngOnInit() {
  }

}
