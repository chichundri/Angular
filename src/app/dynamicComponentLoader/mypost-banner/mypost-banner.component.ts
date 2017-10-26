import { Component, OnDestroy, ViewChild,AfterViewInit } from '@angular/core';
import { MypostDirective } from '../mypost.directive';
import { PostItem } from '../post-item';
import { MypostService } from '../mypost.service';

@Component({
  selector: 'app-mypost-banner',
  templateUrl: './mypost-banner.component.html',
  styleUrls: ['./mypost-banner.component.css']
})
export class MypostBannerComponent implements OnDestroy,AfterViewInit {
  constructor(private myPostService: MypostService) { }
  ngOnInit() { }

  @ViewChild(MypostDirective)
  private myPostDirective: MypostDirective;	

  // @ViewChild(MyPostComponent)
  // private myPostComponent: MyPostComponent;
  
  postItems: PostItem[];
  intervalId: any;	
  postIndex: number = -1;

  ngAfterViewInit() {
    this.myPostService.getAllPosts();
    this.startPostHighlights();
  }

  startPostHighlights() {
    this.intervalId = setInterval(() => {
    this.postIndex = (this.postIndex === this.postItems.length) ? 0 : this.postIndex + 1;
    
    //Use viewContainerRef from Directive
    this.myPostService.loadComponent(this.myPostDirective.viewContainerRef, this.postItems[this.postIndex]);

    }, 2000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
