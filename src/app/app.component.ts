import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { MyService } from './my.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tasknew';
  envTitle = environment.title;
  date = new Date();
  name = {
    first: "Syed",
    last: "Ahmed"
  }

  constructor(private service:MyService){

  }

  hitApi(){
    this.service.get_posts("https://jsonplaceholder.typicode.com/todos/1o").subscribe((res:any)=> {
      console.log(res)
    });
  }
}
