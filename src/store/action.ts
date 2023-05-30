import { candidate } from "../types/candidate"
import { Actions, CandidateActions } from "../types/store"
import firebase from "../utils/firebase"

export const Saveprofile = async (candidate: candidate): Promise <Actions> => {
    await firebase.SaveprofilenDB(candidate)
    return {
        action: CandidateActions.ADD,
        payload: candidate,
    }
}
export const getprofile = async (): Promise <Actions> => {
    const candidates = await firebase.GetCandidateFromDB()
    return {
        action: CandidateActions.GET,
        payload: candidates,
    }
}