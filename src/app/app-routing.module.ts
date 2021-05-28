import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AddPostComponent } from './admin/add-post/add-post.component';
import { BlogEditComponent } from './admin/blog-edit/blog-edit.component';
import { AuthGuard } from './auth/auth.guard';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'about', component: AboutComponent },
  { path: 'home/blog-view/:id', component: BlogViewComponent},
  { path: 'blog/blog-view/:id', component: BlogViewComponent},
  { path: 'admin', component: AdminHomeComponent,canActivate:[AuthGuard] },
  { path: 'addPost', component: AddPostComponent,canActivate:[AuthGuard]},
  { path: 'admin/editPost/:id', component: BlogEditComponent,canActivate:[AuthGuard]},
  { path: '', redirectTo: 'home', pathMatch: 'full' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
