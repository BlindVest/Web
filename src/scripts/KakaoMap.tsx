import React, { Fragment, useEffect } from 'react'
import '../styles/kakaomap.css'

declare global {
  interface Window {
    kakao: any;
    map: any;
  }
}

const KakaoMap: React.FC = () => {
  const mapStyles = {
    width: '100vw',
    height: '100vh'
  }
  useEffect(() => {
    const container = document.getElementById('map')
    const options = {
      center: new window.kakao.maps.LatLng(33.450701, 126.570667),
      level: 3
    }
  
    const map = new window.kakao.maps.Map(container, options)

    const markerPosition = new window.kakao.maps.LatLng(33.450701, 126.570667)
    const marker = new window.kakao.maps.Marker({
      position: markerPosition
    })
    marker.setMap(map)
  }, [])

  return (
    <Fragment>
      <div className="kakaomap">
        <div id="map" style={mapStyles}></div>
      </div>
    </Fragment>
  )
}

export default KakaoMap
