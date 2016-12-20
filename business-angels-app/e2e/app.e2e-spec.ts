import { BusinessAngelsAppPage } from './app.po';

describe('business-angels-app App', function() {
  let page: BusinessAngelsAppPage;

  beforeEach(() => {
    page = new BusinessAngelsAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
