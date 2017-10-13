import { Component, OnInit, ViewChild, TemplateRef, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { MessageDirective } from '../directives/message.directive';

@Component({
  selector: 'app-cp-msg',
  templateUrl: './cp-msg.component.html',
  styleUrls: ['./cp-msg.component.css']
})
export class CpMsgComponent implements AfterViewInit {

  constructor() { }

  @ViewChild('msg') 
  private msgTempRef : TemplateRef<any>;

  @ViewChildren(MessageDirective) 
  private queryList : QueryList<MessageDirective>;

  ngAfterViewInit() {
    this.queryList.map(messageDirectivea => messageDirectivea.viewContainerRef.createEmbeddedView(this.msgTempRef)); 
  }

}
