'use client';

import { ChangeEvent, useState } from 'react';

function SignIn() {
  const [signInData, setSignInData] = useState({
    id: '',
    password: '',
  });

  const handleChange = ({
    target: { value, id },
  }: ChangeEvent<HTMLInputElement>) => {
    setSignInData({
      ...signInData,
      [id]: value,
    });
  };

  const handleSubmit = () => {};

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input id="id" onChange={handleChange} />
        <input id="password" onChange={handleChange} />
        <button type="submit">로그인</button>
      </form>
    </div>
  );
}
export default SignIn;
