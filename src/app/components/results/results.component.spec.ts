import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

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

  it("should render a 'There are not People' when results are empty", () => {
    const resultsComponent = fixture.componentInstance
    const compiled = fixture.nativeElement
    expect(resultsComponent.results).toBeTruthy()
    expect(resultsComponent.results).toEqual([])
    expect(compiled.querySelector(".bold.center").textContent).toContain("There are not People")
  });
});
