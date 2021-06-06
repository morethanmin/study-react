import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostLIst from "../components/PostLIst";
import { getPosts } from "../modules/posts";

export default function PostListContainer() {
  const { data, loading, error } = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
    return () => {};
  }, [dispatch]);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러 발생!</div>;
  if (!data) return null;
  return <PostLIst posts={data} />;
}
