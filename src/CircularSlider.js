import React from 'react'
import CircularGallery from './CircularGallery'

function CircularSlider() {
  return (
    <div style={{ height: '600px', position: 'relative' }}>
    <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
  </div>
  )
}

export default CircularSlider