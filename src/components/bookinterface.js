import React, { useEffect, useState } from 'react';
import "../style/bookinterface.css";
import {db} from "./firebaseconfig"
import { collection, getDocs } from 'firebase/firestore';
const BookInterface = () => {
    const [book,setbook] = useState([])

    const [loading,setloading] = useState(true)
    const fetchBookData = async() =>{
        const bookRef = collection(db,'Books')
        const snapShot = await getDocs(bookRef)
        const fetchedData = snapShot.docs.map((doc)=>({
            id:doc.id,
            ...doc.data()
        }))
        setbook(fetchedData)
        setloading(false)
    }
    useEffect(()=>{
        fetchBookData()
    },[])
    return ( 
        <div className="book-interface-container">
            {
               loading?(
                <div className="loading">Loading</div>
               ):(
                book.map((book, index) => (
                    <div className="book-item" id={book.name} key={index}>
                        <h3>{book.name}</h3>
                        <h4>{book.author}</h4>
                    </div>
                ))
               )
            }
        </div>
     );
}
 
export default BookInterface;
