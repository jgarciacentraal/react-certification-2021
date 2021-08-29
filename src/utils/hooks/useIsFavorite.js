import { useState, useEffect } from 'react';

export const useIsFavorite = (videoId, favoriteVideos, user) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setIsFavorite(false);
    if (user) {
      const favorite = favoriteVideos.find((video) => video.videoId === videoId);
      setIsFavorite(favorite);
    }
  }, [videoId, favoriteVideos, user]);

  return isFavorite;
};
