```mermaid
participant browser
participant server

browser->>+server GET https://studies.cs.helsinki.fi/exampleapp/spa
server-->>-browser HTML document

browser->>+server GET https://studies.cs.helsinki.fi/exampleapp/spa.js
server-->>-browser spa.js file

Note over browser: Executes js code that fetches json data

browser->>+server GET https://studies.cs.helsinki.fi/exampleapp/data.json
server-->>-browser json data

Note over browser: Displays fetched json data
```