import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { deleteUser, getAllUser } from '../../services/UserCRUD';
import { doc, updateDoc, getFirestore } from "firebase/firestore";

const Users = () => {
    const [setUserId] = useState("");
    const [users, setUsers] = useState([]);
    const db = getFirestore();
    useEffect(() => {
        getUsr();
    }, [])

    const editUser = (id, email) => {
        setUserId(id);
        console.log(id);
        const docRef = doc(db, "users", id);
        let updateValue = window.prompt('Update Email', email);
        // console.log(updateValue)
        const data = {
            email: updateValue
        };
        updateDoc(docRef, data)
            .then(docRef => {
                window.alert("Document Updated! Click on Refresh List. Button");
            })
            .catch(error => {
                console.log(error);
            })
        // console.log(users);

    }


    const getUsr = async () => {
        const data = await getAllUser();
        // console.log(data.docs);
        setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }


    const deleteHandler = async (id) => {
        await deleteUser(id);
        window.alert('Deleted Successfully')
        getUsr();
    }
    return (

        <div>
            <div className='my-4'>
                <Button variant='dark' onClick={getUsr}>
                    Refresh List
                </Button>
            </div>
            {
                users.map(usr => {
                    return (
                        <div key={usr.id} style={{ display: 'flex', gap: '10px', justifyContent: 'space-evenly' }}>
                            <h2>{usr.email}</h2>
                            <div>
                                <Button
                                    variant='primary'
                                    className='edit'
                                    onClick={() => editUser(usr.id, usr.email)}
                                >Edit</Button>
                                <Button
                                    style={{ marginLeft: '15px' }}
                                    variant='warning'
                                    onClick={(e) => deleteHandler(usr.id)}
                                >Delete</Button>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    );
};

export default Users;