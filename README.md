# Artist Finder

## Overview
Search for a musical artist to view their catalogue of releases. Dive deeper to see each album's songs and the corresponding lyrics.

## Author
Dannie Schumaker

## Technologies
React, Jest, Enzyme, PostCSS, REST APIs

## APIs
* **Artist info:** [Music Brainz](https://musicbrainz.org/doc/Development/XML_Web_Service/Version_2)
* **Lyrics:** [lyrics.ovh](https://lyricsovh.docs.apiary.io/#reference/0/lyrics-of-a-song/search)

Cover art sourced from [Cover Art Archive](http://coverartarchive.org)

## Approach
This app was built in React. The overall strategy was developed through extensive component diagrams. State is managed by custom hooks in function components. Higher order components were created to generate the multiple list and paging components (thereby dramatically reducing repeated code).

## Getting Started
1. Clone and download GitHub repo
2. Install dependencies:
    - npm i
    - Run scripts:
      - npm run test
      - npm run test:watch
      - npm run start
      - npm run build
