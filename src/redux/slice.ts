import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Skill = {
  skillId: number;
};

const initialState: Skill = {
  skillId: 0,
};
const skillSlice = createSlice({
  name: "skill",
  initialState,
  reducers: {
    optionSkill: (state, { payload }: PayloadAction<number>) => {
      state.skillId = payload;
    },
  },
});

export const { optionSkill } = skillSlice.actions;
export default skillSlice.reducer;
