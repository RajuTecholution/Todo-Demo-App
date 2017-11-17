import { Injectable , OnInit} from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class FetchListService implements OnInit{

  constructor(private http: Http) { }

  ngOnInit(){
  }

  fetchDataFromJson() {
    return  this.http.get('assets/listOfData.json')
    .map((res)=> res.json());
  }

}
