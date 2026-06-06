# ⚡ Harry Potter - Magical Spells Guide

A web app that displays Harry Potter spells and their uses, fetched from a live API.

## Features

- Browse through 72 spells from the Harry Potter universe
- Displays spell name and its use side by side
- Themed UI with a wooden background, spell book, wand, and Harry Potter logo
- Responsive design with mobile support

## Tech Stack

- HTML, CSS, Vanilla JavaScript
- [Potter API](https://potterapi-fedeperin.vercel.app) for spell data
- MedievalSharp Google Font for thematic styling

## How to Use

1. Open `index.html` in a browser
2. Click **Next Spell** to cycle through spells one by one

## Project Structure

```
Harry Potter/
├── Assets/
│   ├── harry_potter.png
│   ├── magic_stick.png
│   ├── wood_background.jpg
│   └── book-cover-diary-journal-text-book.png
├── index.html
├── style.css
└── script.js
```

## API Used

**Endpoint:** `https://potterapi-fedeperin.vercel.app/en/spells`

Returns a list of spells with `spell` and `use` fields.
