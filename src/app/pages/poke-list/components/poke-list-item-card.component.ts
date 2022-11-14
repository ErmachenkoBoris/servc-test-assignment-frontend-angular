import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Poke} from "../../../inrefaces/poke";

@Component({
  selector: 'app-poke-list-item-card',
  templateUrl: './poke-list-item-card.component.html',
  styleUrls: ['./poke-list-item-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokeListItemCardComponent {

  @Input()
  poke!: Poke;

  @Output()
  clickOnPoke = new EventEmitter();

  clickOnPokeHandler(): void {
    this.clickOnPoke.emit();
  }
}
