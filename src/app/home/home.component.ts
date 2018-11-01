import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit { 
  dataFetched : {};
  newData : any;
  id : string;
  deleteUrl : string = 'https://firestore.googleapis.com/v1beta1/';
  private headers = new HttpHeaders({'Content-Type':'application-json','Access-Control-Allow-Origin':'*'});

  constructor(private http: HttpClient) { } 

  fetchData(){
    this.http.get('https://firestore.googleapis.com/v1beta1/projects/angular-task-e7f39/databases/(default)/documents/tasks')
    .subscribe( data => {
      this.dataFetched = data;
      console.log(this.dataFetched);
    },
    err => {
      console.log("Error occurred in fetching datat" + err);
    });
  }

  deleteData(id){
    this.http.delete(`${this.deleteUrl}${id}`, {headers:this.headers})
    .subscribe( () => {
      this.fetchData();
    },
    err => {
      console.log("Error occurred in deleting data" + err);
    });
  }

  ngOnInit() { 
      this.fetchData();
    }
}

