import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {
  titleInput : string;
  descInput : string;
  message : string;    

  constructor(private location : Location, private http: HttpClient) { }

  ngOnInit() {
  }

  goBack(){
    this.location.back();
  }

  addData(){
    const data = {
      "fields":{
          "title":{
            "stringValue":this.titleInput
          },
          "description":{
            "stringValue": this.descInput
          }
        }
      };
      this.http.post('https://firestore.googleapis.com/v1beta1/projects/angular-task-e7f39/databases/(default)/documents/tasks', data)
      .subscribe( data => {
        this.message = "Data Added!"
      },
      err => {
        console.log("Error occurred in adding data" + err);
      });
  }

}
