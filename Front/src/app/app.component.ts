import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MinicoreService } from './services/minicore.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MinicoreFront';
  listClientes:any=[]
  listContratos:any=[]
  listacore:any=[]
  public fechasForm: FormGroup;
  total:any=0;

  constructor(
    private minSrv: MinicoreService,
    private fb:FormBuilder
  ){}

  ngOnInit(): void {

    this.cargarPagina()
    this.fechasForm= this.fb.group({
      fechaIni:['', Validators.required],
      fechaFIn:['',[Validators.required]]
    });
  }

  cargarPagina(){
    this.cargarClientes();
    this.cargarContratos();

  }

  cargarClientes(){
    this.minSrv.getClientes().subscribe((resp:any)=>{
      this.listClientes = resp.clientes
    })
  }

  cargarContratos(){
    this.minSrv.getContratos().subscribe((resp:any) => {
      this.listContratos = resp.contratos;

      this.listContratos.forEach((contrato:any) => {
        this.listClientes.forEach((cliente:any)=>{
          if(contrato.clienteID === cliente.id){
            contrato.cliente = cliente.nombre;
          }
        })
      });
    })
  }

  enviarDatos(){
    if(this.fechasForm.invalid){
      return;
    }

    const fechaIni = this.fechasForm.get('fechaIni').value;
    const fechaFin = this.fechasForm.get('fechaFIn').value;

    this.minSrv.generarReporte(fechaIni,fechaFin).subscribe((resp:any)=>{
      this.listacore=resp.reporte;
      this.cargarTotal();
    })


  }

  cargarTotal(){
    this.total
    this.listacore.forEach((element:any)=>{
      this.total = this.total+element.montoTotal
    })
  }
}
