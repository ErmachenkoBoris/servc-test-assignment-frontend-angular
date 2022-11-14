import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PokeStats } from '../../../inrefaces/poke-full-info';

@Component({
  selector: 'app-poke-stats-item',
  templateUrl: './poke-stats-item.component.html',
  styleUrls: ['./poke-stats-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokeStatsItemComponent {
  @Input()
  stat!: PokeStats;
}
