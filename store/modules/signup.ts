import { createSlice } from '@reduxjs/toolkit';
import { SignupState } from 'types';

const initialState: SignupState = {
  wholePolicy: false,
  policyAge: false,
  policyService: false,
  policyCollectionAndUsage: false,
  policyOfferings: false,
  policyMarketing: false,
};

const signup = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    setWholePolicy: (state, action) => {
      state.wholePolicy = action.payload;
    },
    setPolicyAge: (state, action) => {
      state.policyAge = action.payload;
    },
    setPolicyService: (state, action) => {
      state.policyService = action.payload;
    },
    setPolicyCollectionAndUsage: (state, action) => {
      state.policyCollectionAndUsage = action.payload;
    },
    setPolicyOfferings: (state, action) => {
      state.policyOfferings = action.payload;
    },
    setPolicyMarketing: (state, action) => {
      state.policyMarketing = action.payload;
    },
    changeWholePolicy: (state, action) => {
      state.wholePolicy = action.payload;
      state.policyAge = action.payload;
      state.policyService = action.payload;
      state.policyCollectionAndUsage = action.payload;
      state.policyOfferings = action.payload;
      state.policyMarketing = action.payload;
    },
  },
});

export const {
  setWholePolicy,
  setPolicyAge,
  setPolicyService,
  setPolicyCollectionAndUsage,
  setPolicyOfferings,
  setPolicyMarketing,
  changeWholePolicy,
} = signup.actions;

export default signup.reducer;
