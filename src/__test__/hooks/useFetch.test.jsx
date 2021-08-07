import { renderHook } from '@testing-library/react-hooks';

import {useFetch} from '../../utils/hooks/useFetch';

//import { mockVideos } from '../../mockData';


const promiseControl = () => {
  let response;
  const promise = new Promise((resolve, reject) => {
    response = { resolve, reject };
  });
  return { response, promise };
};

describe('Testing useFetch hooks', () => {
  it('Testing loading state', async () => {
    const { response, promise } = promiseControl();
    global.fetch = jest.fn(() => promise);

    const { result, waitForNextUpdate } = renderHook(() => useFetch('CHzlSGRvWPs', true));

    expect(result.current.loading).toBe(true);
    response.resolve();

    await waitForNextUpdate();
    expect(result.current.loading).toBe(false);
  });

  // it('Getting data successfully', async () => {
  //   const { response, promise } = promiseControl();
  //   global.fetch = jest.fn(() => promise);

  //   const { result, waitForNextUpdate } = renderHook(() => useFetch('CHzlSGRvWPs', true));
  //   const videos = mockVideos;
  //   response.resolve({ json: () => ({ data: videos }) });

  //   await waitForNextUpdate();
  //   expect(result.current.videosRelated).toEqual({ data: videos });
  // });

  it('Getting an error during request', async () => {
    global.fetch = jest.fn(() => {
      return new Promise(() => {
        const err = 'Network error';
        throw err;
      });
    });

    const { result, waitForNextUpdate } = renderHook(() => useFetch('CHzlSGRvWPs', true));
    await waitForNextUpdate();
    expect(result.current.error).toBe(true);
  });
});