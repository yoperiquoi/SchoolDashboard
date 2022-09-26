import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from 'app/app.module';
import { JokeService } from 'app/services/jokes.service';
import { JokeServiceMock } from 'app/services/jokes.service.mock';

import { JokesComponent } from './jokes.component';

describe('JokesComponent', () => {
  let component: JokesComponent;
  let fixture: ComponentFixture<JokesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JokesComponent],
      imports: [AppModule],
      providers: [{ provide: JokeService, useClasse: JokeServiceMock }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JokesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Joke view', () => {
    const jokeId = fixture.nativeElement.querySelector('#jokeId');
    expect(jokeId.innerText).toEqual('Pourquoi est ce que le lapin est bleu ?');
    const answerId = fixture.nativeElement.querySelector('#answerId');
    expect(answerId.innerText).toEqual('Parce qu on lapin');
  });
});
