import React, { useEffect, useState } from "react";
import "./Map.css";
const SERVICE_KEY = process.env.REACT_APP_SEONGNAM_BIKE_API_KEY;
const Map = () => {
  const [SN, SetSN] = useState({ data: [] });
  const { kakao } = window;
  useEffect(() => {
    if (SN.data.length === 0) {
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
    }
  }, [SN]);
  if (kakao !== undefined && SN.data.length) {
    var mapContainer = document.getElementById("map"), // 지도를 표시할 div
      mapOption = {
        center: new kakao.maps.LatLng(37.3794, 127.1129), // 지도의 중심좌표
        level: 5, // 지도의 확대 레벨
      };
    var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

    var imageSrc =
        "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png", // 마커이미지의 주소입니다
      imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
      imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

    SN.data.forEach((data) => {
      // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
      var markerImage = new kakao.maps.MarkerImage(
          imageSrc,
          imageSize,
          imageOption
        ),
        markerPosition = new kakao.maps.LatLng(data.위도, data.경도); // 마커가 표시될 위치입니다

      // 마커를 생성합니다
      var marker = new kakao.maps.Marker({
        position: markerPosition,
        image: markerImage, // 마커이미지 설정
      });
      // 마커가 지도 위에 표시되도록 설정합니다
      marker.setMap(map);
    });
  }
  return (
    <>
      <div id="map"></div>
    </>
  );
};
export default Map;
