import { Component, AfterContentInit, ContentChildren, ElementRef, QueryList  } from '@angular/core';

@Component({
  selector: 'favourite-friends',
  templateUrl: './favourite-friends.component.html',
  styleUrls: ['./favourite-friends.component.css']
})
export class FavouriteFriendsComponent implements AfterContentInit  {

  constructor() { }

  //QueryList + @ContentChildren + ElementRef
  @ContentChildren('ffname')
  allFriendsRef : QueryList<ElementRef>

  get allFriends() : string {
    return this.allFriendsRef ? this.allFriendsRef.map(f => f.nativeElement.innerHTML).join(', ') : '';
  }

  ngAfterContentInit() {
    console.log(this.allFriends);
  }

}
