import React from "react";

import { StartPageButtonŠ”ontainer, StartPageButtonBox } from "./StartPageButton.styled";

interface StartPageButtonProps {
  buttonText: string;
  onClick: () => void;
}

const StartPageButton = ({ buttonText, onClick }: StartPageButtonProps): React.ReactElement => {
  return (
    <StartPageButtonŠ”ontainer>
      <StartPageButtonBox onClick={onClick} type="button">
        {buttonText}
      </StartPageButtonBox>
    </StartPageButtonŠ”ontainer>
  );
};

export default StartPageButton;
