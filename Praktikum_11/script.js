let notes = JSON.parse(localStorage.getItem("notes")) || [];
let editIndex = null;

function renderNotes() {
  const list = document.getElementById("noteList");
  list.innerHTML = "";

  notes.forEach((note, index) => {
    let li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";

    let span = document.createElement("span");
    span.innerText = note;

    let btnGroup = document.createElement("div");

    let editBtn = document.createElement("button");
    editBtn.className = "btn btn-sm btn-warning me-2";
    editBtn.innerText = "Edit";
    editBtn.onclick = () => editNote(index);

    let deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-sm btn-danger";
    deleteBtn.innerText = "Hapus";
    deleteBtn.onclick = () => deleteNote(index);

    btnGroup.appendChild(editBtn);
    btnGroup.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(btnGroup);
    list.appendChild(li);
  });
}

function addNote() {
  const input = document.getElementById("noteInput");
  const value = input.value.trim();
  if (!value) return alert("Catatan tidak boleh kosong!");

  if (editIndex !== null) {
    notes[editIndex] = value;
    editIndex = null;
  } else {
    notes.push(value);
  }

  localStorage.setItem("notes", JSON.stringify(notes));
  input.value = "";
  renderNotes();
}

function editNote(index) {
  document.getElementById("noteInput").value = notes[index];
  editIndex = index;
}

function deleteNote(index) {
  if (confirm("Yakin ingin menghapus catatan ini?")) {
    notes.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
    renderNotes();
  }
}

function clearForm() {
  document.getElementById("noteInput").value = "";
  editIndex = null;
}

renderNotes();