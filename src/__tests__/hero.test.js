import { sortHeroesByHealth } from '../hero.js';

describe('sortHeroesByHealth', () => {
  test('sort heroes by health', () => {
    const heroes = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ];

    const expected = [
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ];

    const result = sortHeroesByHealth(heroes);

    expect(result).toEqual(expected);

    expect(result).not.toBe(expected);
    expect(result[0]).not.toBe(expected[0]);
  });

  test('handle empty array', () => {
    const heroes = [];
    const result = sortHeroesByHealth(heroes);
    expect(result).toEqual([]);
  });

  test('handle single hero', () => {
    const heroes = [{ name: 'маг', health: 100 }];
    const result = sortHeroesByHealth(heroes);
    expect(result).toEqual([{ name: 'маг', health: 100 }]);
  });

  test('handle heroes with equal health', () => {
    const heroes = [
      { name: 'герой1', health: 50 },
      { name: 'герой2', health: 50 },
      { name: 'герой3', health: 50 },
    ];

    const result = sortHeroesByHealth(heroes);
    
    expect(result).toHaveLength(3);
    expect(result[0].health).toBe(50);
    expect(result[1].health).toBe(50);
    expect(result[2].health).toBe(50);
  });

  test('not mutate original array', () => {
    const originalHeroes = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
    ];

    const sortedHeroes = sortHeroesByHealth(originalHeroes);

    expect(sortedHeroes).not.toBe(originalHeroes); // Different arrays
    expect(originalHeroes).toEqual([
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
    ]);
  });

  test('error for non-array input', () => {
    expect(() => sortHeroesByHealth(null)).toThrow('Input must be an array');
    expect(() => sortHeroesByHealth('string')).toThrow('Input must be an array');
    expect(() => sortHeroesByHealth(123)).toThrow('Input must be an array');
    expect(() => sortHeroesByHealth({})).toThrow('Input must be an array');
  });

  test('error for invalid hero objects', () => {
    const invalidHeroes = [
      { name: 'valid', health: 100 },
      { name: 'invalid' },
    ];

    expect(() => sortHeroesByHealth(invalidHeroes)).toThrow('Invalid hero object at index 1');

    const invalidHeroes2 = [
      { name: 'invalid', health: 'not-a-number' },
    ];

    expect(() => sortHeroesByHealth(invalidHeroes2)).toThrow('Invalid hero object at index 0');
  });
});