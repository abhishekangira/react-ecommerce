import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore } from "redux-persist";

// import logger from "redux-logger";

import rootReducer from "./root.reducer";

// const middleware = [logger];

// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));
const store = createStore(rootReducer, composeWithDevTools());
const persistor = persistStore(store);

export { store, persistor };
