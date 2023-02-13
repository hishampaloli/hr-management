export enum SocketActionsTypes {
  CONNECT_SOCKET = "CONNECT_SOCKET",

  GET_MY_ROOMS_REQUEST = "GET_MY_ROOMS_REQUEST",
  GET_MY_ROOMS_SUCCESS = "GET_MY_ROOMS_SUCCESS",
  GET_MY_ROOMS_FAIL = "GET_MY_ROOMS_FAIL",

  GET_SINGLE_ROOM_REQUEST = "GET_SINGLE_ROOM_REQUEST",
  GET_SINGLE_ROOM_SUCCESS = "GET_SINGLE_ROOM_SUCCESS",
  GET_SINGLE_ROOM_FAIL = "GET_SINGLE_ROOM_FAIL",

  GET_CHATS_UNDER_ROOM_REQUEST = "GET_CHATS_UNDER_ROOM_REQUEST",
  GET_CHATS_UNDER_ROOM_SUCCESS = "GET_CHATS_UNDER_ROOM_SUCCESS",
  GET_CHATS_UNDER_ROOM_FAIL = "GET_CHATS_UNDER_ROOM_FAIL",

  PUSH_MESSAGE_TO_ROOM = "PUSH_MESSAGE_TO_ROOM",
  ADD_NEW_MESSAGE_TO_ROOM = "ADD_NEW_MESSAGE_TO_ROOM",

  ADD_LIVE_USERS = "ADD_LIVE_USERS",
  REMOVE_OFFLINE_USERS = "REMOVE_OFFLINE_USERS",

  VIDEO_CALL_INCOMING = "VIDEO_CALL_INCOMING",
  VIDEO_CALL_REQUESTING = "VIDEO_CALL_REQUESTING ",
  CANCEL_VIDEO_CALL = "CANCEL_VIDEO_CAL",
  JOIN_VIDEO_CALL = "JOIN_VIDEO_CALL",

  DELETE_MESSAGE = "DELETE_MESSAGE",
}
