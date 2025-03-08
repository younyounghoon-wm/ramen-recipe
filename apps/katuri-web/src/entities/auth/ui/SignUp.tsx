'use client';
import { useState } from 'react';

function SignUp() {
  const [signUpData, setSignupData] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const handleChange = ({
    target: { value, id },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setSignupData({
      ...signUpData,
      [id]: value,
    });
  };

  const handleSubmit = () => {};

  return (
    <div>
      <h1>회원가입</h1>
      <form onSubmit={handleSubmit}>
        <input
          id="email"
          type="text"
          placeholder="아이디"
          onChange={handleChange}
        />
        <input
          id="password"
          type="password"
          placeholder="비밀번호"
          onChange={handleChange}
        />
        <input
          id="passwordConfirm"
          type="password"
          placeholder="비밀번호 확인"
          onChange={handleChange}
        />
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
}
export default SignUp;
