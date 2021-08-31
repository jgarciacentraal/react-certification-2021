import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useIsFavorite } from 'utils/hooks/useIsFavorite';
import List from 'components/ListRelativeVideos/List';
import { VideoRow, VideoColumn } from './Styles';
import { useGlobalProvider } from '../../store/global.provider';
import { fetchVideos } from '../../store/globalActions';
import VideoDetail from '../../components/VideoDetail/VideoDetail';

export default function Video() {
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

  if (!videoSelected) return <>Loading...</>;
  return (
    <>
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
      
      <List videoId={id} />
      
    </VideoRow>
    </>
  );
}
