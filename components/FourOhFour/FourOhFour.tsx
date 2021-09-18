import React from "react";
import { useRouter } from "next/router";
import { HiOutlineReply } from "react-icons/hi";

import { FourOhFourContainer, FourOhFourTitle, FourOhFourBackButton } from "./FourOhFour.styled";

const FourOhFour = (): React.ReactElement => {
  const router = useRouter();

  const onBackButtonClick = () => {
    router.replace("/");
  };

  return (
    <FourOhFourContainer>
      <FourOhFourTitle>Такой страницы не существует.</FourOhFourTitle>
      <FourOhFourBackButton onClick={onBackButtonClick} type="button">
        <HiOutlineReply />
      </FourOhFourBackButton>
    </FourOhFourContainer>
  );
};

export { FourOhFour };
