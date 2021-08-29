import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Components
import List from 'components/ListRelativeVideos/List';
import { useIsFavorite } from 'utils/hooks/useIsFavorite';
import VideoDetail from '../../components/VideoDetail/VideoDetail';
// Ows Styles
import { VideoRow, VideoColumn } from './Styles';
// Context
import { useGlobalProvider } from '../../store/global.provider';
// Actions
import { fetchVideos } from '../../store/globalActions';
// Own hooks

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
  );
}
