import React from 'react'
import './PlayVideo.css'

import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'











const PlayVideo = ({videoId}) => {
  return (
    <div className='play-video'>
    {/* <video src={video1} controls autoPlay muted></video> */}
    <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <h3>Best Youtube Channel for 4k Videos</h3>
    <div className="play-video-info">
        <p>1524 Views &bull; 2 days ago</p>
        <div>
            <span><img src={like} alt="" />124</span>
            <span><img src={dislike} alt="" />13</span>
            <span><img src={share} alt="" />Share</span>
            <span><img src={save} alt="" />Save</span>
        </div>
    </div>
      <hr />
      <div className="publisher">
        <img src={jack} alt="" />
        <div>
            <p>Devil-X</p>
            <span>1M Subscribers</span>
        </div>
        <button>Subscibe</button>
      </div>
      <div className="vid-description">
        <p>Channel that Shows 4k</p>
        <p>Subscribe Devil-X To Watch More 4k Content </p>
        <hr />
        <h4>130 Comments</h4>
        <div className="comment">
            <img src={user_profile} alt="" />
            <div>
                <h3>Hemant <span>1 day ago</span></h3>
                <p>superbb</p>
                <div className="comment-action">
                    <img src={like} alt="" />
                    <span>244</span>
                    <img src={dislike} alt="" />
                </div>
            </div>
        </div>
        <div className="comment">
            <img src={user_profile} alt="" />
            <div>
                <h3>Hemant <span>1 day ago</span></h3>
                <p>superbb</p>
                <div className="comment-action">
                    <img src={like} alt="" />
                    <span>244</span>
                    <img src={dislike} alt="" />
                </div>
            </div>
        </div>
        <div className="comment">
            <img src={user_profile} alt="" />
            <div>
                <h3>Hemant <span>1 day ago</span></h3>
                <p>superbb</p>
                <div className="comment-action">
                    <img src={like} alt="" />
                    <span>244</span>
                    <img src={dislike} alt="" />
                </div>
            </div>
        </div>
        <div className="comment">
            <img src={user_profile} alt="" />
            <div>
                <h3>Hemant <span>1 day ago</span></h3>
                <p>superbb</p>
                <div className="comment-action">
                    <img src={like} alt="" />
                    <span>244</span>
                    <img src={dislike} alt="" />
                </div>
            </div>
        </div>
        <div className="comment">
            <img src={user_profile} alt="" />
            <div>
                <h3>Hemant <span>1 day ago</span></h3>
                <p>superbb</p>
                <div className="comment-action">
                    <img src={like} alt="" />
                    <span>244</span>
                    <img src={dislike} alt="" />
                </div>
            </div>
        </div>
        <div className="comment">
            <img src={user_profile} alt="" />
            <div>
                <h3>Hemant <span>1 day ago</span></h3>
                <p>superbb</p>
                <div className="comment-action">
                    <img src={like} alt="" />
                    <span>244</span>
                    <img src={dislike} alt="" />
                </div>
            </div>
        </div>
        <div className="comment">
            <img src={user_profile} alt="" />
            <div>
                <h3>Hemant <span>1 day ago</span></h3>
                <p>superbb</p>
                <div className="comment-action">
                    <img src={like} alt="" />
                    <span>244</span>
                    <img src={dislike} alt="" />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default PlayVideo
