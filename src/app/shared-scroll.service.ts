import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedScrollService {
  private scrollTarget = new Subject<string>();
  scrollTarget$ = this.scrollTarget.asObservable();

  scrollTo(targetId: string) {
    this.scrollTarget.next(targetId);
  }
}
