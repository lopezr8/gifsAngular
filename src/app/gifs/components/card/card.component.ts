import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card',
  templateUrl: './card.component.html'
})
export class CardComponent implements OnInit {
  @Input()
  public gif!:Gif;
  constructor(){}

  ngOnInit(): void {
    if(!this.gif) throw new Error('Gif propoerty is required');
  }
}
