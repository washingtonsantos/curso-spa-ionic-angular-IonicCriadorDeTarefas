import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PoliticaDePrivacidadeComponent } from './politica-de-privacidade.component';

describe('PoliticaDePrivacidadeComponent', () => {
  let component: PoliticaDePrivacidadeComponent;
  let fixture: ComponentFixture<PoliticaDePrivacidadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliticaDePrivacidadeComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PoliticaDePrivacidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
