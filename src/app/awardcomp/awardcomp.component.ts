import { Component, OnInit } from '@angular/core';
import { ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { SharedScrollService } from '../shared-scroll.service';

@Component({
  selector: 'app-awardcomp',
  templateUrl: './awardcomp.component.html',
  styleUrls: ['./awardcomp.component.css']
})
export class AwardcompComponent implements OnInit {
  @ViewChild('targetComponentRef2', { static: false }) targetComponentRef2!: ElementRef;

  constructor(private sharedScrollService: SharedScrollService) {}

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.sharedScrollService.scrollTarget$.subscribe((targetId: string) => {
      if (targetId === 'targetComponentRef2' && this.targetComponentRef2) {
        this.targetComponentRef2.nativeElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  
}
}