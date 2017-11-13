import { createAction } from 'redux-actions';

import api from 'api/index';

function* createGuidGenerator() {
  let i = 1;
  while (i) {
    yield i++;
  }
}

const guidGenerator = createGuidGenerator();

export const API_REQUEST_STARTED = 'API_REQUEST_STARTED';
export const apiRequestStarted = createAction(API_REQUEST_STARTED);
export const API_REQUEST_FINISHED = 'API_REQUEST_FINISHED';
export const apiRequestFinished = createAction(API_REQUEST_FINISHED);

export const API_DATA_SERVERS_LOADED = 'API_DATA_SERVERS_LOADED';
export const apiDataServersLoaded = createAction(API_DATA_SERVERS_LOADED);

export const API_REQUEST_BOOK_DATA = 'API_REQUEST_BOOK_DATA';
export const apiRequestBookData = createAction(API_REQUEST_BOOK_DATA);

export const API_GRAB_REDPACKET = 'API_GRAB_REDPACKET';
export const apiGrabRedPacket = createAction(API_GRAB_REDPACKET);
// export function apiGetServers(callback) {
//   return function dispatchApiGetServers(dispatch) {
//     const requestId = guidGenerator.next().value;
//     dispatch(apiRequestStarted({requestId}));
//     return api.getStats()
//       .then((data) => {
//         dispatch(apiDataServersLoaded(data));
//         dispatch(apiRequestFinished({requestId}));
//         if (callback) {
//           callback(); // get rid of callback here?
//         }
//       })
//       .catch((error) => {
//         dispatch(apiRequestFinished({requestId, error}));
//         dispatch(showModal({
//           key: ErrorWindow.NAME,
//           props: {title: error.title, message: error.message, explanation: `URL: ${error.url} ${error.statusCode}`}
//         }));
//       });
//   };
// }

// export function apiAddServer(data, callback) {
//   return function dispatchApiAddServer(dispatch) {
//     const requestId = guidGenerator.next().value;
//     dispatch(apiRequestStarted({requestId}));
//     return api.addServer(data)
//       .then(() => {
//         dispatch(apiGetServers());
//         dispatch(apiRequestFinished({requestId}));
//         if (callback) {
//           callback(); // get rid of callback here?
//         }
//       })
//       .catch((error) => {
//         dispatch(apiRequestFinished({requestId, error}));
//         dispatch(showModal({
//           key: ErrorWindow.NAME,
//           props: {title: error.title, message: error.message, explanation: `URL: ${error.url} ${error.statusCode}`}
//         }));
//       });
//   };
// }

export function apiGetBook(id) {
  return function dispatchApiGetBook(dispatch) {
    const requestId = guidGenerator.next().value;
    dispatch(apiRequestStarted({ requestId }));
    return api.getBook(id)
      .then((data) => {
        dispatch(apiRequestBookData(data));
        dispatch(apiRequestFinished({ requestId }));
      })
      .catch((error) => {
        // dispatch(apiRequestFinished({requestId, error}));
        // dispatch(showModal({
        //   key: ErrorWindow.NAME,
        //   props: {title: error.title, message: error.message, explanation: `URL: ${error.url} ${error.statusCode}`}
        // }));
      });
  };
}

export function apiGrabRedPacketOutcome(reqObj) {
  return function dispatchApiGrabRedPacket(dispatch) {
    const requestId = guidGenerator.next().value;
    dispatch(apiRequestStarted({ requestId }));
    return api.grabRedPacket(reqObj)
      .then((data) => {
        console.log(data);
        dispatch(apiGrabRedPacket(data));
        dispatch(apiRequestFinished({ requestId }));
      })
      .catch((error) => {
        
      });
  }
}