import {  createSelector } from "@reduxjs/toolkit";
import { UserState } from "./user.reducer";
import { User } from "./user.types";

const selectUserReducer = (state): UserState => state.user;

// Example: const currentUser = useSelector(selectCurrentUser);
export const selectCurrentUser = createSelector(
    [selectUserReducer],
    (state): User | null => state.currentUser
);
