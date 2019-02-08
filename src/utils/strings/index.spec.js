import { capitalizeFirstLetter } from './index';

describe('Strings utils', () => {
  it('should return empty string when param is ""', () => {
    const stringMock = '';
    expect(capitalizeFirstLetter(stringMock)).toEqual('');
  });

  it('should capitalize first letter in string', () => {
    const stringMock = 'hello world!';
    expect(capitalizeFirstLetter(stringMock)).toEqual('Hello world!');
  });
});
