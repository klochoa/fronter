import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-ficha-tecnica',
  templateUrl: './ficha-tecnica.component.html',
  styleUrls: ['./ficha-tecnica.component.css']
})
export class FichaTecnicaComponent implements OnInit {

  public plantas1: Array<any>=[]

  

  constructor(private plantas: RestService){
    console.log('1',this.plantas1);
  }


  ngOnInit(): void {

    this.plantas.cargarinformacionplantas()
    .subscribe((resp: any) => {
       console.log('2',resp);

       this.plantas1 = resp;
       
       
    })
    
  }
  goToLogin() {
    window.location.href='http://127.0.0.1:8000';
  }
  
  
  }

