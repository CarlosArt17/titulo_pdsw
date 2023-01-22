import { async,ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { UiComponent } from './ui.component';

describe('Area UiComponent', () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiComponent ],
      imports: [FormsModule]
    })
    .compileComponents();

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should call area method', () => {
    
    let result = 0;
    component.r = 0.5;
  
    
    component.area();
    result = component.result;
  
    expect(result).toBe(0.7853981633974483);
  
    });
  
    it('Should set radio model through ngModel', async() => {
      
      await fixture.whenStable();
      fixture.detectChanges();
      const inputElement = fixture.debugElement.query(By.css('input[name="r"]')).nativeElement;
  
      inputElement.value = '12.566370614359172';
      inputElement.dispatchEvent(new Event('input'));
      fixture.detectChanges();
  
      expect(component.r).toEqual(12.566370614359172);
    });
    it('should add radio when i click the area button ', () => {

      component.r = 2;
      let areaButton = fixture.debugElement.query(By.css('.btn'));
  
      areaButton.triggerEventHandler('click', null);
  
      expect(component.result).toBe(12.566370614359172);
  
    });
  
    it('Should render area in result div', () => {
      
      component.r = 1;
  
      component.area();
      fixture.detectChanges();
      
      let de = fixture.debugElement.query(By.css('.result'));
      let el : HTMLElement = de.nativeElement;
  
      expect(el.innerText).toContain('3.141592653589793');
    });
  
  });  