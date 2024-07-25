/* eslint-disable no-unused-vars */
import React from "react"
import Sidebar from "./components/Sidebar"
import Editor from "./components/Editor"
// import { data } from "./data"
import Split from "react-split"
import { nanoid } from "nanoid"
import "./style.css";
import { addDoc, onSnapshot, doc, deleteDoc, setDoc } from "firebase/firestore"
import { notesCollection, db } from "./firebase"




export default function App() {
  const [notes, setNotes] = React.useState(
    // lazy state initialization
    // () => JSON.parse(localStorage.getItem("notes")) || 
    []
  )
  const [currentNoteId, setCurrentNoteId] = React.useState(
    // (notes[0] && notes[0].id) || 
    ""
  )

  React.useEffect(() => {
    const unsubscribe = onSnapshot(notesCollection, function (snapshot) {
      // Sync up our local notes array with the snapshot data
      const notesArr = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
      }))
      setNotes(notesArr)
    })
    return unsubscribe
  }, [])

  React.useEffect(() => {
    if (!currentNoteId) {
        setCurrentNoteId(notes[0]?.id)
    }
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [notes])

  async function createNewNote() {
    const newNote = {
      // id: nanoid(),
      body: "# Type your markdown note's title here"
    }
    // setNotes(prevNotes => [newNote, ...prevNotes])
    const newNoteRef = await addDoc(notesCollection, newNote)
    setCurrentNoteId(newNoteRef.id)
  }


  async function updateNote(text) {
    const docRef = doc(db, "notes", currentNoteId)
    await setDoc(docRef, { body: text }, { merge: true })
}
  async function deleteNote(noteId) {
    const docRef = doc(db, "notes", noteId)
    await deleteDoc(docRef)
  }

  function findCurrentNote() {
    return notes.find(note => {
      return note.id === currentNoteId
    }) || notes[0]
  }

  return (
    <main>
      {
        notes.length > 0
          ?
          <Split
            sizes={[30, 70]}
            direction="horizontal"
            className="split"
          >
            <Sidebar
              notes={notes}
              currentNote={findCurrentNote()}
              setCurrentNoteId={setCurrentNoteId}
              newNote={createNewNote}
              deleteNote={deleteNote}

            />
            {
              // currentNoteId &&
              // notes.length > 0 &&
              <Editor
                currentNote={findCurrentNote()}
                updateNote={updateNote}
              />
            }
          </Split>
          :
          <div className="no-notes">
            <h1>You have no notes</h1>
            <button
              className="first-note"
              onClick={createNewNote}
            >
              Create one now
            </button>
          </div>

      }
    </main>
  )
}
