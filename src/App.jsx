import {useEffect, useState} from 'react'
import './App.css'
import { db } from './firebase.js'
import { collection, getDocs } from 'firebase/firestore'
import {Form} from "./component/form/Form.jsx";

function App() {
    const [users, setUsers] = useState([]);
    const userCollectionRef = collection(db, 'users');
    
    const getUsers = async () => {
        const data = await getDocs(userCollectionRef);
        const dataUsers = getData(data);
        setUsers(dataUsers);
    }
    
    const getData = (data) =>{
       return data.docs.map((doc)=>{
            return {...doc.data(), id: doc.id};
            
        })
    }
    
    useEffect(() => {
        getUsers();
    },[])
    
  return (
    <>
        <Form/>
        <table border={2}>
            <thead>
            <tr>
                <th>ID</th>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Age</th>
            </tr>

            </thead>
            <tbody>
            {users.map((user) => (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.first_name}</td>
                    <td>{user.last_name}</td>
                    <td>{user.age}</td>

                </tr>
            ))}
            </tbody>
        </table>
    </>
  )
}

export default App
