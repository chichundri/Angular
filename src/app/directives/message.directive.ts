  import { Directive, ViewContainerRef } from '@angular/core';

  @Directive({
    selector: '[app-Message]'
  })
  export class MessageDirective {

    constructor(public viewContainerRef : ViewContainerRef) { }
    

  }
