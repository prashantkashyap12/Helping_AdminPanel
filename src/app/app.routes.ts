import { Routes } from '@angular/router';
import { LoginComponent } from './userAuth/login/login.component';
import { SignupComponent } from './userAuth/signup/signup.component';
import { VarifyComponent } from './userAuth/varify/varify.component';
import { ForgetComponent } from './userAuth/forget/forget.component';
import { DashboardComponent } from './web/dashboard/dashboard.component';
import { BlogComponent } from './web/blog/blog.component';
import { ProjectComponent } from './web/project/project.component';
import { BlogDetailsComponent } from './web/blog-details/blog-details.component';
import { UserListComponent } from './adminPanel/user-list/user-list.component';
import { ProjectDetailsComponent } from './web/project-details/project-details.component';
import { EventsComponent } from './web/events/events.component';
import { EventDetailsComponent } from './web/event-details/event-details.component';
import { DonateComponent } from './web/donate/donate.component';
import { DonateDetailsComponent } from './web/donate-details/donate-details.component';
import { TeamComponent } from './web/team/team.component';
import { CommingEventComponent } from './UserPanel/comming-event/comming-event.component';
import { DocBuilderComponent } from './adminPanel/doc-builder/doc-builder.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfileCompleteComponent } from './UserPanel/profile-complete/profile-complete.component';
import { DocumentsComponent } from './web/documents/documents.component';
import { HelpNSuppComponent } from './web/help-nsupp/help-nsupp.component';
import { UserPermissionsComponent } from './adminPanel/user-permissions/user-permissions.component';
import { EventManagerComponent } from './adminPanel/event-manager/event-manager.component';
import { PaymentAckListComponent } from './adminPanel/payment-ack-list/payment-ack-list.component';
import { OurMembersComponent } from './UserPanel/our-members/our-members.component';

export const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  
  {path:'dashboard', component:DashboardComponent},

    // Done
    {path:'login', component:LoginComponent},
    {path:'signup', component:SignupComponent},
    {path:'verify', component:VarifyComponent},
    {path:'forget', component:ForgetComponent},
    
    // Admin Web - Done
    {path:'blog', component:BlogComponent},                      
    {path:'BlogDetails', component:BlogDetailsComponent},      
    {path:'project', component:ProjectComponent},              
    {path:'projectDetails', component:ProjectDetailsComponent},
    {path:'event', component:EventsComponent},                  
    {path:'eventDetails', component:EventDetailsComponent},    
    {path:'donate', component:DonateComponent},               
    {path:'donateDetails',component:DonateDetailsComponent}, 
    {path:'team_manager', component:TeamComponent},          
    {path:'document', component:DocumentsComponent},          
    {path:'support', component:HelpNSuppComponent},

    // Admin Panel- working
    {path:'docBuilder',component:DocBuilderComponent},
    {path:'UserList', component:UserListComponent},
    {path:'userPermission', component:UserPermissionsComponent},
    {path:'AddEventManager', component:EventManagerComponent},
    
    // User - working
    {path:'ProfileUpdate',component:ProfileCompleteComponent},
    {path:'UpcommingEvent', component:CommingEventComponent},
    {path:'OurTeam', component:OurMembersComponent},
    {path:'PaymentList', component:PaymentAckListComponent},
    { path: '**', component: NotFoundComponent }

];
