export function sortHeroesByHealth(heroes) {
  if (!Array.isArray(heroes)) {
    throw new Error('Input must be an array');
  }

  heroes.forEach((hero, index) => {
    if (!hero || typeof hero.health !== 'number') {
      throw new Error(`Invalid hero object at index ${index}`);
    }
  });

  return [...heroes].sort((a, b) => b.health - a.health);
}