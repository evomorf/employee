import * as React from "react"
import Svg, { Path } from "react-native-svg"

function BackNext(props) {
  return (
    <Svg
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 256 256"
      xmlSpace="preserve"
      enableBackground="new 0 0 256 256"
      {...props}
    >
      <Path
        d="M74.9 0c-3.6-.1-7 1.6-10 4.4-2.6 2.5-5.2 5.2-7.8 7.8-2.8 2.8-4.3 6.2-4.3 10.3-.1 5 2.5 8.6 5.8 11.9l90.5 90.5c3.3 3.3 3.3 2.6.1 5.9l-35.1 35.1c-18.8 18.8-37.7 37.6-56.4 56.5-6.9 6.9-6.8 15.1 0 22 2.2 2.2 4.3 4.4 6.5 6.5 6.9 6.8 15.1 6.8 22-.1l111.9-111.9c1.2-1.2 2.3-2.5 3.1-3.9 3.6-6 2.4-12.7-3.2-18.3-32.6-32.7-65.4-65.4-98.1-98.2L86 4.6C83 1.7 79.6 0 74.9 0z"
        fill="#fff"
      />
      <Path d="M74.9 0c4.7 0 8.1 1.7 11 4.6l13.9 13.9 98.3 98.3c5.6 5.6 6.8 12.3 3.2 18.3-.8 1.4-2 2.7-3.1 3.9-37.3 37.3-74.5 74.6-111.9 111.9-6.9 6.9-15.1 6.9-22 .1-2.2-2.2-4.4-4.3-6.5-6.5-6.8-6.9-6.9-15.1 0-22 18.8-18.8 37.6-37.6 56.4-56.5l35.1-35.1c3.2-3.3 3.2-2.6-.1-5.9C119 94.8 88.9 64.6 58.7 34.5c-3.3-3.3-5.9-6.9-5.8-11.9 0-4.1 1.5-7.4 4.3-10.3C59.8 9.6 62.4 7 65 4.4c2.9-2.8 6.3-4.5 9.9-4.4z" />
    </Svg>
  )
}

export default BackNext
