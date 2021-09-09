import { compose } from "./compose";

const cutFirstLetter = (str: string = "u") => str.slice(0, 1);
const makeLetterInUpperCase = (letter: string) => letter.toUpperCase();

export const getLetterForAvatar = compose(makeLetterInUpperCase, cutFirstLetter);
