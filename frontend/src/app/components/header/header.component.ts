import { Component } from '@angular/core';
import { Compound } from '../../compound';
import {CompoundService} from '../../services/compound.service'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  openCreateModal:boolean = false;


  openCreateModalFunc(){
    this.openCreateModal = true;
  }

  closeCreateModalFunc(){
    this.openCreateModal = false;
  }
}
