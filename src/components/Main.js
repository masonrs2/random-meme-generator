import React, { useState, useEffect } from 'react';


const Main = () => {

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] =useState([])

    useEffect(function () {
        fetch(`https://api.imgflip.com/get_memes`)
            .then(rawData => rawData.json())
            .then(memeData => setAllMemeImages(memeData.data.memes))
    }, [])

    function generateMeme() {
        const random = Math.floor(Math.random() * allMemeImages.length)
        
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                randomImage: allMemeImages[random].url
            }
        })
    }

    function handleChange(event) {
        const {value, name} = event.target

        setMeme(prevMeme => {
            return {
                ...prevMeme, 
                [name]: [value]
            }
        })
    }

    return (
        <main>
            <div className="form">

              <input 
                type="text" 
                className="form-input"
                placeholder='Top text'
                onChange={handleChange}
                value={meme.topText}
                name="topText"
                />

              <input 
                type="text" 
                className="form-input" 
                placeholder='Bottom text'
                onChange={handleChange}
                value={meme.bottomText}
                name="bottomText"
                />

              <button 
                onClick={generateMeme}
                className="form-button">Get a new meme image 
                <span className="emoji" ></span>🖼</button>

            </div>
            <div className="meme"> 
                <img src={meme.randomImage} className="meme-image" />
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}

export default Main;