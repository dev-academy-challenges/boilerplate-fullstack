// import request from 'superagent'

// export const SHOW_ERROR = 'SHOW_ERROR'
// export const RECEIVE_BETS = 'RECEIVE_BETS'
// export const REQUEST_POSTS = 'REQUEST_POSTS'

// export const requestPosts = () => {
//   return {
//     type: REQUEST_POSTS
//   }
// }

// // Receive bets

// export const receiveBets = (bets) => {
//   return {
//     type: RECEIVE_BETS,
//     bets
//   }
// }

// export const showError = (errorMessage) => {
//   return {
//     type: SHOW_ERROR,
//     errorMessage: errorMessage
//   }
// }

// export function fetchPosts (subreddit) {
//   return (dispatch) => {
//     dispatch(requestPosts())
//     return request
//       .get(`/api/v1/reddit/subreddit/${subreddit}`)
//       .then(res => {
//         dispatch(receivePosts(res.body))
//       })
//       .catch(err => {
//         dispatch(showError(err.message))
//       })
//   }
// }
