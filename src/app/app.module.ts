import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgRedux, NgReduxModule } from 'ng2-redux';
import { IAppStore, appReducer, INITIAL_STATE } from './app.reducer';

import { AppRoutingModule } from './app.routing';

import { AnalitycsService } from './analitycs/analitycs.service';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ChartsModule } from 'ng2-charts';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavegationComponent } from './navegation/navegation.component';
import { AnalitycsComponent  } from './analitycs/analitycs.component';
import { NewsComponent } from './news/news.component';

import { 
  DxChartModule, 
  DxSelectBoxModule,
  DxPieChartModule
} from 'devextreme-angular';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavegationComponent,
    AnalitycsComponent,
    NewsComponent    
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    ChartsModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgReduxModule,
    DxChartModule,
    DxPieChartModule,
    DxSelectBoxModule
  ],
  providers: [
    AnalitycsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(ngRedux: NgRedux<IAppStore>){
    ngRedux.configureStore(appReducer, INITIAL_STATE)
  }
}
