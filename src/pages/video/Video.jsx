import React from 'react'
import './Video.css'
import PlayVideo from '../../components/playvideo/PlayVideo'
import Recommended from '../../components/recommended/Recommended'
import { useParams } from 'react-router-dom'
const Video = () => {
const {videoId,categoryId} = useParams()



  return (
    <div className='play-container'>

      <PlayVideo videoId={videoId}/>
      <Recommended/>
    </div>
  )
}

export default Video
