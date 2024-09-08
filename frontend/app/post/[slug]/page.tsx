import { notFound, useRouter } from 'next/navigation'; // App Router での useRouter のインポート
import { GetServerSideProps } from 'next';

// Post の型定義
interface Post {
  _id: string;
  slug: string;
  title: string;
  description?: string; // description はオプション（存在しない場合もある）
}

// サンプルデータ（実際にはデータベースから取得する）
const allPosts: Post[] = [
  {
    _id: '1',
    slug: '/post/1',
    title: 'Sample Post Title 1',
    description: 'This is a brief description of the sample post 1.',
  },
  {
    _id: '2',
    slug: '/post/2',
    title: 'Sample Post Title 2',
    description: 'This is a brief description of the sample post 2.',
  },
];

interface PostProps {
    params: {
        slug: string[]
    }
}

export default async function PostPage({ params }: PostProps) {
    const post =   {
      _id: '1',
      slug: '/post/1',
      title: 'Sample Post Title 1',
      description: 'This is a brief description of the sample post 1.',
    }
  
    if (!post) {
      notFound
    }
  
    return (
      <article className="py-6 prose dark:prose-invert">
        <h1 className="mb-2">{post.title}</h1>
        {post.description && (
          <p className="text-xl mt-0 text-slate-700 dark:text-slate-200">
            {post.description}
          </p>
        )}
        <hr className="my-4" />
      </article>
    )
}