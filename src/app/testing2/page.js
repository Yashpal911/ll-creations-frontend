import Testing from '../testpage/testpage';

export default function Test({ category }) {
  return (
    <div>
      <Testing collectionName={category} />
    </div>
  );
}
