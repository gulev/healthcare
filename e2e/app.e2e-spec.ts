import { HealthcarePage } from './app.po';

describe('healthcare App', () => {
  let page: HealthcarePage;

  beforeEach(() => {
    page = new HealthcarePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
