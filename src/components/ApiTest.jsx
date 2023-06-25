import React, { useEffect, useState } from "react";
const ApiTest = () => {
  const [testValue, SetTestValue] = useState({ data: [] });
  useEffect(() => {
    fetch(
      "https://api.odcloud.kr/api/3073740/v1/uddi:52615e05-9e5a-49bc-bae6-b00fcf2e3e18?page=1&perPage=100&serviceKey=qsr5u284Dr5jGGroaJOV2K4kwjx05oiRVgYOUZKvIBTwqiXEMwp44m49pzMi/o6gwc6bI1pyEhLIUemc9bTtTw=="
    )
      .then((res) => res.json())
      .then((value) => {
        console.log(value);
        SetTestValue(value);
      });
  }, []);
  return (
    <>
      {testValue.data.map((e) => {
        return <div key={e.연번}>{e.설치위치}</div>;
      })}
    </>
  );
};
export default ApiTest;
