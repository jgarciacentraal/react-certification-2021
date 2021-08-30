import React, {useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
//import estilos de VideoPage
import {VideoRow, VideoColumn} from 'pages/Video/Styles';
import { ListContainer, ListVideoItem, ListImg, ListDetail } from 'components/ListRelativeVideos/Styles';
import VideoDetail from '../../components/VideoDetail/VideoDetail';

import { useIsFavorite } from 'utils/hooks/useIsFavorite';
import { fetchVideos } from '../../store/globalActions';
import { useGlobalProvider } from 'store/global.provider';
import { selectVideo } from 'store/globalActions';

export default function FavoriteVideo() {
  const matchParams = useParams();

  const {
    state: { videoList, videoSelected, favoriteVideos, user },
    dispatch,
  } = useGlobalProvider();


  const favorite = useIsFavorite(matchParams.id, favoriteVideos, user);

  const { id } = matchParams;

  useEffect(() => {
    if (!videoList?.items) {
      fetchVideos(dispatch, id, true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSelectVideo = (video) => {
    selectVideo(dispatch, video);
  };

  return (
    <VideoRow>
      <VideoColumn>
        <VideoDetail
          video={{
            user,
            videoSelected,
            favorite,
          }}
        />
      </VideoColumn>
      {/* Lista aqui */}
      <ListContainer>
        {favoriteVideos.length > 0 &&
          favoriteVideos.map((video) => {
            const { videoId, title, description, url } = video;
            return (
              <Link
                key={videoId}
                onClick={() => onSelectVideo({ title, description, url, videoId })}
                to={{
                  pathname: `/favorites/${videoId}`,
                }}
              >
                <ListVideoItem>
                  <ListImg src={url} alt="wizeline.jpg" />
                  <ListDetail>
                    <h5>{title}</h5>
                  </ListDetail>
                </ListVideoItem>
                <Divider />
              </Link>
            );
          })}
      </ListContainer>    
    </VideoRow>
  )
}
