import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    h3{
      color: dodgerblue;
    }`]
})
export class AppComponent {

  constructor(public router: Router) {
  }

  ngOnInit() {
    if (this.router.url === '/') {
        this.router.navigate(['/tasks']);
    }
}

}

