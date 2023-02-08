import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
})
export class HeroeCardComponent {
  @Input() heroe: any = {};
  @Input() i: any = {};

  @Output() heroeSelected: EventEmitter<number>;

  constructor() {
    this.heroeSelected = new EventEmitter();
  }

  showHeroe() {
    this.heroeSelected.emit(this.i);
  }
}
