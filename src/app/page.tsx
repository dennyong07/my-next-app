import Link from 'next/link';

async function fetchPosts(Id: string) {
  const response = await fetch('https://jsonplaceholder.typicode.com/' + Id);
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  return response.json();
}

export default async function Home() {
  const posts = await fetchPosts('posts');
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {posts.map((post) => (
        <div key={post.id} className="bg-white p-6 rounded-lg shadow">
          <h1 className="text-xl font-bold mb-2">{post.title}</h1>
          <p className="">{post.body}</p>

          <Link className="text-blue-500 hover:underline" href={`/posts/${post.id}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
}
