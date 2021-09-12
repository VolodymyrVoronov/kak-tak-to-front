import type { NextPage } from "next";
import { useRouter } from "next/router";

const Post: NextPage = () => {
  const router = useRouter();

  console.log(router.query.id);

  return <div>post</div>;
};

export default Post;
