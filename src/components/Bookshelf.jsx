import '../index.css';
import { useState } from 'react';

const Bookshelf = () => {
    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
      ]);

    const [newbook, setNewBook] = useState([])

    return(
        <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add a Book</h3>
                <form>
                    <div>
                        <label>Title:</label>
                        <input
                            id="title"
                            name="title"
                        ></input>
                    </div>
                    <div>
                        <label>Author:</label>
                        <input
                            id="author"
                            name="author"
                        ></input>
                    </div>
                </form>
                <button>Add book</button>

            </div>
            
            <div className="bookCardsDiv">
                {books.map((eachBook)=> {
                    return(
                        <div className="bookCard">
                            <h3>{eachBook.title}</h3>
                            <p>by {eachBook.author}</p>
                        </div>
                    )
                })}      

            </div>

        </div>

    )

}


export default Bookshelf;