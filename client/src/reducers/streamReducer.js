import { FETCH_STREAM, FETCH_STREAMS, EDIT_STREAM, CREATE_STREAM, DELETE_STREAM } from '../actions/types';

export default (state = {}, action) => {
	switch (action.type) {
		case FETCH_STREAM:
			return { ...state, [action.payload.id]: action.payload };
		case FETCH_STREAMS:
			const streamsObj = action.payload.reduce((acc, stream) => {
				acc[stream.id] = stream;
				return acc;
			}, {});
			return { ...state, ...streamsObj };
		case EDIT_STREAM:
			return { ...state, [action.payload.id]: action.payload };
		case CREATE_STREAM:
			return { ...state, [action.payload.id]: action.payload };
		case DELETE_STREAM:
			const newState = { ...state };
			delete newState[action.payload];
			return newState;
		default:
			return state;
	}
};
