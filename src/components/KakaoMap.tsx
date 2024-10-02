import React, { useEffect, useState } from 'react';
import useKakaoMapSDK from '../utils/hooks/useKakaoMapSDK';
import '../styles/KakaoMaps.scss';

interface KakaoMapsProps {
  mapId: string;
  lat?: number;
  lng?: number;
}

function KakaoMaps(props: KakaoMapsProps) {
  const { mapId, lat = 37.507040, lng = 126.890220 } = props;
  const kakaoMaps = useKakaoMapSDK();
  const [mapInstance, setMapInstance] = useState<kakao.maps.Map | null>(null);
  const [error, setError] = useState<string | null>(null);

  // 지도 생성
  useEffect(() => {
    if (!kakaoMaps) return;

    try {
      const mapElement = document.getElementById(mapId);
      if (!mapElement) throw new Error("Map element not found");

      // 파일에서 스타일 부여시 지도 기능 오동작 방지
      mapElement.style.width = '100%';
      mapElement.style.height = '450px';

      const mapOptions: kakao.maps.MapOptions = {
        center: new kakaoMaps.maps.LatLng(lat, lng),
        level: 4
      };
      const map = new kakaoMaps.maps.Map(mapElement, mapOptions);
      setMapInstance(map);
    } catch (err) {
      console.error("Error creating map:", err);
      setError("지도를 생성하는 중 오류가 발생했습니다.");
    }
  }, [mapId, kakaoMaps, lat, lng]);

  // 지도 상에 UI 표시
  useEffect(() => {
    if (!(kakaoMaps && mapInstance)) return;

    try {
      // 지도 컨트롤
      const zoomControl = new kakaoMaps.maps.ZoomControl();
      mapInstance.addControl(zoomControl, kakaoMaps.maps.ControlPosition.RIGHT);

      // 마커
      const marker = new kakaoMaps.maps.Marker({
        position: new kakaoMaps.maps.LatLng(lat, lng)
      });
      marker.setMap(mapInstance);

      // 인포윈도우
      const infowindowContent = `
      <div style="
        padding: 2px;
        text-align: center;
        width: 150px;
        font-family: Arial, sans-serif;
        font-size: 16px;
        font-weight: bold;
        color: #333;
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 0 10px 10px rgba(0,0,0,0.1);
      ">
        신도림 웨딩시티
      </div>
    `;
    
    const infowindow = new kakaoMaps.maps.InfoWindow({
      content: infowindowContent
    });
      infowindow.open(mapInstance, marker);

    } catch (err) {
      console.error("Error adding UI elements to map:", err);
      setError("지도 UI를 추가하는 중 오류가 발생했습니다.");
    }
  }, [kakaoMaps, mapInstance, lat, lng]);

  if (error) {
    return (
      <div className="map-error">
        <p className="title">오류 발생</p>
        <p>{error}</p>
        <p>잠시 후 다시 시도해주세요.</p>
      </div>
    );
  }

  return (
    <>
      {!kakaoMaps ? (
        <div className="map-loading">
          <p className="title">지도 로딩 중...</p>
          <p>잠시만 기다려주세요.</p>
        </div>
      ) : (
        <div id={mapId} className="map-enabled" />
      )}
    </>
  );
}

export default KakaoMaps;