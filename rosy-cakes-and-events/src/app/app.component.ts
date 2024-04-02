import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rosy-cakes-and-events';

  constructor(private router: Router) {}

  route() {
    this.router.navigate(['/#productSec2']);
  }
}
