import { api } from '_api';

export const chatApi = {
  seek: () => api.get('/chat/room?type=seek', {}),
};
