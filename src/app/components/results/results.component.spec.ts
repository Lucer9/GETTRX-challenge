import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';

import { ResultsComponent } from './results.component';

describe('ResultsComponent', () => {
  let component: ResultsComponent;
  let fixture: ComponentFixture<ResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResultsComponent],
      imports: [HttpClientModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should render a 'There are not People' when results are empty", (done: DoneFn) => {
    const resultsComponent = fixture.componentInstance;
    resultsComponent.results = [];
    fixture.detectChanges();
    const compiled = fixture.debugElement;
    
    const element = compiled.queryAll(By.css('.bold'))
    console.log(element);
    
    expect(element).toBeTruthy('There are not People')
    done();
  });
});
