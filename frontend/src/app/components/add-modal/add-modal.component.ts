import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core'; 
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'; 
import { CompoundService } from '../../services/compound.service';  

@Component({   
  selector: 'app-add-modal',   
  templateUrl: './add-modal.component.html',   
  styleUrls: ['./add-modal.component.css'] 
}) 

export class AddModalComponent implements OnInit {
  name:string='';
  image:string='';
  desc:string='';
  @Output() close: EventEmitter<void> = new EventEmitter<void>();    
  compoundForm: FormGroup = new FormGroup({});

  constructor(private route: ActivatedRoute, private compoundService: CompoundService, private router: Router) { } 

  ngOnInit() {
    this.compoundForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required),
      'image': new FormControl(null, Validators.required)
    });
  }

  closeCreateModalFunc(){     
    this.close.emit();   
  }    

  onSubmit(){     
    if (this.compoundForm.valid) {
      console.log(this.compoundForm.value);
      const newCompound = {       
        name: this.compoundForm.get('name')?.value,
        image: this.compoundForm.get('image')?.value ,  
        desc: this.compoundForm.get('description')?.value     
        
      };      
      console.log(newCompound);      
      this.compoundService.addCompound(newCompound).subscribe(() => {       
        this.router.navigate(['/']);       
        window.location.reload();     
      }, error => console.log(error));          
      this.compoundForm.reset();
      this.closeCreateModalFunc();   
    } else {
      console.log('Form Not Valid');
    }
  } 
}