import { browser, element, by } from 'protractor';

export class CampusCasusPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('cc-root h1')).getText();
  }
}
