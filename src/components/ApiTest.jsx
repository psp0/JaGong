import React, { useEffect, useState } from "react";
import config from "../config/config.json";
const ApiTest = () => {
  const [testValue, SetTestValue] = useState({ data: [] });
  useEffect(() => {
    fetch(
      `https://api.odcloud.kr/api/3073740/v1/uddi:52615e05-9e5a-49bc-bae6-b00fcf2e3e18?page=1&perPage=100&serviceKey=${
        process.env.SEONGNAM_BIKE_API_KEY || config.SEONGNAM_BIKE_API_KEY
      }`
    )
      .then((res) => {
        if (res.status !== 200)
          throw new Error(`HTTP error! Status: ${res.status}`);
        return res.json();
      })
      .then((value) => {
        if (value.status !== undefined) SetTestValue(value);
        else SetTestValue(value);
      })
      .catch((err) => {
        console.log(err);
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
