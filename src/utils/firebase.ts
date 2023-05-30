import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebaseConfig from "../firebaseConfig";
import { candidate } from "../types/candidate";
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";
import { Actions } from "../types/store";

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

const SaveprofilenDB = async (candidate:candidate) =>{
    try {
        await addDoc(collection(db, "candidates"), candidate );
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}; 

const GetCandidateFromDB = async (): Promise<candidate[]> =>{
     const resp: candidate[] = [];
const querySnapshot = await getDocs(collection(db, "candidates"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
  resp.push({
    ...doc.data(),

  }as candidate)
});
return resp; 
}

export default{ SaveprofilenDB, GetCandidateFromDB}