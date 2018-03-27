import { Component } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppStore } from '../app.reducer';

@Component({
  selector: 'news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {

    constructor(private ngRedux: NgRedux<IAppStore>) {}

    ngOnInit() {
      this.ngRedux.dispatch({ type: 'NEWS' });

  }

}