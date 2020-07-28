import { Component, OnInit, NgModule } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})




export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showMenu(){
  document.getElementById('navLinks').style.display='block';
  }

  hideMenu(){
  
    if (window.innerWidth < 820) {
      document.getElementById('navLinks').style.display='none';
     }
  }

}
