import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DishService {
  resturl:string='http://localhost:3000/rest/';
  menuItemurl:string='http://localhost:3000/menuItem/';
  cusGet:string='http://localhost:3000/cus/';
  constructor(private _http:HttpClient) { }
  getAll(){
    return this._http.get(this.resturl);
  }
  menuItem(id){
    return this._http.get(this.menuItemurl+id);
  }
  cusget(){
    return this._http.get(this.cusGet);
  }
}
