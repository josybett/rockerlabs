import { Component } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppStore } from '../app.reducer';

@Component({
  selector: 'header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  colapsado: number = 0;

  constructor(private ngRedux: NgRedux<IAppStore>) {}

  ngOnInit() {
    this.ngRedux.dispatch({ type: 'COLAPSAR' });
  }

  colapse(){
    if(this.colapsado == 0){
      this.colapsado = 1;
    }else{
      this.colapsado = 0;
    }
  }

}