import { PlayerAction } from "@turbotype/game";

export type ClientToServerMessage = KeyInputMessage;
export type KeyInputMessage = string;

export type ServerToClientMessage =
  | ConnectMessage
  | ActionMessage
  | FinishedMessage;
export enum ServerToClientMessageType {
  CONNECT = 0,
  ACTION = 1,
  FINISHED = 2,
}

/**
 * `[type, playerID, startTime, playerCount, wordList]`
 */
export type ConnectMessage = [
  ServerToClientMessageType.CONNECT,
  number,
  number,
  number,
  string[]
];

/**
 * `[type, playerID, actionType]`
 */
export type ActionMessage = [
  ServerToClientMessageType.ACTION,
  number,
  PlayerAction
];

/**
 * `[type, playerID, startTime, playerCount, wordList]`
 */
export type FinishedMessage = [ServerToClientMessageType.FINISHED, string];
