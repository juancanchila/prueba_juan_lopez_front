import { Component, OnInit } from '@angular/core';
import { ExampledataService } from '../../../core/services/exampledata.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {



  constructor(private exampleDataService: ExampledataService) { }

  ngOnInit(): void {

    console.log("Books");

  }
}
