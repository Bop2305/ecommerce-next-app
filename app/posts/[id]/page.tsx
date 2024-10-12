import Content from "@/modules/post/Content";

export default async function PostPage({ params, searchParams }: any) {
  console.log("Post Page");
  const id = searchParams.id

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "force-cache"
  });

  const post: Record<string, any> = await res.json();

  return <>
    <Content data={post} />
  </>
}