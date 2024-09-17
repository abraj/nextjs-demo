import 'server-only';

export default async function ServerComponent1() {
  // const resp  = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  // const data = await resp.json();

  return (
    <>
      <div>ServerComponent1</div>
      {/* <pre>{JSON.stringify(data)}</pre> */}
    </>
  );
}
