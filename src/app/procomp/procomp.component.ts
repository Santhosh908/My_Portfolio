import { Component, OnInit } from '@angular/core';
import { ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { SharedScrollService } from '../shared-scroll.service';

@Component({
  selector: 'app-procomp',
  templateUrl: './procomp.component.html',
  styleUrls: ['./procomp.component.css']
})
export class ProcompComponent implements OnInit {
  @ViewChild('targetComponentRef', { static: false }) targetComponentRef!: ElementRef;

  constructor(private sharedScrollService: SharedScrollService) {}

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.sharedScrollService.scrollTarget$.subscribe((targetId: string) => {
      if (targetId === 'targetComponentRef' && this.targetComponentRef) {
        this.targetComponentRef.nativeElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }


}
