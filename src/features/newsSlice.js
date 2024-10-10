
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchNews } from '../services/newsAPI';

export const getNews = createAsyncThunk('news/getNews', async () => {
  const news = await fetchNews();
  return news;
});

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    articles: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getNews.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getNews.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.articles = action.payload; 
      })
      .addCase(getNews.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Unknown error occurred';
      });
  },
});


export const selectAllNews = (state) => state.news.articles;
export const selectNewsStatus = (state) => state.news.status;
export const selectNewsError = (state) => state.news.error;

export default newsSlice.reducer;
