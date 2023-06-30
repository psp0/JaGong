import React, { useEffect, useState } from "react";

const SERVICE_KEY = process.env.REACT_APP_SEONGNAM_BIKE_API_KEY;
const ApiTest = () => {
  const [SN, SetSN] = useState({ data: [] });
  useEffect(() => {
    fetch(
      `https://api.odcloud.kr/api/3073740/v1/uddi:52615e05-9e5a-49bc-bae6-b00fcf2e3e18?page=1&perPage=100&serviceKey=${SERVICE_KEY}`
    )
      .then((res) => {
        if (res.status !== 200)
          throw new Error(`HTTP error! Status: ${res.status}`);
        return res.json();
      })
      .then((value) => {
        console.log(value);
        if (value.status !== undefined) SetSN(value);
        else SetSN(value);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      {SN.data ? (
        SN.data.map((e) => {
          return <div key={e.연번}>{e.설치위치}</div>;
        })
      ) : (
        <>{SN.status} Error</>
      )}
    </>
  );
};
export default ApiTest;
