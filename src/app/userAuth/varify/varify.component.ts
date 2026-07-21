import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthserviceService } from '../authservice.service';
import { isPlatformBrowser } from '@angular/common';
import { Component, OnInit, Inject, PLATFORM_ID, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-varify',
  standalone: true,
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule, FormsModule],
  providers: [AuthserviceService],
  templateUrl: './varify.component.html',
  styleUrl: './varify.component.css',
  encapsulation:ViewEncapsulation.None
})
export class VarifyComponent implements OnInit {

  loader:boolean = false;
  userVerify!: FormGroup;
  @ViewChild('isHidden') HidePwd!:ElementRef;
  constructor(private _fb:FormBuilder, 
    @Inject(PLATFORM_ID) private platformId: Object, 
    private _auth:AuthserviceService,
    private _router:Router
  ){}

  email:any;

  tempPwd:any;
  ngOnInit(){
    this.TimeCoutner();
    if (isPlatformBrowser(this.platformId)) {
      this.email = sessionStorage.getItem('email');
    }
    this.initForm();  
  }

  initForm(){
    this.userVerify = this._fb.group({
      email: [this.email, Validators.required,],
      otp: ['', Validators.required]
    })

  }

  // Timer 10 Min
  minStr:any;
  secStr:any;
  TimeCoutner(){
    let minutes = 10;
    let seconds = 0;
    const interval = setInterval(() => {
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          minutes--;
          seconds = 59;
        }
      } else {
        seconds--;
      }
      this.minStr = minutes.toString().padStart(2, '0');
      this.secStr = seconds.toString().padStart(2, '0');
    }, 1000);
  }
  
  datamodel(){
    return {
      email :this.userVerify.value.email ?? '',
      otp:this.userVerify.value.otp ?? ''
    };
  }

  onSubmit(){
    this.loader = true;
    if(this.userVerify.invalid){
      alert("form Invalid");
      this.loader = false;
      return;
    }
    const model = this.datamodel();
    this._auth.varify(model).subscribe(res=>{
      if(res.state==true){
        this.loader = false;
        this._router.navigate(['/dashboard']);
      }else{
        this.loader = false;
        alert(res.message)
      }
    })


  }
  signin(){
    this._router.navigate(['/login']);
  }

}
