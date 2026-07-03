// A simple module-level store so any component can access the background audio element.
// App.jsx registers the ref here; BlogEntryPage reads it to pause/resume.

const audioStore = {
  audioRef: null, // will be set to the React ref from App
}

export default audioStore
