  import { Directive, TemplateRef, ViewContainerRef,Input } from '@angular/core';

  @Directive({
    selector: '[appIfDirective]'
  })
  export class IfDirectiveDirective {

    constructor(private templateRef : TemplateRef<any>, private viewContainerRef : ViewContainerRef) { }
    // showCpIf : boolean = true;
    @Input() set appIfDirective (condition : boolean) {
      if(condition) {
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainerRef.clear();
      }
    }

    @Input() set forLoop(num : number) {
      for (var index = 0; index < num; index++) {
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      }
    }




  }
