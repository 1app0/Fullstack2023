```mermaid
sequenceDiagram
participant browser
participant server

browser->>+server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
server-->>-browser: Status code 201, Created

Note over browser: Browser rerenders the note list with the newly added note via js
```