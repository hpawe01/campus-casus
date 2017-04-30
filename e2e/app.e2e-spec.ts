import { CampusCasusPage } from './app.po';

describe('campus-casus App', () => {
  let page: CampusCasusPage;

  beforeEach(() => {
    page = new CampusCasusPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('cc works!');
  });
});
