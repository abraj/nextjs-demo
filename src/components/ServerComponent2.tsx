import 'server-only';

export async function ServerComponent2() {
  // const resp  = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  // const data = await resp.json();

  return (
    <>
      <div>ServerComponent2</div>
      {/* <pre>{JSON.stringify(data)}</pre> */}
    </>
  );
}

export async function serverAction2(a: string, b: number) {
  'use server';

  console.log('serverAction2:', a, b);
}
