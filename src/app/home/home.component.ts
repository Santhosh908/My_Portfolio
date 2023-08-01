import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { CommonModule } from '@angular/common';
import {ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SharedScrollService } from '../shared-scroll.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
  
})
export class HomeComponent implements OnInit {
  constructor(private sharedScrollService: SharedScrollService,private router: Router) { }
  isDarkTheme: boolean = true; // Set to true for the dark theme and false for the light theme
  originalText: string = "Hello, Everyone! I am Santhosh Y";
  currentIndex: number = 0;
  originalText_2: string = "Student at R.M.D Engineering College";
  currentIndex_2:number=0;  
  slides: any[] = [
    {
      imageUrl: 'path/to/slide1.jpg',
      title: 'Slide 1 Title',
      description: 'Slide 1 Description'
    },
    {
      imageUrl: 'path/to/slide2.jpg',
      title: 'Slide 2 Title',
      description: 'Slide 2 Description'
    },
    // Add more slides as needed
  ];
  ngOnInit() {
    // this.typingEffect();
    this.typingEffect2();
  }
  @ViewChild('targetComponentRef', { static: false }) targetComponentRef!: ElementRef;

  typingEffect() {
    const typingTextElement = document.getElementById("typing-text");
    if (typingTextElement && this.currentIndex < this.originalText.length) {
      typingTextElement.textContent += this.originalText[this.currentIndex];
      this.currentIndex++;
      setTimeout(() => this.typingEffect(), 90); // Adjust the typing speed here (lower value for faster typing)
    }
  }
    typingEffect2() {
      const typingTextElement = document.getElementById("typing-text-2");
      if (typingTextElement && this.currentIndex_2< this.originalText_2.length) {
        typingTextElement.textContent += this.originalText_2[this.currentIndex_2];
        this.currentIndex_2++;
        setTimeout(() => this.typingEffect2(), 90); // Adjust the typing speed here (lower value for faster typing)
      }
    }
    
  @ViewChild('targetComponentRef1', { static: false }) targetComponentRef1!: ElementRef;


  ngAfterViewInit() {
    this.sharedScrollService.scrollTarget$.subscribe((targetId: string) => {
      if (targetId === 'targetComponentRef1' && this.targetComponentRef1) {
        this.targetComponentRef1.nativeElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  
}
  scrollToTarget() {
    this.sharedScrollService.scrollTo('targetComponentRef');
  }
  scrollToTarget2(){
    this.sharedScrollService.scrollTo('targetComponentRef2');
  }
  scrollToTarget3(){
    this.sharedScrollService.scrollTo('targetComponentRef3');
  }
  scrollToTarget4(){
    this.sharedScrollService.scrollTo('targetComponentRef4');
  }
  scrollToTarget5(){
    this.sharedScrollService.scrollTo('targetComponentRef5');
  }
  }
