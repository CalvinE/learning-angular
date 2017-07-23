import { LearningAngularPage } from './app.po';

describe('learning-angular App', () => {
  let page: LearningAngularPage;

  beforeEach(() => {
    page = new LearningAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Tour of Heroes');
  });
});
