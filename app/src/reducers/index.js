 import { combineReducers } from 'redux'
import changebackgroundcolor from './changebackground'
import counter from './counter'
import selectedSubreddit from './redditreducers'
import posts from './redditreducers'
import postsBySubreddit from './redditreducers'


const reducers = combineReducers({
  changebackgroundcolor,
  counter,
  selectedSubreddit,
  posts,
  postsBySubreddit
})

export default reducers 