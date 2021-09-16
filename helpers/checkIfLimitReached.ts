export const checkIfLimitReached = (text: string, maxAmountOfLetters: number): boolean | undefined => {
  if (!text) return;

  if (text.length > maxAmountOfLetters) return true;
};
