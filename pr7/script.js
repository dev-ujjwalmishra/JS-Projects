const addNoteBtn = document.querySelector('#add-note-btn');
const noteContainer = document.querySelector('.notes-container');

const updateLSData = () =>{
    const txtAreaData = document.querySelectorAll('textarea');

    const notes = [];

    // console.log(txtAreaData);

    txtAreaData.forEach(note => {
        notes.push(note.value);
    });

    // console.log(notes);

    localStorage.setItem('notes',JSON.stringify(notes));
}

const addNewNote = (text = '') => {
     const note = document.createElement('div');
     note.classList.add('note');
     
     const htmlData = `
        <div class="icons">
            <button type="button" class="fa edit">&#xf044;</button>
            <button type="button" class="fa delete">&#xf00d;</button>
        </div>
        <div class="note-txt ${text ? "" : "hidden"}"></div>
        <textarea class="${text ? "hidden" : ""}" placeholder="type here..."></textarea>`;

        note.insertAdjacentHTML('afterbegin',htmlData);

       // getting the references
       const editBtn = note.querySelector('.edit');
       const deleteBtn = note.querySelector('.delete');
       const noteTxt = note.querySelector('.note-txt');
       const textArea = note.querySelector("textarea");

        noteContainer.appendChild(note);

        // deleting the node
        deleteBtn.addEventListener('click',() => {
            note.remove();
            updateLSData();
        })

        // toggle using edit button
        textArea.value = text;
        noteTxt.innerHTML = text;

        editBtn.addEventListener('click', () => {
            noteTxt.classList.toggle('hidden');
            textArea.classList.toggle('hidden');
        })

        textArea.addEventListener('change', (event) => {
            const value = event.target.value;
            noteTxt.innerHTML = value;

            updateLSData();
        })
}

// getting data back from local storage

const notes = JSON.parse(localStorage.getItem('notes'));

if(notes){
    notes.forEach((note) => addNewNote(note));
}

addNoteBtn.addEventListener('click',() => addNewNote());