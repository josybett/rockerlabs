import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewsComponent } from './news/news.component';
import { AnalitycsComponent } from './analitycs/analitycs.component';

const routes: Routes = [
    { 
        path: '',
        component: AnalitycsComponent
    },{
        path: 'news',
        component: NewsComponent
    }
];

@NgModule({
    imports: [ 
      RouterModule.forRoot(routes)
    ],
    exports: [ RouterModule ],
    providers: [ ]
})

export class AppRoutingModule {
    constructor(){}

}