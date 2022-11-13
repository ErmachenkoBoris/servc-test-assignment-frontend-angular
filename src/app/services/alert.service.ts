import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  showAlertMessage(message: string): void {
    // TODO here could be implemented logic with popup
    setTimeout(() => alert(message), 0);
  }
}
