import React, { useState } from 'react'

function App() {
    const [image, setImage] = useState("https://randomfox.ca")
    const [likes, setLikes] = useState(0)

    function handleNewFoxClick(){
        fetch("https://randomfox.ca/floof")
        .then((response) => response.json())
        .then(({image}) => {
            setImage(image)
        })
    }
    function handleLikeClick(){
        setLikes(likes => likes + 1)
    }
    return (
        <div>
            <h1>Fox Finder</h1>
            <div className='buttons'>
                <button onClick={handleNewFoxClick}> New Please</button>
                <button onClick={handleLikeClick}>Likes: {likes}</button>
            </div>
            <img src={image} alt="Random Fox" />
        </div>
    )
}