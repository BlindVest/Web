import { Component } from 'react'
import Header from '../components/Header'
import KakaoMap from '../scripts/KakaoMap'

class Home extends Component {
  render() {
    return (
      <div className="MapView">
        <Header />
        <div>
          <KakaoMap></KakaoMap>
        </div>
      </div>
    )
  }
}

export default Home