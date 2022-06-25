import * as React from 'react'
import VideoCard from '../../components/VideoCard';

export default function ListVideos({ videos, favoriteVideos }) {
   return (
      <React.Fragment>
         {videos.items.map(({ id, snippet }) => {
            const videoId = id.videoId;
            const { title, description, channelTitle } = snippet;
            const { url } = snippet.thumbnails.medium;
            const data = { title, description, videoId, channelTitle, url };
            return <VideoCard key={videoId} data={{ ...data, favoriteVideos }} />
         })}
      </React.Fragment>
   )

}