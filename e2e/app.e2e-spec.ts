import { MyRouterPage } from './app.po';

describe('my-router App', () => {
  let page: MyRouterPage;

  beforeEach(() => {
    page = new MyRouterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
