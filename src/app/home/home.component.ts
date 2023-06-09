import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentfulService } from '../services/contentful.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private contentfulService:ContentfulService){}

  blogPosts$: Observable<any> | undefined;

  ngOnInit():void {
    this.blogPosts$ = this.contentfulService.getAllEntries();
  }
}
