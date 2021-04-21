import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore } from "redux-persist";

import logger from "redux-logger";

import rootReducer from "./root.reducer";

const middleware = [logger];

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));
const persistor = persistStore(store);

export { store, persistor };
