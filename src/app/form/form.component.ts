import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';

export class data {
  id!: number;
  isSelected: string = '';
  dateFormControl!: string;
  company!: string;
  type!: string;
  typeFormControl!: string;
  descFormControl!: string;
  moduleFormControl!: string;
  hourFormControl!: string;
  minFormControl!: string;
  statusFormControl!: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
 form: FormGroup;
 isSelected: boolean = false;
 items: data[] = [];
 data = new data();
 SelectedIDs :any =[];
 index: any;
  constructor(private fb : FormBuilder) {
    this.form = this.fb.group({
      'dateFormControl': new FormControl('', Validators.required),
      'company': new FormControl('', Validators.required),
      'type': new FormControl('', Validators.required),
      'typeFormControl': new FormControl('' , Validators.required),
      'descFormControl': new FormControl('' ,  Validators.required),
      'moduleFormControl' :new FormControl('', Validators.required),
      'hourFormControl' : new FormControl('', Validators.required),
      'minFormControl' : new FormControl('', Validators.required),
      'statusFormControl' : new FormControl('', Validators.required),
    })
   }
  ngOnInit(): void {
  }
  submit(){
    for (let i = 0; i < 1; i++) {
      this.items.push(this.form.value);
    }
    console.log(this.items)
    this.form.reset();
  }
  delete(i: any){
    this.items.splice(i,1);
  }
  selectID(i: any){
    // // alert(i);
    for (let j = 0; j < this.items.length; j++) { 
      if(j==i){       
        // alert("hi"+j);
        this.items[j].isSelected = 'true';
      }else{
        // alert("hello"+j);
        this.items[j].isSelected = 'false';
      }
    }
    console.log(this.items); 
  }
  deleteAll(){
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].isSelected == 'true') {
          this.items.splice(i, 1);
      }    
  }

  // Remove entries from isSelected array.
  // this.isSelected = this.isSelected.filter(checkbox => checkbox === false);

  //   for (var i = this.SelectedIDs.length - 1; i >= 0; i--) {
  //     this.items.splice(this.SelectedIDs[i], 1);
  //    }
  // };
  }
}


