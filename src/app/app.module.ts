import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HighlightDirective } from './directives/highlight.directive';
import { IfDirectiveDirective } from './directives/if-directive.directive';
import { NgTemplateNgForComponent } from './ng-template-ngfor/ng-template-ngfor.component';
import { MessageDirective } from './directives/message.directive';
import { CpMsgComponent } from './cp-msg/cp-msg.component';
import { Cp1Component } from './cp1/cp1.component';
import { WriterComponent } from './writer/writer.component';
import { FavouriteFriendsComponent } from './favourite-friends/favourite-friends.component';
import { FavouriteBooksComponent } from './favourite-books/favourite-books.component';
import { BookDirective } from './directives/book.directive';
import { Cp2Component } from './cp2/cp2.component';
import { ContentChildrenCompComponent } from './content-children-comp/content-children-comp.component';
import { TabComponent } from './tab/tab.component';
import { PaneDirective } from './directives/pane.directive';
import { ViewChildrenComponent } from './view-children/view-children.component';
import { ParentComponent } from './parent/parent.component';
import { ChildoneComponent } from './childone/childone.component';
import { ChildtwoComponent } from './childtwo/childtwo.component';
import { TeamManagementComponent } from './crud/team-management/team-management.component';
import { TeamManagementService } from './crud/services/team-management.service';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    IfDirectiveDirective,
    NgTemplateNgForComponent,
    MessageDirective,
    CpMsgComponent,
    Cp1Component,
    WriterComponent,
    FavouriteFriendsComponent,
    FavouriteBooksComponent,
    BookDirective,
    Cp2Component,
    ContentChildrenCompComponent,
    TabComponent,
    PaneDirective,
    ViewChildrenComponent,
    ParentComponent,
    ChildoneComponent,
    ChildtwoComponent,
    TeamManagementComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule   
  ],
  providers: [TeamManagementService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
