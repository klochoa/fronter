import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuestrasPlantasComponent } from './nuestras-plantas.component';

describe('NuestrasPlantasComponent', () => {
  let component: NuestrasPlantasComponent;
  let fixture: ComponentFixture<NuestrasPlantasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuestrasPlantasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuestrasPlantasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
