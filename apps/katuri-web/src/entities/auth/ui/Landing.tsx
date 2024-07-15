import Link from 'next/link';

function Landing() {
  return (
    <div>
      <h1>투리로그</h1>
      <Link href={'/sign-in'}>로그인</Link>
      <Link href={'/sign-up'}>회원가입</Link>
    </div>
  );
}
export default Landing;
