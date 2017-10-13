import { Directive, ElementRef, OnInit, Input, AfterViewInit, HostListener  } from '@angular/core';

@Directive({
  selector: '[app-highlight]'
})
export class HighlightDirective implements AfterViewInit,OnInit {
  
  constructor(private eleRef : ElementRef) { }

  @Input() passDefaultFontSizeToDirective : string;
  @Input() passDefaultColorToDirective : string;

   ngOnInit() : void {
    this.passDefaultColorToDirective = this.passDefaultColorToDirective || 'green';
    this.passDefaultFontSizeToDirective = this.passDefaultFontSizeToDirective || '20px';
    this.eleRef.nativeElement.style.color = this.passDefaultColorToDirective;
    this.eleRef.nativeElement.style.fontSize = this.passDefaultFontSizeToDirective;
   }

   ngAfterViewInit() : void {
   }

   @HostListener('click')  clickEvent() {
    this.eleRef.nativeElement.style.color = 'black';
   }

   @HostListener('mouseover')  mouseOverEvent() {
    this.eleRef.nativeElement.style.color = 'green';
   }

  //  @HostListener('mouseout') mouseoutEvent() {
  //   this.eleRef.nativeElement.style.color = 'yellow';
  //  }
   
   
}
