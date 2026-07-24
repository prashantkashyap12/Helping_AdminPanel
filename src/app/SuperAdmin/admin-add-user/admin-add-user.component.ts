import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthserviceService } from '../../userAuth/authservice.service';

@Component({
  selector: 'app-admin-add-user',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  providers: [AuthserviceService],
  templateUrl: './admin-add-user.component.html',
  styleUrl: './admin-add-user.component.css'
})
export class AdminAddUserComponent {
  userSignup!:FormGroup;
  reffrenceId:any;
  constructor(private _fb:FormBuilder, private _auth:AuthserviceService) { }
  ngOnInit(): void {
    this.Onit()
  }
  
  Onit(){
    this.userSignup = this._fb.group({
      name:['', [Validators.required]],
      email:['', [Validators.required, Validators.email]],
      contact: ['', [Validators.required, Validators.maxLength(13)]],
    });
  }


  model(){
    if(!this.userSignup.valid){
      return "Complete all required fields";
    }
    let data = {
      tdate: new Date(),
      name: this.userSignup.value.name,
      email: this.userSignup.value.email,
      contact: this.userSignup.value.contact,
    }
    return data;
  }
  onSubmit(){
    let dataResponce = this.model();
    console.log(dataResponce);
    this._auth.signup(dataResponce).subscribe((res:any)=>{
      if(res.state == true){
        alert(res.message)
      }else{
        alert(res.message)
      }
    });
  }
}
