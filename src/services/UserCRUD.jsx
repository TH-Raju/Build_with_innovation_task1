import { db } from "../firebase/firebase.config";
import {
    collection,
    getDocs,
    getDoc,
    addDoc,
    updateDoc,
    deleteDoc,
    doc
} from "firebase/firestore";



import React from 'react';
export const userCollection = collection(db, "users");

export const addUser = (newUser) => {
    return addDoc(userCollection, newUser);
}
export const updateUser = (id, updatedUser) => {
    const userDoc = doc(db, "users", id);
    return updateDoc(userDoc, updatedUser)
}

export const deleteUser = (id) => {
    const userDoc = doc(db, "users", id);
    return deleteDoc(userDoc);
}


export const getAllUser = () => {
    return getDocs(userCollection);
}

export const getUser = (id) => {
    const userDoc = doc(db, "users", id);
    return getDoc(userDoc);
}
const UserCRUD = () => {

    return (
        <div>

        </div>
    );
};

export default UserCRUD;