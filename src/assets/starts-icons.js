import React from 'react'
import { Star } from './star-icon'

export function fiveStarts() {
  return (
    <div>
      <Star alt='' style={starStyle} />
      <Star alt='' style={starStyle} />
      <Star alt='' style={starStyle} />
      <Star alt='' style={starStyle} />
      <Star alt='' style={starStyle} />
    </div>
  )
}

export function fourStarts() {
  return (
    <div>
      <Star alt='' style={{ ...starStyle, fill: 'grey' }} />
      <Star alt='' style={starStyle} />
      <Star alt='' style={starStyle} />
      <Star alt='' style={starStyle} />
      <Star alt='' style={starStyle} />
    </div>
  )
}

export function thereStarts() {
  return (
    <div>
      <Star alt='' style={{ ...starStyle, fill: 'grey' }} />
      <Star alt='' style={{ ...starStyle, fill: 'grey' }} />
      <Star alt='' style={starStyle} />
      <Star alt='' style={starStyle} />
      <Star alt='' style={starStyle} />
    </div>
  )
}

export function twoStarts() {
  return (
    <div>
      <Star alt='' style={{ ...starStyle, fill: 'grey' }} />
      <Star alt='' style={{ ...starStyle, fill: 'grey' }} />
      <Star alt='' style={{ ...starStyle, fill: 'grey' }} />
      <Star alt='' style={starStyle} />
      <Star alt='' style={starStyle} />
    </div>
  )
}

const starStyle = {
  height: 20,
  width: 20,
  fill: 'yellow',
  marginRight: 3
}