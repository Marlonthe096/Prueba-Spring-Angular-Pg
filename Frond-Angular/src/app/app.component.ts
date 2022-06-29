import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Frond';

  constructor(private router:Router){}

  listar(){
    this.router.navigate(["listar"])
  }
  nuevo(){
    this.router.navigate(["add"])
  }
  Guardar(){
    this.router.navigate(["add"])
  }

}
