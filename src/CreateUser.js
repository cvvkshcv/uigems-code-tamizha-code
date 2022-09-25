import { addDoc } from 'firebase/firestore';
import React, { useState } from 'react'
import { userCollectionRef } from './App';

function CreateUser({ refetchUsers }) {

  const [name, setName] = useState('');
  const [age, setAge] = useState(0);

  const handleChange = (e) => {
    if (e.target.name === 'name') {
      setName(e.target.value);
    } else {
      setAge(Number(e.target.value));
    }
  };

  const handleSubmit = async () => {
    await addDoc(userCollectionRef, { name, age });
    setName('');
    setAge(0);
    // refetchUsers();
  }

  return (
    <div>
      <div className="mb-3">
        <label htmlFor="name_" className="form-label">Name</label>
        <input name="name" type="text" className="form-control" id="name_" aria-describedby="emailHelp" onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">Age</label>
        <input name="age" type="number" className="form-control" id="age" onChange={handleChange} />
      </div>
      <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default CreateUser