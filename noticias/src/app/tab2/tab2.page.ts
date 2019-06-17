import { Component } from '@angular/core';
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  obj: any;
  articles:any[] = [];

  categories:string[] = ['General', 'Health', 'Science', 'Sports', 'Technology', 'Business', 'Entertainment'];

  constructor(private noticiasService: NoticiasService) { }

  ngOnInit() {
    this.getNews('general');
  }

  getNews(category) {
    this.noticiasService.getNews(category).subscribe(
      data => {
        this.obj = data;
        console.log(this.obj.articles[0].author);
        this.articles = this.obj.articles;
    } 
    );
  }
}
