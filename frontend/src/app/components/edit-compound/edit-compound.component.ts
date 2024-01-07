import { Component,Input,EventEmitter,Output } from '@angular/core';
import { Compound,CompoundResponse } from '../../compound';

@Component({
  selector: 'app-edit-compound',
  templateUrl: './edit-compound.component.html',
  styleUrls: ['./edit-compound.component.css']
})
export class EditCompoundComponent {
  
  @Input() name:string;
  @Input() image:string;
  @Input() desc:string;
  @Output() editCompound:EventEmitter<any>=new EventEmitter();

  onSubmit(){
    if(this.name==='' || this.image==='' || this.desc===''){
      alert('Please fill all fields');
      return ;
    }
    const obj:Compound={
      name:this.name,
      image:this.image,
      desc:this.desc
    }
    this.editCompound.emit(obj);
    window.location.reload();

    // this.name="";
    // this.image="";
    // this.desc="";
  }






}
