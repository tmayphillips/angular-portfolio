import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent} from './about/about.component';
import { SkillsComponent} from './skills/skills.component';
import { ContactMeComponent} from './contact-me/contact-me.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'about', component: AboutComponent},
  {path:'skills', component: SkillsComponent},
  {path:'contact', component: ContactMeComponent},
  {path:'', redirectTo:'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
