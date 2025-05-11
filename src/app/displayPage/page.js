import DisplayApi from '@/api/DisplayApi/page';

export default function Test({ searchParams }) {
  const category = searchParams?.category || 'default';

  return (
    <div>
      <DisplayApi collectionName={category} />
    </div>
  );
}
