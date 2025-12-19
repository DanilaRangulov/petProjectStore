import { configureStore } from '@reduxjs/toolkit';
import {rtkApiService} from "../../shared/api";

export const store = configureStore({
    reducer: {
        api: rtkApiService.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(rtkApiService.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;