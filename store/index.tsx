import { configureStore, createStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import createSagaMiddleware from "redux-saga";
import reducer, { rootSaga } from "./modules";
// import { persistStore, persistReducer } from 'redux-persist'
// import { persistConfig } from "./modules";

// const persistedReducer = persistReducer(persistConfig, reducer);



const makeStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = configureStore({
        reducer,
        devTools: process.env.NEXTNODE_ENV !== "production",
        middleware: [sagaMiddleware],
    });

    sagaMiddleware.run(rootSaga);
    return store;
};

// export const persistor = persistStore(makeStore());

export const wrapper = createWrapper(makeStore, {
    debug: process.env.NODE_ENV !== "production",
});
