"use client";
import React, { useEffect, useState } from "react";

type ContentProps = {
  data: Record<string, any>
}
const Content: React.FC<ContentProps> = ({ data }) => {
  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    if (data) setIsEmpty(false)
  }, [data]);
  return <>
    {isEmpty ? <p>Empty</p> : <ul>
      <li>{data.id}</li>
      <li>{data.title}</li>
    </ul>}
  </>
}

export default Content;