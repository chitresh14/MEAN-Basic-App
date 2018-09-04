import { Injectable } from '@angular/core';
import {Contact} from './contact';
import {Http ,Headers,Response} from '@angular/http';
import 'rxjs/add/operator/map';


// reactive js operator

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:Http) { }
  // retieving contacts
  getContacts(){
    return this.http.get('http://localhost:3000/api/contacts')
    .map(
      res => 
        res.json());
  }
  //add contact
  addContact(newContact){
    var headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/api/contact', newContact,{headers:headers})
    .map(res => res.json());

  }
  //delete Method
  deleteContact(id){
    return this.http.delete('http://localhost:3000/api/contact/'+ id)
    .map(res => res.json());
  }
}
