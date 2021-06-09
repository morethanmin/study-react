import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostLIst from "../components/PostLIst";
import { getPosts } from "../modules/posts-saga";

export default function PostListContainer() {
  const { data, loading, error } = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
    return () => {};
  }, [dispatch]);

  if (loading && !data) return <div>로딩중...</div>; // 로딩중이면서, 데이터가 없을 때에만 로딩중... 표시
  if (error) return <div>에러 발생!</div>;
  if (!data) return null;
  return <PostLIst posts={data} />;
}
