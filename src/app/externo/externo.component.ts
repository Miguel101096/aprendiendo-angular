import { Component, OnInit } from '@angular/core';
import {PeticionesServices} from "../services/peticiones.services";

@Component({
  selector: 'externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionesServices]
})
export class ExternoComponent implements OnInit {
  public user:any;
  public userID:any;
  public fecha:any;
  public new_user: any;
  public usuario_guardado:any;

  constructor(
    private _peticionesServices:PeticionesServices
  ) {
    this.userID=1;
    this.new_user={
      "name":"",
      "job":""
    }
  }

  ngOnInit(): void {
    /*this._peticionesServices.getUser().subscribe(
      result=>{
        this.user=result.data;
      },
      error => {
        console.log(<any>error);
      }
    );*/
    this.cargarUsuario();
    this.fecha=new Date(2021, 2, 3);
  }

  cargarUsuario(){
    this._peticionesServices.getUser(this.userID).subscribe(
      result=>{
        this.user=result.data;
        console.log(this.user)
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  onSubmit(form: any){
    this._peticionesServices.addUser(this.new_user).subscribe(
      response=>{
        this.usuario_guardado=response;
        form.reset();
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
