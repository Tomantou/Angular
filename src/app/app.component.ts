import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  opened = true;
  title = 'NCL *  Nutri-Cosmétique en Ligne';
  toggleSidebar(){
    this.opened = !this.opened; 
  }
  
}