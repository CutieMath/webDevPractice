import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import notes from "../notes";

function App(){
    return (
        <div>
            <Header />
            {notes.map((input) => (
                <Note 
                    key={input.id}
                    title={input.title}
                    content={input.content}
                />
            ))}
            <Footer />
        </div>
    );
}

export default App;