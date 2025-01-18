import { createSlice } from "@reduxjs/toolkit";

const skillSlice = createSlice({
  name: "skill",
  initialState: {
    skillId: 0,
  },
  reducers: {
    optionSkill: (state, { payload }) => {
      state.skillId = payload;
    },
  },
});

export const { optionSkill } = skillSlice.actions;
export default skillSlice.reducer;
