import React, { Fragment, useEffect } from 'react'
import fetch from 'node-fetch'
import axios from 'axios'
import '../styles/kakaomap.css'
import { useState } from 'react'

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

  const Data =  {
    id: 0,
    distance: 0,
    latitude: 0,
    longitude: 0
  }
  
  const [data, setData] = useState(Data)

  axios.get('http://18.218.186.235:8080/data', {
    headers: {
      'Content-Type': 'text/plain'
    }
  })
    .then((response) => {
      setData(response.data)
    })

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
