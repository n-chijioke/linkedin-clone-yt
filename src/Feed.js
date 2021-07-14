import React, { useEffect, useState } from 'react';
import EventNoteIcon from '@material-ui/icons/EventNote';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import CreateIcon  from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import CalenderViewDayIcon from '@material-ui/icons/CalendarViewDay';
import DeleteIcon from '@material-ui/icons/Delete'
import "./Feed.css"
import InputOption from './InputOption';
import Post from './Post';
import { db } from './firebase';
import firebase from 'firebase';

function Feed() {
    const[input, setInput] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").orderBy('timestamp', 'desc').onSnapshot((snapshot) =>
            setPosts(
                snapshot.docs.map(doc =>({
                    id: doc.id,
                    data: doc.data(),
                }))
            )
         );
    }, []);

    const sendPost = e => {
        e.preventDefault();

        db.collection('posts').add({
            name: 'N.Chijioke',
            description: 'This is a test',
            message: input,
            photoUrl: '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
     };

    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input value={input} onChange={e => setInput(e.target.value)} type="text" />
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption  Icon={ImageIcon} title="Photo" 
                    color="#70B5F9" />
                    <InputOption  Icon={SubscriptionsIcon} title="Video" 
                    color="#E7A33E" />
                    <InputOption  Icon={EventNoteIcon} title="Event" 
                    color="#C0CBCD" />
                    <InputOption  
                    Icon={CalenderViewDayIcon} 
                    title="Write article" 
                    color="#7FC15E" />
                    <InputOption  Icon={DeleteIcon} title="Delete" 
                    color="#f0f0b2" />
                </div>
            </div>

            {/** Posts */}
            {posts.map(({ id, data: { name, description, message, 
            photoUrl } }) => (
                <Post
                key={id}
                name={name}
                description={description}
                message={message}
                photoUrl={photoUrl}
                />
            )) }
        </div>
    );
}

export default Feed;
