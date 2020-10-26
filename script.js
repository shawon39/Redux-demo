const redux = require("redux");
const reduxLogger = require("redux-logger");

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

const BUY_CAKE = "BUY_CKE";
const BUY_ICE_CREAM = "BUY_ICE_CREAM";

function buyCake() {
	return {
		type: BUY_CAKE,
		info: "First redux action",
	};
}

function buyIceCream() {
	return {
		type: BUY_ICE_CREAM,
		info: "Second redux action",
	};
}

const initialStateCake = {
	numOfCakes: 10,
};

const initialStateIceCream = {
	numOfIceCream: 20,
};

const cakeReducer = (state = initialStateCake, action) => {
	switch (action.type) {
		case BUY_CAKE:
			return {
				...state,
				numOfCakes: state.numOfCakes - 1,
			};

		default: {
			return state;
		}
	}
};

const iceCreamReducer = (state = initialStateIceCream, action) => {
	switch (action.type) {
		case BUY_ICE_CREAM:
			return {
				...state,
				numOfIceCream: state.numOfIceCream - 1,
			};

		default: {
			return state;
		}
	}
};

const rootReducers = combineReducers({
	cake: cakeReducer,
	iceCream: iceCreamReducer,
});

const store = createStore(rootReducers, applyMiddleware(logger));
console.log("Initial state: ", store.getState());
const unsubscribe = store.subscribe(() => {});
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
unsubscribe();
  