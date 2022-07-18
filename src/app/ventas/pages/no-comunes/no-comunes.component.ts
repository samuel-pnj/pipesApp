import { Component} from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: []
})
export class NoComunesComponent{

  nombre: string = 'Samuel';
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino' : 'invitarla'
  }
  clientes: string[] = ['Maria', 'Pedro', 'Yoli'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1':'tenemos un cliente esperando',
    '=2': 'tenemos dos clientes esperando',
    'other': 'tenemos # clientes esperando'
  }

  cambiarCliente(){
    this.nombre = 'Antonia';
    this.genero = 'femenino'
  }

  borrarCliente(){
    this.clientes.pop();
  }

  persona = {
    nombre: 'Samuel',
    edad: 30,
    dirección: 'Málaga, España'
  }

  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ]

  miObservable = interval(1000);

  valorPromesa = new Promise ( ( resolve, reject) => {
    setTimeout(() => {
      resolve ( 'Tenemos data de promesa')
    }, 3500);
  })

}
