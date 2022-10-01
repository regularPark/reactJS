import { Link, Outlet } from "react-router-dom";

const Welcome = () => {
  // nested Route 문제 발생.
  // Route를 Routes로 wrapping해주기
  // JSX 코드(<p>~</p>)를 element 내부로 이동
  // Route의 path를 /~~/new가 아닌 new만.
  // 상위 단계의 Route가 주소를 갖고 있기 때문
  return (
    <section>
      <h1>The Welcome Page</h1>
      <Link to="new-user">New User</Link>
      <Outlet />
    </section>
  );
};

// Outlet을 이용하면 라우팅을 전부 한 군데에서 할 수 있게 됨.

export default Welcome;
