import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-secondcomponent',
  templateUrl: './secondcomponent.component.html',
  styleUrls: ['./secondcomponent.component.css']
})
export class SecondcomponentComponent implements OnInit {



  @Input() joke: any


  ngOnInit(): void {

  }

}
