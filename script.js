const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers

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

const initialState = {
	numOfCakes: 10,
};

const initialState2 = {
	numOfIceCream: 20,
};

const reducer = (state = initialState, action) => {
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

const reducer2 = (state = initialState2, action) => {
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
	cake : reducer,
	iceCream : reducer2
})

const store = createStore(rootReducers);
console.log("Initial state: ", store.getState());
const unsubscribe = store.subscribe(() =>
	console.log("Updated store", store.getState())
);
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
unsubscribe();
