import React from "react";

import { StartPageButtonСontainer, StartPageButtonBox } from "./StartPageButton.styled";

interface StartPageButtonProps {
  buttonText: string;
  onClick: () => void;
}

const StartPageButton = ({ buttonText, onClick }: StartPageButtonProps): React.ReactElement => {
  return (
    <StartPageButtonСontainer>
      <StartPageButtonBox onClick={onClick} type="button">
        {buttonText}
      </StartPageButtonBox>
    </StartPageButtonСontainer>
  );
};

export default StartPageButton;
