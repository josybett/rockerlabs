import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { select } from 'ng2-redux';

@Component({
  selector: 'navegation',
  templateUrl: './navegation.component.html'
})
export class NavegationComponent {
  @select('analitycs') analitycs$;
  @select('news') news$;
  @select('board') board$;
  @select('briefcase') briefcase$;
}