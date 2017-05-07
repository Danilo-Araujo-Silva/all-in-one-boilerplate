import { angular_01Page } from './app.po';

describe('angular_01 App', () => {
  let page: angular_01Page;

  beforeEach(() => {
    page = new angular_01Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
