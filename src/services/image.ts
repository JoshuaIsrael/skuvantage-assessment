import { getRequest } from 'services';

// eslint-disable-next-line import/prefer-default-export
export const getRandomImage = async () => {
  return (await getRequest('https://picsum.photos/200')).request.responseURL;
};
