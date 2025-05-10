import Test from './testing2/page';

export default function Home({ searchParams }) {
  const category = searchParams?.category || 'default';

  return (
    <div>
      <h1>Displaying Work for Category: {category}</h1>
      <Test category={category} />
    </div>
  );
}
  