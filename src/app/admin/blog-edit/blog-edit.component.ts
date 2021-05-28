import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/_services/post.service';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {

  currentPost: Post = {
    title: '',
    subtitle: '',
    description:'',
    img:'',
  }
  edited = false;

  constructor(private postService :PostService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.getPost(this.route.snapshot.params.id);
  }

  getPost(id : string):void {
    this.postService.get(id).subscribe(
      data => {
        console.log(data);
        this.currentPost = data;
      });
  }

  Update():void {
    const data = {
      title: this.currentPost.title,
      subtitle: this.currentPost.subtitle,
      img:this.currentPost.img,
      description: this.currentPost.description,
    }
    this.postService.updatePost(this.route.snapshot.params.id,data).subscribe(
      data =>{
        console.log(data);
        this.edited = true;
      })
  }

  

}
