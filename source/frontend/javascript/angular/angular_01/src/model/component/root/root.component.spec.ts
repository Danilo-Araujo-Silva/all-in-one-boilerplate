import {TestBed, async} from '@angular/core/testing';

import {RootComponent} from './root.component';

describe('RootComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RootComponent
      ],
    }).compileComponents();
  }));

  it('should create the root', async(() => {
    const fixture = TestBed.createComponent(RootComponent);
    const root = fixture.debugElement.componentInstance;
    expect(root).toBeTruthy();
  }));
});
