import React, { useEffect, useState } from "react";
const ApiTest = () => {
  const [testValue, SetTestValue] = useState({ data: [] });
  useEffect(() => {
    fetch(
      "https://api.odcloud.kr/api/3073740/v1/uddi:52615e05-9e5a-49bc-bae6-b00fcf2e3e18?page=1&perPage=100&serviceKey=qsr5u284Dr5jGGroaJOV2K4kwjx05oiRVgYOUZKvIBTwqiXEMwp44m49pzMi/o6gwc6bI1pyEhLIUemc9bTtTw=="
    )
      .then((res) => {
        if (res.status !== 200) return { status: res.status };
        return res.json();
      })
      .then((value) => {
        if (value.status !== undefined) SetTestValue(value);
        else SetTestValue(value);
      });
  }, []);
  return (
    <>
      {testValue.data ? (
        testValue.data.map((e) => {
          return <div key={e.연번}>{e.설치위치}</div>;
        })
      ) : (
        <>{testValue.status} Error</>
      )}
    </>
  );
};
export default ApiTest;
