"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [subscribeList, setSubscribeList] = useState<PushSubscriptionJSON[]>(
    []
  );

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios("http://localhost:3001/subscribeList");
      setSubscribeList(response.data);
    };
    fetchData();
  }, []);

  const handlePush = (subscribe: PushSubscriptionJSON) => {
    axios.post("http://localhost:3001/push", subscribe);
  };

  return (
    <>
      <h1>푸시 어드민 서비스</h1>
      <p>푸시 어드민 서비스는 푸시 알림을 관리하는 서비스입니다.</p>
      <div>
        <h2>등록된 구독 정보 리스트</h2>
        <hr />
        {subscribeList.map((subscribe) => (
          <div>
            <p>{subscribe.endpoint}</p>
            <button onClick={() => handlePush(subscribe)}>푸시 보내기</button>
            <hr />
          </div>
        ))}
      </div>
    </>
  );
}
export default Home;
