import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../Modelo/Persona';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  idedit:number=0;
  private apiServerURL = environment.apiBaseURL;

  constructor(private http:HttpClient) { }


  public getUsers(){
    return this.http.get<Persona[]>(`${this.apiServerURL}/user/getUsers`);
  }

  newUser(persona:Persona){
    return this.http.post<Persona>(`${this.apiServerURL}/user/newUser`, persona);
  }
  deleteUser(persona:Persona){
    return this.http.delete<Persona>(`${this.apiServerURL}/user/deleteUser/`+persona.id);
  }
  getUser(id:number){
    return this.http.get<Persona>(`${this.apiServerURL}/user/getUser/`+id);
  }
  updateUser(persona:Persona){
    return this.http.post<Persona>(`${this.apiServerURL}/user/updateUser`, persona);
  }

}

