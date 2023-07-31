import { Component, OnInit } from '@angular/core';
import { ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { SharedScrollService } from '../shared-scroll.service';

@Component({
  selector: 'app-coursecomp',
  templateUrl: './coursecomp.component.html',
  styleUrls: ['./coursecomp.component.css']
})
export class CoursecompComponent implements OnInit {

  @ViewChild('targetComponentRef3', { static: false }) targetComponentRef3!: ElementRef;

  constructor(private sharedScrollService: SharedScrollService) {}

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.sharedScrollService.scrollTarget$.subscribe((targetId: string) => {
      if (targetId === 'targetComponentRef3' && this.targetComponentRef3) {
        this.targetComponentRef3.nativeElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  
}
}
