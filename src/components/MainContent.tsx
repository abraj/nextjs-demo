import { someAction } from '@/utils/some-action';

export default function MainContent() {
  return (
    <>
      <h2>MainContent12</h2>
      <form action={async () => {
        'use server';
        await someAction("hey", 99);
      }}>
        <button type="submit">someServerAction</button>
      </form>
    </>
  );
}
