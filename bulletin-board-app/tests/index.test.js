const index = require('../backend/index');

describe('index controller', () => {
  test('index function is defined', () => {
    const indexController = require('../backend/index');
    expect(indexController.index).toBeDefined();
  });

  test('index function renders index view', () => {
    const indexController = require('../backend/index');
    const req = {};
    const res = {
      render: jest.fn()
    };
    indexController.index(req, res);
    expect(res.render).toHaveBeenCalledWith('index');
  });
});