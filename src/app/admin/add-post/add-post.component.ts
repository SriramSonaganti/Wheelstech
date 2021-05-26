import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/_services/post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  post: Post ={
    title:'',
    subtitle:'',
    description:'',
    img:'',
  };
  posted= false;

  constructor(private postService:PostService) { }

  ngOnInit(): void {
  }


  
  savePost():void {
    this.post = {
      title:'',
      subtitle:'',
      description:'',
      img:'',
    };
  }
  
  addPost():void {

    const data =  {
        title: this.post.title,
        description:this.post.description,
        subtitle:this.post.subtitle,
        img:this.post.img,
      };

      this.postService.createPost(data).subscribe(
        response => {
          console.log(response)
          this.posted = true;
        }
      )
  }


  

}
