import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-app';

  ngOnInit(): void {
    console.log("on init called");
    import(/* webpackChunkName: "rApp" */ "./react-app").then(({ default: InitReactApp }) => {
      InitReactApp();
    }).catch(error => 'An error occurred while loading the component');
    import(/* webpackChunkName: "jqApp" */ "./jquery-app").then(({ default: InitJQueryApp }) => {
      InitJQueryApp("#jquery-root");
    }).catch(error => 'An error occurred while loading the component');
  }

}
