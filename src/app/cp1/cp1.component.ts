import { Component, OnInit, AfterViewInit, 
         QueryList,ViewChildren, ViewChild,
         TemplateRef, ElementRef, ContentChildren } from '@angular/core';
import { MessageDirective } from '../directives/message.directive';
import { WriterComponent } from '../writer/writer.component';


@Component({
  selector: 'app-cp1',
  templateUrl: './cp1.component.html',
  styleUrls: ['./cp1.component.css']
})
export class Cp1Component implements AfterViewInit  {
  constructor() { }

  //QueryList + @ViewChildren + Directive
  @ContentChildren(MessageDirective)
  private msgList: QueryList<MessageDirective>

  //ViewChild is used to grab the reference of something in template
  //ViewChildren and ContentChildren always return the QueryList which provides the observable that watch the changes
  @ViewChild('msgTemp')
  private msgTempRef : TemplateRef<any>

  //QueryList + @ViewChildren + Component
  @ViewChildren('bkWriter') 
  private allWriters: QueryList<WriterComponent>
  showAllWriter = false;

  //QueryList + @ViewChildren + ElementRef
  @ViewChildren('pname')
  allPersons: QueryList<ElementRef>


  ngAfterViewInit() {
    console.log('--- using QueryList.changes ---');		
    this.allWriters.changes.subscribe(list => {
               list.forEach(writer1 => console.log(writer1.writerName + ' - ' + writer1.bookName));	
    });

    console.log('--- using QueryList.forEach ---');
    this.msgList.forEach(messageDirective => 
         messageDirective.viewContainerRef.createEmbeddedView(this.msgTempRef));
    this.allWriters.forEach(writer => console.log(writer.writerName + ' - ' + writer.writerBook));
    
    console.log('--- using QueryList.length ---');
    console.log(this.allWriters.length);

    console.log('--- using QueryList.find ---');
    let javaWriter = this.allWriters.find(writerr => writerr.writerBook === 'Java Tutorials'); 
    console.log(javaWriter.writerName);
      
    console.log('--- using QueryList.map ---');
    let wnames = this.allWriters.map(writer => writer.writerName);			 
    for (let name of wnames) {
         console.log(name);
    }
      
    console.log('--- using QueryList.filter ---');
    let writers = this.allWriters.filter(writer => writer.writerName === 'Krishna');			 
    for (let w of writers) {
         console.log(w.writerBook);
    }
      
    console.log('--- using QueryList.first ---');
    let firstEl = this.allPersons.first;
    console.log(firstEl.nativeElement.innerHTML);
      
    console.log('--- using QueryList.last ---');
    let lastEl = this.allPersons.last;
    console.log(lastEl.nativeElement.innerHTML);
  }

  onShowAllWriters() {
    this.showAllWriter = (this.showAllWriter === true)? false : true;
  }	
}
