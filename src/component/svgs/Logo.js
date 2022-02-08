import * as React from "react"
import Svg, { Path, G } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: style */



function Logo(props) {
  return (
    <Svg
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 256 99"
    style={{
      enableBackground: "new 0 0 256 99",
      
    }}
    xmlSpace="preserve"
    {...props}
  >
    <Path
      className="st0"
      d="M37.1,41.8L37.1,41.8C37.1,41.8,37.1,41.8,37.1,41.8c-5.8,0-10.5-4.7-10.5-10.5c0-5.8,4.7-10.5,10.5-10.5 c5.8,0,10.5,4.7,10.5,10.5c0,0.8-0.1,1.5-0.2,2.2H74c-2-18.6-17.8-33-36.9-33C16.6,0.6,0,17.2,0,37.7c0,7.5,2.1,14.8,5.3,21.6h31.8 c4.1,0,7.2,2.1,7.2,6.1s-3.2,11.7-7.2,11.7c-4.1,0-7.4-7.7-7.4-11.7l-21.1,0c9.9,17.1,27,31.1,27,31.1c2,1.6,1.2,1.6,3.2,0 c0,0,32.4-26.6,35.3-54.7v0H37.1z"
    />
    <G>
      <Path
        className="st0"
        d="M124.5,56.1H99.8c-0.4-1.2-0.6-2.4-0.6-3.4c0-1.4,0.3-2.9,0.8-4.3h8.3c-0.6-3.2-2.4-4.8-5.4-4.8 c-2,0-3.7,0.9-5,2.6c-1.3,1.7-1.9,3.9-1.9,6.6c0,2.8,0.6,5.1,1.8,6.8c1.2,1.7,2.8,2.6,4.9,2.6c1.6,0,3.2-0.8,4.7-2.4l9.3,11.1 c-4.3,3.4-9.1,5.1-14.4,5.1c-6.4,0-11.8-2.2-16.2-6.5c-4.4-4.3-6.6-9.7-6.6-16.1c0-6.4,2.2-11.7,6.6-16.1c4.4-4.4,9.9-6.6,16.3-6.6 c6.3,0,11.6,2.1,15.9,6.4c4.3,4.3,6.4,9.5,6.4,15.8C124.7,53.7,124.6,54.7,124.5,56.1z"
      />
      <Path
        className="st0"
        d="M155.3,58.8v16.8c-1.3,0.2-2.6,0.3-3.7,0.3c-6.5,0-12-2.1-16.3-6.4c-4.3-4.3-6.5-9.7-6.5-16.1 c0-6.3,2.2-11.6,6.6-16c4.4-4.4,9.7-6.6,16-6.6c7,0,12.5,2.1,16.6,6.2c4,4.1,6.1,9.7,6.1,16.8v21.3h-16.3V55c0-2.3-0.6-4.1-1.7-5.5 c-1.1-1.4-2.6-2-4.5-2c-1.7,0-3.2,0.6-4.4,1.9c-1.2,1.2-1.9,2.7-1.9,4.4c0,1.8,0.6,3.3,1.7,4.4c1.1,1.2,2.6,1.7,4.3,1.7 C152.8,60,154.1,59.6,155.3,58.8z"
      />
      <Path
        className="st0"
        d="M198.1,15.7v16.6h7.3v17.2h-7.3c0,3.5,0.5,5.8,1.6,7.1c1.1,1.3,3.1,2,6,2v17.1c-0.8,0-1.5,0-1.9,0 c-3.7,0-7.2-0.9-10.4-2.6c-3.3-1.7-5.9-4-7.9-7c-2.5-3.7-3.7-8.7-3.7-14.9V15.7H198.1z"
      />
      <Path
        className="st0"
        d="M254,31.7l-13.3,26.3H256v17.1h-41.8l13.2-26.4h-13.7v-17H254z"
      />
    </G>
    <Path
      className="st0"
      d="M88.1,97.7h-22c-4.6,0-8.3-3.7-8.3-8.3v0c0-4.6,3.7-8.3,8.3-8.3h22c4.6,0,8.3,3.7,8.3,8.3v0 C96.4,93.9,92.6,97.7,88.1,97.7z"
    />
  </Svg>
  )
}

export default Logo
