import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-firstcomponent',
  templateUrl: './firstcomponent.component.html',
  styleUrls: ['./firstcomponent.component.css']
})
export class FirstcomponentComponent implements OnInit {

  joke: any[]

  constructor(private jokeService: RestService) { }

  ngOnInit(): void {
    this.loadJokeData()
  }

  loadJokeData() {
    this.jokeService.getJokeData().subscribe((data: any[]) => {
      this.joke = data;
      console.log(this.joke)
    })
  }
}
