import { Component } from '@angular/core';
import { NoticiasService } from 'src/app/services/noticias.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  obj: any;
  articles:any[] = [];

  constructor(private noticiasService: NoticiasService) { }

  ngOnInit() {
    this.getAllNews();
  }

  getAllNews() {
    this.noticiasService.getNews('').subscribe(
      data => {
        this.obj = data;
        console.log(this.obj.articles[0].author);
        this.articles = this.obj.articles;
    } 
    );
  }
}
