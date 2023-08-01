import { Component, OnInit } from '@angular/core';
import { SharedScrollService } from '../shared-scroll.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private sharedScrollService: SharedScrollService) { }

  ngOnInit(): void {
  }
  scrollToTarget1() {
    this.sharedScrollService.scrollTo('targetComponentRef1');
  }
}
