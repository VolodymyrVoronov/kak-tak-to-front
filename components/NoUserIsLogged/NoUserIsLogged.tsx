import React from "react";
import Tilt from "react-parallax-tilt";

import { HiEmojiSad } from "react-icons/hi";

import { NoUserIsLoggedContainer, NoUserIsLoggedTitle, NoUserIsLoggedSmile } from "./NoUserIsLogged.styled";

const NoUserIsLogged = (): React.ReactElement => {
  return (
    <NoUserIsLoggedContainer>
      <NoUserIsLoggedTitle>
        Войдите или зарегистрируйтесь, чтобы начать писать сообщения, лайкать и комментировать посты.
      </NoUserIsLoggedTitle>
      <NoUserIsLoggedSmile>
        <Tilt tiltReverse={true}>
          <HiEmojiSad />
        </Tilt>
      </NoUserIsLoggedSmile>
    </NoUserIsLoggedContainer>
  );
};

export default NoUserIsLogged;
