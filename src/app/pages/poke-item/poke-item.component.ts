import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { PokeItemService } from './services/poke-item.service';
import { Observable, Subject, takeUntil, tap } from 'rxjs';
import { AlertService } from '../../services/alert.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PokeFullInfo } from '../../inrefaces/poke-full-info';

@Component({
  selector: 'app-poke-item',
  templateUrl: './poke-item.component.html',
  styleUrls: ['./poke-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokeItemComponent implements OnInit, OnDestroy {
  $pokeItem: Observable<PokeFullInfo> = this.pokeItemService.getPokeItem();
  pageConst = {};

  destroyNotifier = new Subject<void>();
  pokeId: string = '';

  constructor(
    private pokeItemService: PokeItemService,
    private alertService: AlertService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams
      .pipe(takeUntil(this.destroyNotifier))
      .subscribe((params) => {
        this.pokeId = params?.['pokeId'];
        this.pokeItemService.loadPokeItem(this.pokeId);
      });

    this.pokeItemService
      .getPokeItemError()
      .pipe(takeUntil(this.destroyNotifier))
      .subscribe((mess) => mess && this.alertService.showAlertMessage(mess));
  }

  ngOnDestroy() {
    this.destroyNotifier.next();
    this.destroyNotifier.complete();

    this.pokeItemService.resetPoke();
  }

  goToHome(): void {
    this.router.navigate(['']);
  }
}
