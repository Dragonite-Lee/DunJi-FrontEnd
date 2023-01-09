import { createSlice } from '@reduxjs/toolkit';

import {
  RoomListTypes,
  RoomInfoListTypes,
  RoomPostListTypes,
  RoomReviewListTypes,
  RoomState,
} from 'types';

const initialState: RoomState = {
  ROOM_INFO: {},
  ROOM_REVIEW: {},
  ROOM_POST: {},
  ROOM_LIST: {},
  MAP_ROOM_LIST: {},
  ROOM_ID: '',
};

type ReviewitemTypes = { [id: string]: RoomReviewListTypes }; //list[id].뭐시기하면 나옴
type PostitemTypes = { [id: string]: RoomPostListTypes };
type InfoitemTypes = { [id: string]: RoomInfoListTypes };
type itemTypes = { [id: string]: RoomListTypes };

const room = createSlice({
  name: 'room',
  initialState,
  reducers: {
    dispatchRoomReviewList: (state, action) => {
      const list: ReviewitemTypes = {};
      for (const item of Object.keys(action.payload)) {
        const content = action.payload[item];
        list[item] = content;
      }
      state.ROOM_REVIEW = { ...state.ROOM_REVIEW, ...list };
    },
    dispatchRoomPostList: (state, action) => {
      const list: PostitemTypes = {};
      for (const item of Object.keys(action.payload)) {
        const content = action.payload[item];
        list[item] = content;
      }
      state.ROOM_POST = { ...state.ROOM_POST, ...list };
    },
    dispatchRoomInfoList: (state, action) => {
      const list: InfoitemTypes = {};
      for (const item of Object.keys(action.payload)) {
        const content = action.payload[item];
        list[item] = content;
      }
      state.ROOM_INFO = { ...state.ROOM_INFO, ...list };
    },
    dispatchRoomList: (state, action) => {
      const list: itemTypes = {};
      for (const item of action.payload) {
        list[item.roomID] = item;
      }
      state.ROOM_LIST = { ...state.ROOM_LIST, ...list };
    },
    dispatchMapRoomList: (state, action) => {
      const list: itemTypes = {};
      for (const item of action.payload.data) {
        list[item.roomID] = item;
      }
      state.MAP_ROOM_LIST = list;
    },
    dispatchRoomId: (state, action) => {
      state.ROOM_ID = action.payload;
    },
  },
});

export const {
  dispatchRoomReviewList,
  dispatchRoomPostList,
  dispatchRoomInfoList,
  dispatchRoomList,
  dispatchMapRoomList,
  dispatchRoomId,
} = room.actions;

export default room.reducer;
