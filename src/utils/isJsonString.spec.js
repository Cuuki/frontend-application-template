import {isJsonString} from './isJsonString';

describe('isJsonString', () => {
  it('returns true for valid json string', () => {
    expect(isJsonString('{}')).toBe(true);
  });

  it('returns false for invalid json string', () => {
    expect(isJsonString('')).toBe(false);
  });
});
