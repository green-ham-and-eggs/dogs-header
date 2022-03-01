import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dogs-header';
  count=0;

  @HostListener('window:cartChange', ['$event'])
  myFunction(){
    this.count++;
    // Better: this.count = window.pdp.cart.count
    //console.log(window)
  }
}
