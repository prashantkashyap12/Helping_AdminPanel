import { HttpClientModule } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import moment from 'moment';
import { AuthserviceService } from '../authservice.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


declare var $: any;

@Component({
  selector: 'app-signup',
  standalone: true,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule, FormsModule],
  providers: [AuthserviceService],
  encapsulation:ViewEncapsulation.None
})
export class SignupComponent implements OnInit{
  loader:boolean =false;
<<<<<<< HEAD
  pageswap:boolean =true;

=======
  isAdmin:boolean =false;
>>>>>>> d4e88d9 (login by otp)
  userSignup!: FormGroup;
  constructor(private _fb:FormBuilder, 
    private _router:Router, 
    private _auth:AuthserviceService 
   ){}
  ngOnInit() {
    this.initForm();
    this.displaySize();
  }

  select1:any = "selected";
  
  // Define Form Controller
  initForm(){
    this.userSignup = this._fb.group({
      date: [moment(new Date()).format("DD-MM-YYYY")],
      name:['', [Validators.required]],
      email:['', [Validators.required, Validators.email]],
      contact: ['', [Validators.required, Validators.maxLength(10)]],
      reffrence: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  // Data before save validation Model 
  datamodel(){
    return {
      tdate: new Date(),
      name: this.userSignup.value.name ?? '',
      email: this.userSignup.value.email ?? '',
      contact: this.userSignup.value.contact ?? '',
      reffrence: this.userSignup.value.reffrence ?? '',
    };
  }

  onSubmit(){
    this.loader = true;
    const model= this.datamodel();  // validation
    console.log(this.datamodel());
    this._auth.signup(model).subscribe(
      res=>{ 
       if(res.state == true){
        this.loader = false;
        sessionStorage.setItem('email', this.userSignup.value.email);
        sessionStorage.setItem('user', this.userSignup.value.name);
        sessionStorage.setItem('reffrence', this.userSignup.value.reffrence);
        this._router.navigate(['/verify']);
       }else{
        this.loader = false;
        alert(res.message)
       }
      });
  }

  
  // signIn Btn
  signin(){
    this._router.navigate(['/login']);
  }
  isAdminBtn(){
    this.isAdmin = !this.isAdmin
  }

    isMobile=true;
    displaySize(){
    let displaySize =  screen.availWidth;
      if(displaySize<547){
        this.isMobile=true;
      }else{
        this.isMobile=false;
      }
    }
}
