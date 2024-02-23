const notesFilePath = path.join(__dirname, '/db/db.json');

// GET Route for retrieving notes
app.get('/api/notes', (req, res) => {
  fs.readFile(notesFilePath, 'utf8', (err, data) => {
    if (err) throw err;
    res.json(JSON.parse(data));
  });
});

// POST Route for submitting notes
app.post('/api/notes', (req, res) => {
  const newNote = req.body;
  
  // Generate a unique ID for the new note (you can use a package like uuid)
  newNote.id = Math.floor(Math.random() * 1000000);

  fs.readFile(notesFilePath, 'utf8', (err, data) => {
    if (err) throw err;
    const notes = JSON.parse(data);
    notes.push(newNote);

    fs.writeFile(notesFilePath, JSON.stringify(notes, null, 2), (err) => {
      if (err) throw err;
      res.json(newNote);
    });
  });
});
