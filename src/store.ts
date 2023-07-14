import { configureStore,
         ThunkAction,
         Action                } from '@reduxjs/toolkit';
import { TypedUseSelectorHook,
         useDispatch,
         useSelector           } from 'react-redux';

import { createSlice,
         createAsyncThunk, 
         PayloadAction     } from '@reduxjs/toolkit';

import { Notation, WarriorsData } from 'src/types';
import { Api } from 'src/services/api';

const SLICE_NAME = 'main';

export interface MKStore {
  showSecondPlayer: boolean;
  playerOneNotation: Notation;
  playerTwoNotation: Notation;
  warriorsData: WarriorsData;
}

const initialState: MKStore = {
  showSecondPlayer: true,
  playerOneNotation: Notation.Classic,
  playerTwoNotation: Notation.Playstation,
  warriorsData: []
}

// #region getDataAsync
type GetDataArgs = void;
type GetDataResolve = WarriorsData;
export type GetDataReject = void;
export const getDataAsync = createAsyncThunk<
  GetDataResolve,
  GetDataArgs,
  {
    state: RootState,
    rejectValue: GetDataReject,
  }
>(
  `${SLICE_NAME}/getDataAsync`,
  async (_, thunkAPI) => {
    try
    {
      return await Api.getDb();
    }
    catch (error)
    {
      return thunkAPI.rejectWithValue();
    }
  }
);
// #endregion

type BooleanChangedAction = PayloadAction<boolean>;
type NotationChangedAction = PayloadAction<Notation>;

export const mainSlice = createSlice({
  name: SLICE_NAME,
  initialState: { ...initialState },
  reducers: {
    visibilitySecondPlayerChanged: (state, action: BooleanChangedAction) => {
      state.showSecondPlayer = action.payload;
    },
    playerOneNotationChanged: (state, action: NotationChangedAction) => {
      state.playerOneNotation = action.payload;
    },
    playerTwoNotationChanged: (state, action: NotationChangedAction) => {
      state.playerTwoNotation = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDataAsync.fulfilled, (state, action) => {
        state.warriorsData = action.payload
      })
  },
})

export const selectShowSecondPlayer = (state: RootState) => state.showSecondPlayer
export const selectPlayerOneNotation = (state: RootState) => state.playerOneNotation;
export const selectPlayerTwoNotation = (state: RootState) => state.playerTwoNotation;
export const selectWarriorsData = (state: RootState) => state.warriorsData;

export const actions = mainSlice.actions;

export const store = configureStore({
  reducer: mainSlice.reducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
