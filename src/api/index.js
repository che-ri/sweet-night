import { db } from "../firebase";
import { collection, getDocs, addDoc } from "firebase/firestore/lite";

//getList 함수를 호출할 때, collection_name을 입력해주면 해당 컬렉션에 맞는 데이터를 불러옵니다.
async function getList(collection_name) {
  const querySnapshot = await getDocs(collection(db, collection_name));
  if (querySnapshot) {
    const _data = [];
    querySnapshot.forEach((doc) => _data.push({ ...doc.data(), id: doc.id }));
    return _data;
  } else alert("데이터를 불러올 수 없어요! 새로고침해주세요 :-) ");
}

async function addPost(collection_name, data = { name: "", address: "" }) {
  await addDoc(collection(db, collection_name), {
    data,
  });
}

export { getList, addPost };
