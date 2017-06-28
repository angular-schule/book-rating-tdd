import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookComponent } from './book.component';
import { Book } from 'app/shared/book';
import { RouterTestingModule } from '@angular/router/testing';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookComponent ],
      imports: [
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
  });

  it('should forward calls to book.rateDown', () => {

    const book = new Book('', '', '');
    spyOn(book, 'rateDown').and.callThrough();

    component.book = book;
    component.rateDown();

    expect(book.rateDown).toHaveBeenCalled();
  });

  it('should rateUp when a button is clicked', () => {

    const book = { rateUp: () => { } } as Book;
    spyOn(book, 'rateUp');

    component.book = book;

    fixture.nativeElement.querySelector('button').click();
    fixture.detectChanges();

    expect(book.rateUp).toHaveBeenCalled();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
