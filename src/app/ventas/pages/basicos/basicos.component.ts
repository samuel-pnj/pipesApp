import { Component} from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: []
})
export class BasicosComponent{

  nombreLower: string = 'samuel';
  nombreUpper: string = 'Samuel';
  nombreCompleto: string ='SaMuel PeRez';

  fecha: Date = new Date ();

}
