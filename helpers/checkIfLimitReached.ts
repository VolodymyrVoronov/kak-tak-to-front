import { MAX_AMOUNT_OF_POST_LETTER } from "../consts/consts";

export const checkIfLimitReached = (text: string): boolean | undefined => {
  if (!text) return;

  if (text.length > MAX_AMOUNT_OF_POST_LETTER) return true;
};
