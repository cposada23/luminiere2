import { LuminierePage } from './app.po';

describe('luminiere App', function() {
  let page: LuminierePage;

  beforeEach(() => {
    page = new LuminierePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
