const initialState = {
	changebackground: 'false',
	error: 'false'
}

const changebackgroundcolor = (state, action) => {
  state = state || initialState;
  switch(action.type) {
  	case "CHANGEBACKGROUND":
  	return Object.assign ({}, state, {changebackground: true, payload: false});
  		 default:
  			return state
  }
}

 export default changebackgroundcolor;