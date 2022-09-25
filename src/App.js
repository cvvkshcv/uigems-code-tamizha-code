import { collection, deleteDoc, doc, getDocs, limit, onSnapshot, orderBy, query, updateDoc, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import './App.css';
import { db } from './firebase';
import CreateUser from './CreateUser';
export const userCollectionRef = collection(db, 'users');

function App() {

  const [users, setUsers] = useState([]);
  // const getUsers = async () => {
  //   const data = await getDocs(userCollectionRef);
  //   console.log(data);
  //   setUsers(data.docs.map(doc => ({
  //     ...doc.data(),
  //     id: doc.id
  //   })));
  // };



  useEffect(() => {
    // getUsers();
    // const queryResponse = query(userCollectionRef, where('age', '>', 100));
    const snapShot = onSnapshot(userCollectionRef, (snapShotParam) => {
          setUsers(snapShotParam.docs.map(doc => ({
          ...doc.data(),
          id: doc.id
        })));
    });

    return () => snapShot();
  }, []);

  const updateAge = async (userId, updatedAge) => {
    const userDoc = doc(db, 'users', userId);
    const newAge = { age: updatedAge };
    await updateDoc(userDoc, newAge); 
  };

  const deleteUser = async (userId) => {
    const userDoc = doc(db, 'users', userId);
    await deleteDoc(userDoc);
  };
  

  return (
    <div className="container">

      <CreateUser />

      <ul>
      {
        users.map(user => {
          return (<li className='my-3' key={user.id}>
            Name is { user.name } and age is  { user.age }

            <button onClick={() => updateAge(user.id, user.age + 1)} className="btn btn-xs btn-primary ms-2"><i className="bi bi-cloud-plus"></i></button>
            <button onClick={() => updateAge(user.id, user.age - 1)} className="btn btn-xs btn-success ms-2"><i className="bi bi-cloud-minus"></i></button>
            <button onClick={() => deleteUser(user.id)} className="btn btn-xs btn-danger ms-2"><i className="bi bi-trash"></i></button>
          </li>)
        })
      }
      </ul>
    </div>
  );
}

export default App;
