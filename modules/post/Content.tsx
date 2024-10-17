'use client';
import { category } from '@/recoil/atoms/post';
import { post } from '@/recoil/selectors/post';
import React, { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

type ContentProps = {
  data: Record<string, any>;
};
const Content: React.FC<ContentProps> = ({ data }) => {
  const [isEmpty, setIsEmpty] = useState(true);
  const [categoryState, setCategory] = useRecoilState(category);
  const [postState, setPost] = useRecoilState(post)

  useEffect(() => {
    if (data) setIsEmpty(false);
  }, [data]);
  return (
    <>
      {isEmpty ? (
        <p>Empty</p>
      ) : (
        <ul>
          <li>{data.id}</li>
          <li>{data.title}</li>
        </ul>
      )}
      <button onClick={() => setCategory("tech")}>Technology</button>
      <ul>
          <li>{postState.id}</li>
          <li>{postState.title}</li>
          <li>{postState.content}</li>
        </ul>
    </>
  );
};

export default Content;
