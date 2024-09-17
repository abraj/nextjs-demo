'use server';

import { someAction } from "./some-action";

export async function serverActionA(a: string, b: number) {
  console.log('serverActionA:', a, b);
  await someAction(a, b);
}

export async function serverActionB(formData: FormData) {
  const username = formData.get('username');
  console.log('serverActionB:', formData);
  console.log('>> username:', username);  
}

export async function serverActionC(formData: FormData, msg: string) {
  const username = formData.get('username');
  console.log('serverActionC:', formData);
  console.log('==>> msg:', msg);
  console.log('-->> username:', username);
}

export async function serverActionD(_prevState: unknown, formData: FormData) {
  const username = formData.get('username') as string ?? '';
  console.log('serverActionD:', formData);

  await new Promise((resolve) => setTimeout(resolve, 500));
  let status = 'failed';
  if (username === 'abraj') {
    status = 'successful';
  }
  return { status, username };
}
