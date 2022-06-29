import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Persona } from 'src/app/Modelo/Persona';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  personas:Persona[] = [];
  constructor(private  service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.service.getUsers().
    subscribe((personas) => {
      this.personas = personas;
    })

  }
  delete(persona:Persona){
    this.service.deleteUser(persona)
    .subscribe(data=>{
      this.personas = this.personas!.filter(p=>p!==persona);
      Swal.fire(
        '¡Eliminado!',
        'Se elimino con Exito!!!',
        'success'
      )
    })
  }

  edit(persona:Persona){
    this.service.getUser(persona.id)
    .subscribe(data=>{
      this.service.idedit = persona.id;
      this.router.navigate(["edit"]);
    });
  }
  add(){
      this.router.navigate(["add"]);
  }

}
