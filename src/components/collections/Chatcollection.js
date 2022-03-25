import { db } from "../../firebase";
import { collection,getDocs,getDoc,addDoc,updateDoc,deleteDoc,doc,orderBy, queryEqual, limitToLast,query,where, refEqual } from "firebase/firestore";




const Chatcollectionref=collection(db,"Chats");
class Chatdataservice {
addChat=(newChat)=>{
    return addDoc(Chatcollectionref,newChat)
};

updateChat = (id,updatedChat)=>{
    const Chatdoc=doc(db,"Chats",id)
    return updateDoc(Chatdoc,updatedChat)
};

deleteChat=(id)=>{
    const Chatdoc=doc(db,"Chats",id)
    return deleteDoc(Chatdoc)
}
getallChats=()=>{
    return getDocs(Chatcollectionref)
}
getChat=(id)=>{
    const Chatdoc=doc(db,"Chats",id)
   
    return getDoc(Chatdoc);
}




}
export default new Chatdataservice();