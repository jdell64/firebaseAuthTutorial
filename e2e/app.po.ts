import { browser, element, by } from 'protractor';

export class McocTeamManagerPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('mtm-root h1')).getText();
  }
}
