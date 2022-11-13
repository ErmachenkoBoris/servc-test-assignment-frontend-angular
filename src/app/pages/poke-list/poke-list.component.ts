import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { PokeListService } from './services/poke-list.service';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Poke } from '../../inrefaces/poke';
import { DEFAULT_OFFSET, LIMIT } from './poke-list.consts';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokeListComponent implements OnInit, OnDestroy {
  $pokeList: Observable<Poke[]> = this.pokeListService.getPokeList();
  $pokeTotalCount: Observable<number> = this.pokeListService.getTotalCount();
  pageConst = {
    limit: LIMIT
  };

  destroyNotifier = new Subject<void>();

  constructor(
    private pokeListService: PokeListService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.pokeListService.loadPokeList(DEFAULT_OFFSET, LIMIT);
    this.pokeListService
      .getPokeListError()
      .pipe(takeUntil(this.destroyNotifier))
      .subscribe((mess) => mess && this.alertService.showAlertMessage(mess));
  }

  navigateToPokePage(poke: Poke): void {}

  loadPageHandler($event: number): void {
    this.pokeListService.loadPokeList(($event - 1) * LIMIT, LIMIT);
  }

  ngOnDestroy() {
    this.destroyNotifier.next();
    this.destroyNotifier.complete();
  }
}
