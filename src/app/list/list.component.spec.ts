import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent, JiraList } from './list.component';
import { FetchListService } from '../fetch-list.service';
import { Observable } from 'rxjs/Observable';

const mockData = {
  "list": [
      {
          "name": "Raju",
          "office": "Techolution",
          "description": "Jira ticket number 1",
          "status": 0
      },
      {
          "name": "Shravan",
          "office": "Techolution",
          "description": "Jira ticket number 2",
          "status": 1
      },
      {
          "name": "Kumar",
          "office": "Techolution",
          "description": "Jira ticket number 3",
          "status": 2
      }
  ]
};

class mockFetchListService {
  
 public fetchDataFromJson(): Observable<any> {
   return Observable.of(mockData);
 }
}

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListComponent ],
      providers: [ {provide: FetchListService, useClass: mockFetchListService}],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check weather the function is created or not', ()=> {
    expect(component.getData).toBeDefined();
  });

  it('check weather the Variable is created or not', ()=> {
    expect(component.listOfJiraTickets).toBeDefined();
  });

  it('check weather the function is returinig the array with data', ()=> {
    expect(component.listOfJiraTickets).toBe(mockData.list);
  });

  it('check weather the function is returinig the array with data', ()=> {
    expect(component.listOfJiraTickets).toBe(mockData.list);
  });

});
