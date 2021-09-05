import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Tilt from "react-parallax-tilt";

import { HiEmojiSad, HiEye } from "react-icons/hi";

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
  StartPageRightSideLinkToPosts,
} from "./StartPage.styled";

const StartPage = (): React.ReactElement => {
  const router = useRouter();

  const onRegistrationButtonClick = () => {
    router.push("/registration");
  };

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
        <StartPageRightSideJoinText>Присоединяйся сегодня</StartPageRightSideJoinText>
        <StartPageButton onClick={onRegistrationButtonClick} buttonText="Регистрация" />
        <StartPageRightSideLoginBox>
          <StartPageRightSideLoginText>Уже есть аккаунт?</StartPageRightSideLoginText>
          <StartPageRightSideLoginLink>
            <Link href="/login">
              <a>Войти</a>
            </Link>
          </StartPageRightSideLoginLink>
        </StartPageRightSideLoginBox>
        <StartPageRightSideLinkToPosts>
          <Link href="/posts">
            <a>Хочу просто почитать посты</a>
          </Link>
          <HiEye />
        </StartPageRightSideLinkToPosts>
      </StartPageRightSide>
    </StartPageContainer>
  );
};

export default StartPage;
