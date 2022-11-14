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
import { Router } from '@angular/router';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokeListComponent implements OnInit, OnDestroy {
  $pokeList: Observable<Poke[]> = this.pokeListService.getPokeList().pipe();
  $pokeTotalCount: Observable<number> = this.pokeListService.getTotalCount();
  pageConst = {
    limit: LIMIT
  };

  destroyNotifier = new Subject<void>();

  constructor(
    private pokeListService: PokeListService,
    private alertService: AlertService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.pokeListService.loadPokeList(DEFAULT_OFFSET, LIMIT);
    this.pokeListService
      .getPokeListError()
      .pipe(takeUntil(this.destroyNotifier))
      .subscribe((mess) => mess && this.alertService.showAlertMessage(mess));
  }

  navigateToPokePage(poke: Poke): void {
    const pokeId = this.getPokeIdFromUrl(poke);
    this.router.navigate(['poke-item'], {
      queryParams: { pokeId }
    });
  }

  loadPageHandler($event: number): void {
    this.pokeListService.loadPokeList(($event - 1) * LIMIT, LIMIT);
  }

  ngOnDestroy() {
    this.destroyNotifier.next();
    this.destroyNotifier.complete();
  }

  private getPokeIdFromUrl(poke: Poke): string {
    const splitUrl = poke.url.split('/');
    return splitUrl[splitUrl.length - 2] || '';
  }
}
