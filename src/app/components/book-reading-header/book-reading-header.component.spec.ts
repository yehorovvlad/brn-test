import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookReadingHeaderComponent } from './book-reading-header.component';

describe('BookReadingHeaderComponent', () => {
  let component: BookReadingHeaderComponent;
  let fixture: ComponentFixture<BookReadingHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookReadingHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookReadingHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
