import { Character } from './../../interfaces/character.interface';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'dbz-list',
  templateUrl: `./list.component.html`,
  styleUrl: './list.component.css',
})
export class ListComponent {



  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }]


  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  // onDelete = Index values : number
  deleteCharacterById(id?: string):void {
    if( !id ) return;
    // TODO: Emitir el ID del personaje
    this.onDelete.emit(id);
  }


}
