import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

export interface User {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: number;
    coordinates: {
      latitude: string;
      longitude: string;
    };
    timezone: {
      offset: string;
      description: string;
    };
  };
  email: string;
  login: {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
  };
  dob: {
    date: string;
    age: number;
  };
  registered: {
    date: string;
    age: number;
  };
  phone: string;
  cell: string;
  id: {
    name: string;
    value: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
}

export interface UserListState {
  loading: boolean;
  message: string;
  users: User[];
  page: number;
  hasMore: boolean;
}

const initialState: UserListState = {
  loading: false,
  message: '',
  users: [],
  page: 1,
  hasMore: true,
};

export const getAllUsers = createAsyncThunk(
  'getAllUsers',
  async (page: number, {fulfillWithValue, rejectWithValue}) => {
    try {
      const response = await axios.get(
        `${'https://randomuser.me/api/?results=10&'}page=${page}`,
      );
      if (response.data) {
        return fulfillWithValue(response.data);
      } else {
        return rejectWithValue('Something went wrong');
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const userListSlice = createSlice({
  initialState,
  name: 'userList',
  reducers: {
    resetMessage: (state, actions) => {
      state.message = actions.payload;
    },
    refreshUsers: state => {
      state.page = 1;
      state.users = [];
      state.hasMore = true;
    },
  },
  extraReducers: builder => {
    builder.addCase(getAllUsers.pending, state => {
      state.loading = true;
    });
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload.results.length > 0) {
        state.users =
          state.page === 1
            ? action.payload.results
            : [...state.users, ...action.payload.results];
        state.page += 1;
      } else {
        state.hasMore = false;
      }
    });
    builder.addCase(getAllUsers.rejected, state => {
      state.loading = false;
    });
  },
});

export const {resetMessage, refreshUsers} = userListSlice.actions;

export default userListSlice.reducer;
