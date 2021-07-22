import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-ficha-tecnica',
  templateUrl: './ficha-tecnica.component.html',
  styleUrls: ['./ficha-tecnica.component.css']
})
export class FichaTecnicaComponent implements OnInit {
  public plantas1: Array<any> = []
  public nombreComun: string = "";
  public imagen: string = "";
  public optima: string = "";
  public nombreEpoca: string = "";
  public detalle: string = "";
  public categoria: string = "";

  //Taxonomia
  public familia: string = "";
  public genero: string = "";
  public especie: string = "";
  public semilla: string = "";
  public raiz: string = "";
  public tallo: string = "";
  public hojas: string = "";
  public inflorescencia: string = "";
  public fruto: string = "";

  //Labores Cultivo
  public descripcion: string = "";
  public cantidadSemilla: string = "";
  public detallePlantacion: string = "";
  public distanciaSurcos: string = "";
  public distanciaPlantas: string = "";
  public hilerasSurco: string = "";
  public preparacionTerreno: string = "";
  public recoleccionAlmacenamiento: string = "";
  public buenaAsociacion: string = "";
  public malaAsociacion: string = "";
  public usoAplicacion: string = "";



  constructor(private plantas: RestService) {
    
  }


  ngOnInit(): void {

    this.plantas.cargarinformacionplantas()
      .subscribe((resp: any) => {
        this.plantas1 = resp;
        this.cargarInfo(resp);

      })

  }

  cargarInfo(resp: any){
    this.nombreComun =resp[0].idTaxonomia.nombreComun;
    this.imagen=resp[0].imagen;
    this.optima=resp[0].idTemperatura.optima;
    this.nombreEpoca=resp[0].idEpocaSiembra.nombreEpoca;
    this.detalle=resp[0].idRiego.detalle;
    this.categoria=resp[0].idCategoria.categoria;
    this.familia=resp[0].idTaxonomia.familia;
    this.genero=resp[0].idTaxonomia.genero;
    this.especie=resp[0].idTaxonomia.especie;
    this.semilla=resp[0].idMorfologia.semilla;
    this.raiz=resp[0].idMorfologia.raiz;
    this.tallo=resp[0].idMorfologia.tallo;
    this.hojas=resp[0].idMorfologia.hojas;
    this.inflorescencia=resp[0].idMorfologia.inflorescencia;
    this.fruto=resp[0].idMorfologia.fruto;
    this.descripcion=resp[0].idSemillero.descripcion;
    this.cantidadSemilla=resp[0].idSemillero.cantidadSemilla;
    this.detallePlantacion=resp[0].idPlantacion.detalle;
    this.distanciaSurcos=resp[0].idPlantacion.distanciaSurcos;
    this.distanciaPlantas=resp[0].idPlantacion.distanciaPlantas;
    this.hilerasSurco=resp[0].idPlantacion.hilerasSurco;
    this.preparacionTerreno=resp[0].preparacionTerreno;
    this.recoleccionAlmacenamiento=resp[0].idCuidado.recoleccionAlmacenamiento;
    this.buenaAsociacion=resp[0].idPlantacion.buenaAsociacion;
    this.malaAsociacion=resp[0].idPlantacion.malaAsociacion;
    this.usoAplicacion=resp[0].usoAplicacion;



  }
  goToLogin() {
    window.location.href='http://127.0.0.1:8000';
  }



}