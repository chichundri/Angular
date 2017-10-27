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
import { SimpleChangesComponent } from './simple-changes/simple-changes.component';
import { EmployeeComponent } from './employee/employee.component';
import { TechnologyComponent } from './dynamicComponentLoader/technology/technology.component';
import { ArticleComponent } from './dynamicComponentLoader/article/article.component';
import { MypostDirective } from './dynamicComponentLoader/mypost.directive';
import { MypostBannerComponent } from './dynamicComponentLoader/mypost-banner/mypost-banner.component';
import { MypostService } from './dynamicComponentLoader/mypost.service';
import { UserComponent } from './select/user/user.component';
import { UserServiceService } from './select/user-service.service';
import { SyntaxComponent } from './syntax/syntax.component';
import { ExpressionComponent } from './expression/expression.component';
import { AttributeComponent } from './attribute/attribute.component';
import { SampleComponent } from './sample/sample.component';
import { HomeComponent } from './routing/home/home.component';
import { ViewDetailComponent } from './routing/view-detail/view-detail.component';
import { AddBookComponent } from './routing/add-book/add-book.component';
import { ManageBookComponent } from './routing/manage-book/manage-book.component';
import { UpdateBookComponent } from './routing/update-book/update-book.component';
import { PageNotFoundComponent } from './routing/page-not-found/page-not-found.component';
import { AppRoutingModule }  from './routing/app-routing.module';
import { LoginComponent } from './EMS/login/login.component';
import { RegisterComponent } from './EMS/register/register.component';



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
    TeamManagementComponent,
    SimpleChangesComponent,
    EmployeeComponent,
    TechnologyComponent,
    ArticleComponent,
    MypostDirective,
    MypostBannerComponent,
    UserComponent,
    SyntaxComponent,
    AttributeComponent,
    SampleComponent,
    HomeComponent,
    ViewDetailComponent,
    AddBookComponent,
    ManageBookComponent,
    UpdateBookComponent,
    PageNotFoundComponent,
    LoginComponent,
    RegisterComponent
    
  ],
  entryComponents: [ 
      ArticleComponent, 
      TechnologyComponent 
    ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule,AppRoutingModule
  ],
  providers: [TeamManagementService,MypostService,UserServiceService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
