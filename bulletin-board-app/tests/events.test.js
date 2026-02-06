const events = require('../backend/events');

describe('Backend events data', () => {
  test('events is an array with at least one item', () => {
    expect(Array.isArray(events)).toBe(true);
    expect(events.length).toBeGreaterThan(0);
  });

  test('each event has an id, title, and date', () => {
    events.forEach(ev => {
      expect(ev).toHaveProperty('id');
      expect(ev).toHaveProperty('title');
      expect(ev).toHaveProperty('date');
    });
  });
});
