import { Component, OnInit } from '@angular/core';
import { ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { SharedScrollService } from '../shared-scroll.service';

@Component({
  selector: 'app-abtmecomp',
  templateUrl: './abtmecomp.component.html',
  styleUrls: ['./abtmecomp.component.css']
})
export class AbtmecompComponent implements OnInit {

  @ViewChild('targetComponentRef4', { static: false }) targetComponentRef4!: ElementRef;

  constructor(private sharedScrollService: SharedScrollService) {}

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.sharedScrollService.scrollTarget$.subscribe((targetId: string) => {
      if (targetId === 'targetComponentRef4' && this.targetComponentRef4) {
        this.targetComponentRef4.nativeElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  
}

}
