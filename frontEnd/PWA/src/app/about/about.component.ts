import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TalksService } from '../services/talks.services';
import { trigger,state,style,transition,animate } from '@angular/animations';
import { TimeLineComponent } from './timeline/timeline.component';
declare const jQuery:any;
declare const $:any;
declare const GitHubCalendar:any;


@Component({
    selector:'about-component',
    templateUrl:'about.component.html',
    styleUrls:['about.component.css'],
    animations:[
        trigger('enterState',[
          state('void',style({
            transition : "all ease-out",
            opacity:0,
            transform:'translateX(-1500px)'
          })),
          transition(':enter',[
            animate(800,style({
              transform:'translate(0px)',
              opacity:1
            }))
          ])
        ])
      ]
})
export class AboutComponent implements OnInit{
    
    constructor(
        
    ) { }
    ngOnChanges(){
      
    }
   ngOnInit(){
       /*--------------------*/
       // JSON is Loaded.
       /*--------------------*/
       
        GitHubCalendar(".calendar", "Rembrandtsx");
    }
}