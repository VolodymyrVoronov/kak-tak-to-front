import React from "react";

import { StartPageButtonСontainer, StartPageButtonBox } from "./StartPageButton.styled";

interface StartPageButtonProps {
  buttonText: string;
}

const StartPageButton = ({ buttonText }: StartPageButtonProps): React.ReactElement => {
  return (
    <StartPageButtonСontainer>
      <StartPageButtonBox type="button">{buttonText}</StartPageButtonBox>
    </StartPageButtonСontainer>
  );
};

export default StartPageButton;
