import { Component } from '@angular/core';
import { UsePanelService } from '../service/user-panel.service';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserListService } from '../../adminPanel/service/user-list.service';
import { DocBuilderService } from '../../adminPanel/service/doc-builder.service';
import { UserRecPipe } from '../../interface/user-rec.pipe';

@Component({
  selector: 'app-our-members',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, HttpClientModule, UserRecPipe],
  providers:[UserListService, DocBuilderService],
  templateUrl: './our-members.component.html',
  styleUrl: './our-members.component.css'
})
export class OurMembersComponent {
loader:boolean = false;
  updateEvent!:FormGroup
  keyword="";
  data:any = [];
  eventRec:any=[]
  constructor(private _usrcommon:DocBuilderService, private _user:UserListService){}
  ngOnInit(){
    this.record();
  }
  record(){
    this._usrcommon.getRecord().subscribe(res=>{
      let data = res.results;
      this.data = data.filter((a:any)=>a.password == sessionStorage.getItem('password'));
      console.log(this.data);
    })
  }
  selectEvent(data:any){}
  del(a:any){}

  
}
