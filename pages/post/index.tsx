import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from 'next';

type PostsProps = {
  posts: Record<string, any>[];
};

const Posts = ({ posts }: PostsProps) => {
  return (
    <>
      {posts.map(post => (
        <ul key={post?.id}>
          <li>{post.id}</li>
          <li>{post.title}</li>
        </ul>
      ))}
    </>
  );
};

export async function getServerSideProps({
  query,
}: GetServerSidePropsContext): Promise<GetServerSidePropsResult<PostsProps>> {
  console.log('Start Server Side');

  const res = await fetch('https://jsonplaceholder.typicode.com/posts');

  if (!res.ok) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  const posts = await res.json();

  if (posts.length < 1) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      posts,
    },
  };
}

export default Posts;
