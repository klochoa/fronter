import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }
  cargarinformacionplantas(){
    const url = 'http://127.0.0.1:8000/api/plantas/?format=json';

    return this.http.get(url);

  }

  
}