import { db } from "../../firebase";
import { collection,getDocs,getDoc,addDoc,updateDoc,deleteDoc,doc,orderBy, queryEqual, limitToLast,query,where, refEqual } from "firebase/firestore";




const Usercollectionref=collection(db,"Users");
class Userdataservice {
addUser=(newUser)=>{
    return addDoc(Usercollectionref,newUser)
};

updateUser = (id,updatedUser)=>{
    const Userdoc=doc(db,"Users",id)
    return updateDoc(Userdoc,updatedUser)
};

deleteUser=(id)=>{
    const Userdoc=doc(db,"Users",id)
    return deleteDoc(Userdoc)
}
getallUser=()=>{
    return getDocs(Usercollectionref)
}
getUser=(id)=>{
    const Userdoc=doc(db,"Users",id)
   
    return getDoc(Userdoc)
}
getSuperadmin=()=>{
    const q = query(Usercollectionref, where("Role", "==", "Superadmin"));
return getDocs(q)
}
getSubscribers=()=>{
    const q = query(Usercollectionref, where("Role", "==", "Subscriber"));
return getDocs(q)
}



}
export default new Userdataservice();