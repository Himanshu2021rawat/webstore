const btn = document.getElementById('btn');

// Local storage function
const updateLSData = () => {
  const textareadata = document.querySelectorAll('textarea');
  const notes = [];

  textareadata.forEach((note) => {
    return notes.push(note.value);
  });

  localStorage.setItem('notes', JSON.stringify(notes));
}
const addNote = (text = '') => {
    const note = document.createElement('div');
    note.classList.add('note');
  
    const htmldata = `<div class="operation">
      <button class="edit"><i class="far fa-edit bigger-icon"></i></button>
      <button class="delete"><i class="fas fa-trash bigger-icon"></i></button>
    </div>
  
    <div class="main">${text}</div>
    <textarea class="hidden" id="textarea" placeholder="type your thoughts here:">${text}</textarea>`;
  
    note.insertAdjacentHTML('afterbegin', htmldata);
  
    const edit = note.querySelector('.edit');
    const del = note.querySelector('.delete');
    const maindiv = note.querySelector('.main');
    const textarea = note.querySelector('textarea');
  
    del.addEventListener('click', () => {
      note.remove();
      updateLSData();
    });
  
    edit.addEventListener('click', () => {
      maindiv.classList.toggle('hidden');
      textarea.classList.toggle('hidden');
    });
  
    textarea.addEventListener('input', (event) => {
      const value = event.target.value;
      maindiv.innerHTML = value;
      updateLSData();
    });
  
    document.body.appendChild(note);
  }
  
// Retrieve notes from local storage
const notes = JSON.parse(localStorage.getItem('notes'));

if (notes) {
  notes.forEach((note) => addNote(note));
}

btn.addEventListener('click', () => addNote());
