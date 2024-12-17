```javascript
// pages/about.js
import { Suspense } from 'react';

export default async function About() {
  const data = await fetchData();

  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page.</p>
      <p>Data from API: {JSON.stringify(data)}</p> 
    </div>
  );
}

async function fetchData(){
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await res.json();
  return data;
}
```