import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
  count: 0,
  isLoading: false
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    incrementByAmount(state, action) {
      state.count += action.payload;
    },
    setCount(state, action){
      state.count = action.payload;
    },
    setLoading(state, action) {
      state.isLoading = action.payload;
    }
  },
});

export const { increment, decrement, incrementByAmount, setCount, setLoading } = counterSlice.actions;

// Thunk action creator
export const fetchCount = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));

    const response = await axios.get("/api/count");
    const data = response.data;

    dispatch(setCount(data));
  } catch (error) {
    // Handle errors if necessary
    console.error("Error fetching product categories:", error);
  } finally {
    dispatch(setLoading(false));
  }
};

// export your actons so they can be called by other components
export default counterSlice.reducer;

