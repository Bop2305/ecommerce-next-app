export default async function PostsPage() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    cache: "no-cache"
  });

  const posts: Record<string, any>[] = await res.json();

  return <>
        {posts.map((post) => (
        <ul key={post?.id}>
          <li>{post.id}</li>
          <li>{post.title}</li>
        </ul>
      ))}
  </>
}