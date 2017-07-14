import { ExoClickPage } from './app.po';

describe('exo-click App', () => {
  let page: ExoClickPage;

  beforeEach(() => {
    page = new ExoClickPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
