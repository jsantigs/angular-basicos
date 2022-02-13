import { Component} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-mail-page',
  templateUrl: './mail-page.component.html',
})
export class MailPageComponent {

  nuevo: Personaje = {
    nombre: 'Roshi',
    poder: 2000
  }

  constructor () {}

}
