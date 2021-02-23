import{ Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
//Inyectar la dependencia para no estar haciendo a cada momento new
export class PeticionesServices {
  //Utilizamos https://reqres.in/
  public url:string='';

  constructor(
    public _http:HttpClient
  ) {
    this.url="https://reqres.in/" // Usar con peticion https://reqres.in/api/users/2
  }


  //getUser():Observable<any>{
  getUser(userID: string):Observable<any>{
    //return this._http.get(this.url+'api/user/'); //peticion por ajax http
    return this._http.get(this.url+'api/users/'+userID); //peticion por ajax http
  }
  addUser(user: any):Observable<any>{
    let params=JSON.stringify(user);
    let headers=new HttpHeaders().set('Content-Type', 'application/json')
    return this._http.post(this.url+'api/users', params, {headers:headers})
  }

}
