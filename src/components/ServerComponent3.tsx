import 'server-only';

export default async function ServerComponent3() {
  // const resp  = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  // const data = await resp.json();

  return (
    <>
      <div>ServerComponent3</div>
      {/* <pre>{JSON.stringify(data)}</pre> */}
    </>
  );
}
