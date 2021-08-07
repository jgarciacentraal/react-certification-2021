import { useState, useEffect, useCallback } from 'react';

export const useFetch = (param, fetching) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    if (fetching) {
      try {
        const response = await fetch(
          `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${param}&type=video&key=${process.env.REACT_APP_API_KEY}`,
          {
            method: 'get',
            headers: { 'Content-Type': 'application/json' },
          }
        );
        const data = await response.json();
        setVideos(data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
  }, [param, fetching]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { videos, loading, error };
};
