import { useState, useEffect } from "react";
import markerSrc from "../../assets/Detail/location.svg";

declare global {
  interface Window {
    kakao: any;
  }
}
const defaultX: number = 126.977295;
const defaultY: number = 37.575267;

type Props = {
  location: string;
  postalCode: string;
};

const LocationTab = ({ location, postalCode }: Props) => {
  const { kakao } = window;
  const [map, setMap] = useState<any>();

  useEffect(() => {
    window.kakao.maps.load(() => {
      const container = document.getElementById("map");
      const options = {
        center: new kakao.maps.LatLng(defaultY, defaultX),
        level: 4,
      };
      setMap(new kakao.maps.Map(container, options));
    });
  }, []);

  useEffect(() => {
    if (map) {
      window.kakao.maps.load(() => {
        const geocoder = new kakao.maps.services.Geocoder();
        geocoder.addressSearch(location, function (result: any, status: any) {
          if (status === kakao.maps.services.Status.OK) {
            var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
            var message =
              "latlng: new kakao.maps.LatLng(" +
              result[0].y +
              ", " +
              result[0].x +
              ")";
            var resultDiv = document.getElementById("clickLatlng");
            if (resultDiv) resultDiv.innerHTML = message;
            var marker = new kakao.maps.Marker({
              map: map,
              position: coords,
              image: new kakao.maps.MarkerImage(
                markerSrc,
                new kakao.maps.Size(45, 45),
                { offset: new kakao.maps.Point(22, 45) },
              ),
            });
            map.setCenter(coords);
          }
        });
      });
    }
  }, [map]);

  return (
    <div className="w-[1160px] laptop:w-[calc(100%-100px)] mobile:w-[calc(100%-40px)] flex flex-col gap-[70px] pb-[50px]">
      <div className="font-bold text-mdTitle text-black">상세 위치</div>
      <div id="map" className="w-[600px] mobile:w-full h-[480px]"></div>
    </div>
  );
};

export default LocationTab;
