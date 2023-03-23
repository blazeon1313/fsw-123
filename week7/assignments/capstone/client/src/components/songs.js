import { useState } from "react"
import SongFormHandler from "./playList"

// Create the item object to be used on the page
const EditList = ({editItem, deleteItem, title, artist, genre, id}) => {

    const [editToggle, setEditToggle] = useState(false)

    // Used to display the movie and details in a list on the page
    return(
        <div className="songs">
            { !editToggle ?
                <>
                    <p className="title">{title}</p> 
                    <p className="artist">{artist} </p>
                    <p className="genre">{genre}</p>
                    <p className="buttons">
                        <button className="delete-btn" onClick={() => deleteItem(id)}>Delete</button>
                        <button className="edit-btn" onClick={() => setEditToggle(prevToggle => !prevToggle)}>Edit</button>
                    </p> 
                </>
                :
                <>
                    <SongFormHandler 
                        title={title}
                        artist={artist}
                        id={id}
                        btnText='Submit'
                        submit={editItem}
                    />
                    <button className="submit-btn" onClick={() => setEditToggle(prevToggle => !prevToggle)}>Close</button>
                </>
            }   
        </div>
    )
}

// send to songData.js file
export default EditList;