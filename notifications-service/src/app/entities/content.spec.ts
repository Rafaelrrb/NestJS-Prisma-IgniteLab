import { Content } from './content';

describe('Notification Content', () => {
  it('should be able to create a notifivation content', () => {
    const content = new Content('Você tem uma notificação');

    expect(content).toBeTruthy();
  });

  it('should not be able to create a notifivation content with less than 5 characters', () => {
    expect(() => new Content('123')).toThrow();
  });

  it('should not be able to create a notifivation content with more than 240 characters', () => {
    expect(() => new Content('1'.repeat(241))).toThrow();
  });
});
