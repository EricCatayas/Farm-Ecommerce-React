import {  createSelector } from "@reduxjs/toolkit";
import { UserState } from "./user.reducer";
import { User } from "../../models/User";
import { RootState } from "../root.types";

const selectUserReducer = (state: RootState): UserState => state.user;

// Example: const currentUser = useSelector(selectCurrentUser);
export const selectCurrentUser = createSelector(
    [selectUserReducer],
    (state): User | null => state.currentUser
);
