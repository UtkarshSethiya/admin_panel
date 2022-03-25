import { db } from "../../firebase";
import { collection, getDocs,getDoc,addDoc,updateDoc,deleteDoc,  doc,orderBy, queryEqual, limitToLast,query,where,serverTimestamp,deleteField, } from "firebase/firestore";




const Generalchatref=collection(db,"Messages");
class Generalchatservice{
addChat=(Chatcollection)=>{
    return addDoc(Generalchatref,Chatcollection)
};

/*updateUser = (id,updatedUser)=>{
    const Userdoc=doc(db,"Users",id)
    return updateDoc(Userdoc,updatedUser)
};*/

deleteChat=(id)=>{
    const Userdoc=doc(db,"Messages",id)
    return deleteDoc(Userdoc)
}
getallChat=()=>{
    const q = query(Generalchatref, orderBy("createdAt","asc"));
    return getDocs(q)
}
/*getUser=(id)=>{
    const Userdoc=doc(db,"Users",id)
   
    return getDoc(Userdoc)
}
getSuperadmin=()=>{
    const q = query(Usercollectionref, where("Role", "==", "Superadmin"));
return getDocs(q)
}
getOperators=()=>{
    const q = query(Usercollectionref, where("Role", "==", "Operator"));
return getDocs(q)
}
getChatadmins=()=>{
    const q = query(Usercollectionref, where("Role", "==", "Chatadmin"));
return getDocs(q)
}
*/

}
export default new Generalchatservice();