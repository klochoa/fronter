import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-nuestras-plantas',
  templateUrl: './nuestras-plantas.component.html',
  styleUrls: ['./nuestras-plantas.component.css']
})
export class NuestrasPlantasComponent implements OnInit {

  public plantas1: Array<any>=[]
  constructor(private activerouter: ActivatedRoute, private router: Router, private plantas: RestService) { }
  

  ngOnInit(): void {

    this.plantas.cargarinformacionplantas()
    .subscribe((resp: any) => {
       console.log('2',resp);

       this.plantas1 = resp;
       console.log('3',this.plantas1);
       
    })
    console.log('4',this.plantas1);
  }

  Ficha(id: any){
    this.router.navigate(['FichaTecnica']) 
  }
  goToLogin() {
    window.location.href='http://127.0.0.1:8000';
  }

}
