import {useRef} from "react";
import {collection, addDoc } from "firebase/firestore";
import {db} from "../../firebase.js"

export const Form = () =>{
    
    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);
    const ageRef = useRef(null);
    
    const userCollectionRef = collection(db, "users");
    
    const createUser = async (e) => {
        e.preventDefault();

        await addDoc(userCollectionRef, {
            first_name: firstNameRef.current.value,
            last_name: lastNameRef.current.value,
            age: ageRef.current.value,
        })
        window.location.reload();


    }
    
    return (
        <>
            <form onSubmit={(e) =>{createUser(e)}}>
            <input type={'text'} placeholder={'First Name'} ref={firstNameRef}/><br/>
            <input type={'text'} placeholder={'Last Name'} ref={lastNameRef}/><br/>
            <input type={'number'} placeholder={'age'} ref={ageRef}/><br/>
                <input type={'submit'} value={'Submit'}/>
            </form>
        </>
    )
}
