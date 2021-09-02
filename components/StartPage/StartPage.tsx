import React from "react";

import { HiOutlineEmojiSad } from "react-icons/hi";

import { StartPageContainer } from "./StartPage.styled";

const StartPage = (): React.ReactElement => {
  return (
    <StartPageContainer>
      StartPage
      <div>
        <HiOutlineEmojiSad />
      </div>
    </StartPageContainer>
  );
};

export default StartPage;
