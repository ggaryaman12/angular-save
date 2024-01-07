import { Component,Input,EventEmitter,Output } from '@angular/core';
import { Compound,CompoundResponse } from '../../compound';

@Component({
  selector: 'app-add-compound',
  templateUrl: './add-compound.component.html',
  styleUrls: ['./add-compound.component.css']
})
export class AddCompoundComponent {
  name:string='';
  image:string='';
  desc:string='';
  @Output() addCompound:EventEmitter<any>=new EventEmitter();

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
    this.addCompound.emit(obj);
    this.name='';
    this.image='';
    this.desc='';
  }

}
