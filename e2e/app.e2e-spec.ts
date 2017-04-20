import { McocTeamManagerPage } from './app.po';

describe('mcoc-team-manager App', () => {
  let page: McocTeamManagerPage;

  beforeEach(() => {
    page = new McocTeamManagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('mtm works!');
  });
});
