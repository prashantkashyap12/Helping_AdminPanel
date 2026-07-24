import { HttpClientModule } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import moment from 'moment';
import { AuthserviceService } from '../authservice.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { UserListService } from '../../adminPanel/service/user-list.service';


declare var $: any;

@Component({
  selector: 'app-signup',
  standalone: true,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule, FormsModule],
  providers: [AuthserviceService, UserListService],
  encapsulation:ViewEncapsulation.None
})
export class SignupComponent implements OnInit{
  loader:boolean =false;
  pageswap:boolean =false;

  isAdmin:boolean =true;
  userSignup!: FormGroup;
  constructor(private _fb:FormBuilder, 
    private _router:Router, 
    private _auth:AuthserviceService,
    private _userLs:UserListService
   ){}
  ngOnInit() {
    this.initForm();
    this.displaySize();
    this.fatchAdmin();
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
      contact: (this.userSignup.value.contact ?? '').toString(),
      reffrence: this.userSignup.value.reffrence ?? '654',
      role: this.isAdmin ? 'user' : 'admin'
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
        sessionStorage.setItem('role', this.userSignup.value.role);
        sessionStorage.setItem('userId', this.userSignup.value.userId);

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

  addAdmin:any;
  fatchAdmin(){
    this._userLs.userGetLs('admin').subscribe(res=>{
      this.addAdmin = res
    })
  }

  reffrenceId: any;
  data(event: any) {
    const id = event.target.value;
    console.log(id);
    const admin = this.addAdmin.find((x: any) => x.userId = id);
    console.log(admin.Password);
    this.reffrenceId = admin.password;
  }
}
