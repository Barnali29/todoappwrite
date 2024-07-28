import React, { useEffect, useState } from 'react';
import Service from '../Appwrite/Service';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Input, Button, Todos } from '../Component';
import Auth from '../Appwrite/Auth';

function Home() {
    const authStatus = useSelector((state) => state.auth.status);
    const [items, setItems] = useState([]);
    const [input, setInput] = useState('');

   /* useEffect(() => {
        async function fetchDocuments() {
            try {
                const result = await Service.getAllDocuments();
                setItems(result.documents);
            } catch (error) {
                console.error('Error fetching documents:', error);
            }
        }

        fetchDocuments();
    }, []);*/

    async function add() {
        console.log(input);
        try {
            const userId = await Auth.getUserId();
            const doc = await Service.addDocumentToUserCollection(userId, { task: input });
            if (doc) {
                console.log("Successfully added data");
                //setItems((prevItems) => [...prevItems, doc]); 
            }
        } catch (error) {
            console.error('Error adding document:', error);
        }
        setInput('');
    }

    if (!authStatus) return <div>Please login/signup to add task</div>;

    return (
        <>
            <div>
                <h2 className='font-serif font-extrabold'>Task Manager</h2>
                <input
                    type='text'
                    placeholder='Enter task'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className='border-2 border-black rounded-lg'
                />
                <button
                    onClick={add}
                    className='rounded-lg bg-purple-950 p-2 m-2 text-cyan-50'
                >
                    Add
                </button>
            </div>
            {/*items.length > 0 ? items.map((item) => <Todos key={item.$id} todo={item} />) : null*/}
            <Outlet />
        </>
    );
}

export default Home;