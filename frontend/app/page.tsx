import Link from "next/link"

// Post の型定義
interface Post {
  _id: string;
  slug: string;
  title: string;
  description?: string; // description はオプション（存在しない場合もある）
}

export default function Home() {
  const allPosts: Post[] = [
    {
      _id: '1',
      slug: '/post/1',  // 記事の詳細ページへのパス
      title: 'Sample Post Title',
      description: 'This is a brief description of the sample post.',  // オプションの説明
    },
    {
      _id: '2',
      slug: '/post/2',  // 記事の詳細ページへのパス
      title: 'Sample Post Title',
      description: 'This is a brief description of the sample post.',  // オプションの説明
    },
  ];
  // allPostsはバックエンドにアクセスしてデータベースから取ってくる
  return (
    <div className="prose dark:prose-invert">
      {allPosts.map((post) => (
        <article key={post._id}>
          <Link href={post.slug}>
            <h2>{post.title}</h2>
          </Link>
          {post.description && <p>{post.description}</p>}
        </article>
      ))}
    </div>
  )
}