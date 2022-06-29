import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Modelo/Persona';
import { ServiceService } from 'src/app/Service/service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  persona: Persona={id:0,nombre:'',telefono:''};
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
  }

  lista(){
    this.router.navigate(["listar"]);
  }

  Guardar(persona:Persona){
    this.service.newUser(persona)
    .subscribe(data=>{
      Swal.fire(
        '¡Guardado!',
        'Se agrego con Exito!!!',
        'success'
      )
      this.router.navigate(["listar"]);
    })
  }




}
