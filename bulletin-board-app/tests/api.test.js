const api = require('../backend/api');

jest.mock('../backend/events.js', () => ({
  '0': { id: '0', title: 'Event Zero' },
  '1': { id: '1', title: 'Event One' },
}));


describe('api', () => {
  test('events returns all events', () => {
    const req = {};
    const res = { json: jest.fn() };

    api.events(req, res);

    expect(res.json).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledWith({
      '0': { id: '0', title: 'Event Zero' },
      '1': { id: '1', title: 'Event One' },
    });
  });

  test('event returns a single event', () => {
    const req = { param: { eventId: '1' } };
    const res = { json: jest.fn() };

    api.event(req, res);

    expect(res.json).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledWith({ id: '1', title: 'Event One' });
  });
});