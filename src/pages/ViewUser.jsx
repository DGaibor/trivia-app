import {useNavigate, useParams} from "react-router-dom";
import {doc , getDoc, updateDoc} from "firebase/firestore"
import {db} from "../firebase.js"
import {useEffect, useRef, useState} from "react";

export const ViewUser = () => {
    const { id } = useParams();
    const userRef = doc(db, "users",id);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    
    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);
    const ageRef = useRef(null);
    
    
    const getUser = async () => {
        const doc = await getDoc(userRef);
        const userData = doc.data()
        setUser(userData);
    }
    
    const updateUser = async (e) => {
        e.preventDefault();
        await updateDoc(userRef, {
            first_name: firstNameRef.current.value,
            last_name: lastNameRef.current.value,
            age: ageRef.current.value,
        })
        
        alert("User updated successfully.")
        navigate('/')

    }
    
    useEffect(() => {
        getUser();
    },[])
    
    
    
    
    return (
        <>
        {user==null && <p>Loading</p>}
            { user && 
                <form onSubmit={(e) => {updateUser(e)}}>
                <input type={'text'} placeholder={'First Name'} defaultValue={user.first_name} ref={firstNameRef}/><br/>
                <input type={'text'} placeholder={'Last Name'} defaultValue={user.last_name} ref={lastNameRef}/><br/>
                <input type={'number'} placeholder={'age'} defaultValue={user.age}  ref={ageRef}/><br/>
                <input type={'submit'} value={'Update'}/>
            </form>
            }
        </>
    )
}
