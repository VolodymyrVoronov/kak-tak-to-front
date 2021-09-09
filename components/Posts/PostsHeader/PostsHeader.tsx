import React from "react";
import { useRouter } from "next/router";

import { getLetterForAvatar } from "../../../helpers/getLetterForAvatar";

import { HiEmojiSad, HiOutlineLogout, HiOutlineHome } from "react-icons/hi";

import {
  PostsHeaderContainer,
  PostsHeaderUser,
  PostsHeaderUserAvatar,
  PostsHeaderUserName,
  PostsHeaderAvatar,
  PostsHeaderButtonBox,
  PostsHeaderButton,
} from "./PostsHeader.styled";

const PostsHeader = (): React.ReactElement => {
  const router = useRouter();

  const [userName, setUserName] = React.useState<string>("");

  React.useEffect(() => {
    if (localStorage.getItem("userInfo")) {
      const userLogin = JSON.parse(localStorage.getItem("userInfo") || "{}").userLogin as string;

      setUserName(userLogin);
    }
  }, []);

  const onLogoutButtonClick = () => {
    if (localStorage.getItem("userInfo")) {
      localStorage.removeItem("userInfo");
    }
    router.replace("/");
  };

  return (
    <PostsHeaderContainer>
      {userName && (
        <PostsHeaderUser>
          <PostsHeaderUserAvatar>{getLetterForAvatar(userName)}</PostsHeaderUserAvatar>
          <PostsHeaderUserName>{userName}</PostsHeaderUserName>
        </PostsHeaderUser>
      )}

      <PostsHeaderAvatar>
        <HiEmojiSad />
      </PostsHeaderAvatar>
      <PostsHeaderButtonBox>
        <PostsHeaderButton
          isUser={userName ? true : false}
          onClick={onLogoutButtonClick}
          type="button"
          aria-label={userName ? "Выход" : "На главную"}
        >
          {userName ? <HiOutlineLogout /> : <HiOutlineHome />}
        </PostsHeaderButton>
      </PostsHeaderButtonBox>
    </PostsHeaderContainer>
  );
};

export default PostsHeader;
