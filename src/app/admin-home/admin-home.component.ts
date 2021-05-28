import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/_services/post.service';


@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  post?: Post[] = [];
  currentPost? : Post;
  currentIndex = -1;
  title = '';


  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.retrievePosts();
  }
  // getPosts(id:string):void {
  //   this.postService.get(id)
  //   .subscribe(
  //     data => {
  //       this.currentPost = data;
  //       console.log(data)
  //     }
      
  //   )
  // }

  refreshList(): void {
    this.retrievePosts();
    this.currentPost = undefined;
    this.currentIndex = -1;
  }

  

  retrievePosts(): void {
    this.postService.getAll().subscribe(
      data => {
        this.post = data;
        console.log(data)
    });
    
  }

  onSubmit(id:any):void{
    this.postService.deletePost(id).subscribe(
      data => {
        this.post = data;
      }
    );
    window.location.reload();
    console.log(id)
  }
}
