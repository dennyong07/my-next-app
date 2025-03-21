import Link from 'next/link';
import { fetchData } from '../api';

export default async function Home() {
  const posts = await fetchData('posts');
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {posts.map((post: { id: number; title: string; body: string }) => (
        <div key={post.id} className="bg-white p-6 rounded-lg shadow">

          <h1 className="text-xl font-bold mb-2">{post.title}</h1>

          <p className="">{post.body}</p>

          <Link className="text-blue-500 hover:underline" href={`/posts/${post.id}`}>Read More</Link>
          
        </div>
      ))}
    </div>
  );
}
