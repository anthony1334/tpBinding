import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-searchform',
  templateUrl: './searchform.component.html',
  styleUrls: ['./searchform.component.css']
})
export class SearchformComponent implements OnInit {
  searchForm ! : FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.searchForm = this.fb.group({
      title:'',
      year:2018
    });
  }
  startSearch(){
    console.log("recherche lancée");

  }

}
