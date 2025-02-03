import React from 'react'
import Slider from '../layout/Slider'
import ImageKross from '../layout/ImageKross'
import { Baner } from '../layout/baner/Baner'

export default function MainPage() {
  return (
    <div>
      <Slider/>
      <ImageKross/>
      {/* <Card/> */}
      <Baner/>
    </div>
  )
}
