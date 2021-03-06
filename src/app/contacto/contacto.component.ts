import { Component, OnInit } from '@angular/core';
import {ContactoUsuario} from "../models/contacto.usuario";

@Component({
  selector: 'contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  public contacto_usuario:ContactoUsuario;
  public show_data: any;

  constructor() {
    // @ts-ignore
    this.contacto_usuario=new ContactoUsuario('','','');
  }

  ngOnInit(): void {

  }

  onSubmit(form: any){
    this.show_data=this.contacto_usuario;
    console.log(this.show_data);
    form.reset;
  }

}
