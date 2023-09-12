import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bandeau-superieur',
  templateUrl: './bandeau-superieur.component.html',
  styleUrls: ['./bandeau-superieur.component.scss']
})
export class BandeauSuperieurComponent {

  constructor(private router: Router) {
    
  }



  

  public retourMenu() {
    this.router.navigate(['./todos']);
  }
}
