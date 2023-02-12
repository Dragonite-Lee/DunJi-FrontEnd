import { api } from '_api';

export const mainApi = {
  newRoom: (id: any) =>
    api.get('/main/newRoom', {
      params: { UserID: id },
    }),

  newReview: (id: any) =>
    api.get('/main/newReview', {
      params: { UserID: id },
    }),
};
