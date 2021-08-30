import { renderHook } from '@testing-library/react-hooks';

import {useIsFavorite} from 'utils/hooks/useIsFavorite';
//import { mockVideos } from '../../mockData';

const mockVideos = [{
  videoId: 'nmXMgqjQzls',
  title: 'Video Tour | Welcome to Wizeline Guadalajara',
  description: 'Follow Hector Padilla, Wizeline Director of Engineering, for a lively tour of our office',
  url: 'https://i.ytimg.com/vi/nmXMgqjQzls/mqdefault.jpg',
},{
  videoId: 'HYyRZiwBWc8',
  title: 'Wizeline Guadalajara | Bringing Silicon Valley to Mexico',
  description: 'Wizeline continues to offer a Silicon Valley culture in burgeoning innovation hubs like Mexico and Vietnam.',
  url: 'https://i.ytimg.com/vi/HYyRZiwBWc8/mqdefault.jpg',
}]

describe('Testing useIsFavorite hooks', () => {
  const user = {
    id: '123',
    name: 'Wizeline',
    avatarUrl:
      'https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png',
  };

  it('Finding a favorite video', async () => {
    const { result } = renderHook(() =>
      useIsFavorite('nmXMgqjQzls', mockVideos, user)
    );
    expect(result.current).toBe(mockVideos[0]);
  });

  
});