// import './App.css';
// import { useEffect } from 'react';
// import { Map, MapMarker } from "react-kakao-maps-sdk";

// function App() {
  
//   //스크립트 파일 읽어오기
//   const new_script = src => { 
//     return new Promise((resolve, reject) => { 
//       const script = document.createElement('script'); 
//       script.src = src; 
//       script.addEventListener('load', () => { 
//         resolve(); 
//       }); 
//       script.addEventListener('error', e => { 
//         reject(e); 
//       }); 
//       document.head.appendChild(script); 
//     }); 
//   };
  
//   useEffect(() => { 
//     //카카오맵 스크립트 읽어오기
//     const my_script = new_script('https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=311b37e0b39d81f8e93900009a4ad88c');
    
//     //스크립트 읽기 완료 후 카카오맵 설정
//     my_script.then(() => { 
//       console.log('script loaded!!!');  
//       const kakao = window['kakao']; 
//       kakao.maps.load(() => {
//         const mapContainer = document.getElementById('map');
//         const options = { 
//           center: new kakao.maps.LatLng(37.56000302825312, 126.97540593203321), //좌표설정
//           level: 3 
//         }; 
//         const map = new kakao.maps.Map(mapContainer, options); //맵생성
//         //마커설정
//         const markerPosition = new kakao.maps.LatLng(37.56000302825312, 126.97540593203321); 
//         const marker = new kakao.maps.Marker({ 
//           position: markerPosition
//         }); 
//         marker.setMap(map); 
//       });   
//     }); 
//   }, []);

//   return (
//     <div className="App">
//       <div id="map" className="map"/>
//     </div>
//   );
// }


// export default App;

import { Map, MapMarker } from "react-kakao-maps-sdk";

function App(){
  return (
    <Map
      center={{ lat: 33.5563, lng: 126.79581 }}
      style={{ width: "100%", height: "360px" }}
    >
      <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
        <div style={{color:"#000"}}>Hello World!</div>
      </MapMarker>
    </Map>
  )
}

export default App;
