import { Component, OnInit } from '@angular/core';
import { FeaturesService } from '../services/features.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {
  public features;

  //constructor(private featuresService: FeaturesService) { }

  constructor(private featuresService: FeaturesService){
  }
  ngOnInit() {
    // let headers = new HttpHeaders();
    // headers.set('Access-Control-Allow-Origin', '*');
    // this.http.get('http://localhost:8088/features',{
    //   headers: headers
    // }).subscribe(data => {
    //   console.log(data);
    // });
    this.getFeatures();
  }

  getFeatures(){
    this.featuresService.getFeatures().subscribe(
      data => { this.features = data },
      err => console.error(err),
      () => console.log(this.features)
    )
  }

}
