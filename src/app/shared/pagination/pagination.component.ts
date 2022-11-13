import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';

const DEFAULT_BUTTONS_VALUE = 6;

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationComponent implements OnInit {
  @Input()
  set totalItemsCount(count: number | null) {
    this._totalItemsCount = count || 0;
    this.updateParameters(this._totalItemsCount);
  }

  _totalItemsCount!: number;

  @Input()
  countItemsPerPage!: number;

  @Input()
  paginationButtonCount = DEFAULT_BUTTONS_VALUE;

  @Output()
  loadPage = new EventEmitter<number>();

  paginationButtonArray: number[] = [];

  currentPage = 0;

  totalPageCount = 0;

  ngOnInit(): void {
    this.updateParameters(this._totalItemsCount);
  }

  private updateParameters(count: number): void {
    if (this.countItemsPerPage && count) {
      this.totalPageCount = Math.ceil(count / this.countItemsPerPage);
      this.currentPage = this.currentPage || 1;
    }

    this.setInitialButtonsArray();
  }

  private setInitialButtonsArray() {
    const maxButtons = Math.min(
      this.paginationButtonCount,
      this.totalPageCount
    );

    for (let i = 1; i < maxButtons + 1; i++) {
      this.paginationButtonArray.push(i);
    }
  }

  getNotIsPossibleToMove(step: number, index = 0): boolean {
    const resultPage = this.paginationButtonArray[index] + step;
    if (resultPage > this.totalPageCount || resultPage <= 0) {
      return true;
    }
    return false;
  }

  getIfCurrentPage(i: number): boolean {
    return i === this.currentPage;
  }

  goToPage(pageStart: number, offset = 0): void {
    this.currentPage = pageStart;
    if (offset) {
      this.paginationButtonArray = this.paginationButtonArray.map(
        (value) => value + offset
      );
    }
    return this.loadPage.emit(pageStart);
  }

  getOffsetForLatest(): number {
    return (
      this.totalPageCount -
      this.paginationButtonArray[this.paginationButtonArray.length - 1]
    );
  }
}
