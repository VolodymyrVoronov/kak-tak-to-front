import { MAX_AMOUNT_OF_POST_LETTER } from "../consts/consts";

export const countAmountOfLetters = (text: string): number | undefined => {
  let limit = 0;

  if (!text) return;

  limit = Math.floor((text.length * 100) / MAX_AMOUNT_OF_POST_LETTER);

  if (text.length > MAX_AMOUNT_OF_POST_LETTER) {
    limit = 100;
  }

  return limit;
};
