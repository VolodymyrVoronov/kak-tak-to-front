import React from "react";
import { useRouter } from "next/router";
import { HiOutlineReply } from "react-icons/hi";

import { ErrorContainer, ErrorTitle, ErrorBackButton } from "./Error.styled";

interface ErrorProps {
  path: string;
}

const Error = ({ path }: ErrorProps): React.ReactElement => {
  const router = useRouter();

  const onBackButtonClick = () => {
    router.replace(`${path}`);
  };

  return (
    <ErrorContainer>
      <ErrorTitle>Что-то пошло не так.</ErrorTitle>
      <ErrorBackButton onClick={onBackButtonClick} type="button">
        <HiOutlineReply />
      </ErrorBackButton>
    </ErrorContainer>
  );
};

export default Error;
