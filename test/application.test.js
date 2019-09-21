const expect = require('chai').expect;
const application = require('../app/application');

describe('Application', () => {
  describe('#sayHello', () => {
    it('should return Hello', () => {
      // Given
      let expected = "Hello";

      // When
      let result = application.sayHello();

      // Then
      expect(result).equal(expected);
    })
  });
});
