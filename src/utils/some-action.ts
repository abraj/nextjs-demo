import 'server-only'; // Avoid accidental import (of below functions) from a client component

export async function someAction(a: string, b: number) {
  console.log('someAction (server-only):', a, b);
}
