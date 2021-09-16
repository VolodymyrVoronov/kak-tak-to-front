export const countAmountOfLetters = (text: string, maxAmountOfLetters: number): number | undefined => {
  let limit = 0;

  if (!text) return;

  limit = Math.floor((text.length * 100) / maxAmountOfLetters);

  if (text.length > maxAmountOfLetters) {
    limit = 100;
  }

  return limit;
};
