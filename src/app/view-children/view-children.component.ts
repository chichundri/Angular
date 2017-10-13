import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { PaneDirective } from '../directives/pane.directive';

@Component({
  selector: 'app-view-children',
  templateUrl: './view-children.component.html',
  styleUrls: ['./view-children.component.css']
})
export class ViewChildrenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @ViewChildren(PaneDirective) panes: QueryList<PaneDirective>;
  serializedPanes: string = '';
 
  shouldShow = false;
 
  show() { 
    this.shouldShow = true;
  }

  ngAfterViewInit() {
    this.calculateSerializedPanes();
    this.panes.changes.subscribe((r) => { this.calculateSerializedPanes(); });
  }

  calculateSerializedPanes() {
    setTimeout(() => { this.serializedPanes = this.panes.map(p => p.id).join(', '); }, 0);
  }

}
