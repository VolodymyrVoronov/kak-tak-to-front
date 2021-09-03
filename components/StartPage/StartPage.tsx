import React from "react";
import Link from "next/link";
import Tilt from "react-parallax-tilt";

import { HiEmojiSad } from "react-icons/hi";

import StartPageButton from "./StartPageButton/StartPageButton";

import {
  StartPageContainer,
  StartPageLeftSide,
  StartPageLeftSideSmile,
  StartPageRightSide,
  StartPageRightSideSmallSmile,
  StartPageRightSideTitle,
  StartPageRightSideJoinText,
  StartPageRightSideLoginBox,
  StartPageRightSideLoginText,
  StartPageRightSideLoginLink,
} from "./StartPage.styled";

const StartPage = (): React.ReactElement => {
  return (
    <StartPageContainer>
      <StartPageLeftSide>
        <StartPageLeftSideSmile>
          <Tilt scale={1.2} tiltReverse={true}>
            <HiEmojiSad />
          </Tilt>
        </StartPageLeftSideSmile>
      </StartPageLeftSide>
      <StartPageRightSide>
        <StartPageRightSideSmallSmile>
          <HiEmojiSad />
        </StartPageRightSideSmallSmile>
        <StartPageRightSideTitle>“Как так-то...!?”</StartPageRightSideTitle>
        <StartPageRightSideJoinText>Присоединяйся сегодня.</StartPageRightSideJoinText>
        <StartPageButton buttonText="Регистрация" />
        <StartPageRightSideLoginBox>
          <StartPageRightSideLoginText>Уже есть аккаунт?</StartPageRightSideLoginText>
          <StartPageRightSideLoginLink>
            <Link href="/login">
              <a>Войти</a>
            </Link>
          </StartPageRightSideLoginLink>
        </StartPageRightSideLoginBox>
      </StartPageRightSide>
    </StartPageContainer>
  );
};

export default StartPage;
