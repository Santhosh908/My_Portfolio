import { Component, OnInit } from '@angular/core';
import { ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { SharedScrollService } from '../shared-scroll.service';

@Component({
  selector: 'app-contactcomp',
  templateUrl: './contactcomp.component.html',
  styleUrls: ['./contactcomp.component.css']
})
export class ContactcompComponent implements OnInit {
  @ViewChild('targetComponentRef5', { static: false }) targetComponentRef5!: ElementRef;

  constructor(private sharedScrollService: SharedScrollService) {}

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.sharedScrollService.scrollTarget$.subscribe((targetId: string) => {
      if (targetId === 'targetComponentRef5' && this.targetComponentRef5) {
        this.targetComponentRef5.nativeElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  
}


}
