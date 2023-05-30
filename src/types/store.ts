import { candidate } from "./candidate";

export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
  candidate: candidate[];
};

export enum CandidateActions {
  "GET" = "GET",
  "ADD" = "ADD",
}

export interface AddCandidate {
  action: CandidateActions.ADD;
  payload: candidate;
}
export interface GetCandidate {
  action: CandidateActions.GET;
  payload: candidate[];
}
export type Actions =  GetCandidate | AddCandidate;
