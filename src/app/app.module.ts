import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AddPostComponent } from './admin/add-post/add-post.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { BlogEditComponent } from './admin/blog-edit/blog-edit.component';
import { SomecomComponent } from './somecom/somecom.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    BlogComponent,
    AboutComponent,
    BlogViewComponent,
    AdminHomeComponent,
    AddPostComponent,
    BlogEditComponent,
    SomecomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    EditorModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
