import { Component, ViewEncapsulation } from '@angular/core';

import {
  faHome,
  faSearch,
  faHeart,
  faUser,
  faAdd,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  /////////////////////////////////////////////
  //override the styles with your custom styles
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  faHome = faHome;
  faSearch = faSearch;
  faHeart = faHeart;
  faUser = faUser;
  faAdd = faAdd;
}
