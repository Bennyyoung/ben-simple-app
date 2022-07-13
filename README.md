# Decisions and Shortcuts

I created a components folder and inside I had Content.jsx, FilterButtons.jsx and Search.jsx.

In my App.jsx I passed down the following as props 'handleFilter, setQuery and data' to the children component in my component s folder

The reason for the props is so I could make my app dynamic and components reusable

My decision was so I follow react best practices, If you notice that inside my components folder I had my index.js which I exported all the jsx from there. The reason for doing so is to avoid repeating myself. The following is an example of what I mean

## Bad practice
import Content from "./components/Content"

import FilterButtons from "./components/FilterButtons"

import Search from "./components/Search"

## Best practice
import { Content, FilterButtons, Search } from "./components"

I also had to make it 100% dynamic by waiting for the data in my FilterButtons.jsx, because I noticed that I was getting undefined before I get the data. So I tried async and await but seems that didn't work. So cleaned up the async await and commented some other thought process