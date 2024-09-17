'use client';

import React, { useState, useEffect, useActionState, useTransition } from 'react';
import { serverActionA, serverActionB, serverActionC, serverActionD } from '@/utils/server-actions';

export default function ColorProvider({ children, elem, actionFn }: ColorProviderProops) {
  const [colorTheme, setColorTheme] = useState('light');

  const [actionState, serverAction, isPending1] = useActionState(serverActionD, null, 'n/a');
  const [isPending2, startTransition] = useTransition();

  useEffect(() => {
    const timer = setTimeout(() => {
      setColorTheme('dark');
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div>~~~~~~~~~~~~~~~~</div>
      {elem}
      <h1>ColorProvider12: {colorTheme}</h1>
      <div>
        <button onClick={() => actionFn("hello", 123)}>serverAction2</button>
        <span>&nbsp;&nbsp;</span>
        <button onClick={() => serverActionA("world", 99)}>serverActionA</button>
      </div>
      <form action={serverActionB}>
        <input type="text" name="username" placeholder="username" />
        <button type="submit">submit</button>
      </form>
      <form>
        <input type="text" name="username" placeholder="username" />
        <button formAction={serverActionB}>submit</button>
      </form>
      <form action={(formData) => serverActionC(formData, "hello!")}>
        <input type="text" name="username" placeholder="username" />
        <button type="submit">submit</button>
      </form>

      <form action={serverAction}>
        <input type="text" name="username" placeholder="username" defaultValue={actionState?.username} />
        <button type="submit">proceed</button>
      </form>

      <form id="myForm">
        <input type="text" name="username" placeholder="username" defaultValue={actionState?.username} />
        <button type="submit" onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
          e.preventDefault(); // Prevents the default form submission
          const form = document.getElementById('myForm')! as HTMLFormElement;
          startTransition(() => serverAction(new FormData(form)));
        }}>proceed</button>
      </form>

      <div>status: {(isPending1 || isPending2) ? 'Please wait..' : actionState?.status}</div>
      <div>~~~~~~~~~~~~~~~~</div>
      {children}
    </>
  );
}

interface ColorProviderProops {
  elem: React.ReactNode;
  children: React.ReactNode;
  actionFn: (a: string, b: number) => Promise<void>;
}
