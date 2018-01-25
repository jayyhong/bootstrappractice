import { BootstrapPage } from './app.po';

describe('bootstrap App', () => {
  let page: BootstrapPage;

  beforeEach(() => {
    page = new BootstrapPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
