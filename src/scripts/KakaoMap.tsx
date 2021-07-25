import React, { Fragment, useEffect } from 'react'
import axios from 'axios'
import '../styles/kakaomap.css'

declare global {
  interface Window {
    kakao: any;
    map: any;
  }
}

interface Data {
  distance: Number
  latitude: Number
  longitude: Number
}

let data: Data
axios.get('18.218.186.235/data')
  .then(function (res: any) {
    data = res
  })

const KakaoMap: React.FC = () => {
  const mapStyles = {
    width: '100vw',
    height: '100vh'
  }
  useEffect(() => {
    const container = document.getElementById('map')
    const options = {
      center: new window.kakao.maps.LatLng(data.latitude, data.longitude),
      level: 3
    }
  
    const map = new window.kakao.maps.Map(container, options)

    const markerPosition = new window.kakao.maps.LatLng(data.latitude, data.longitude)
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
