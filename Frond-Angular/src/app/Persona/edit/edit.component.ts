import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Modelo/Persona';
import { ServiceService } from 'src/app/Service/service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  id:string="";
  persona: Persona={id:0,nombre:'',telefono:''};
  constructor(private router:Router, private service: ServiceService) { }

  ngOnInit(): void {
    if(this.service.idedit==0){
      Swal.fire(
        '¡Seleccione!',
        'Seleccione una fila!!!',
        'question'
      )
      this.router.navigate(["listar"]);
    }else{
      this.service.getUser(this.service.idedit).
    subscribe((persona) => {
      this.persona = persona;
    })
    }
  }

  modificar(persona:Persona){
    this.persona.id = this.service.idedit;
    this.service.updateUser(persona)
    .subscribe(data=>{
      Swal.fire(
        '¡Modificado!',
        'Se edito con Exito!!!',
        'success'
      )
      this.router.navigate(["listar"]);
    })
  }

  lista(){
    this.router.navigate(["listar"]);
  }
}
