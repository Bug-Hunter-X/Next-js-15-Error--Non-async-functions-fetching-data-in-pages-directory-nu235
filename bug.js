```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <Link href="/about">
        <a>Go to About page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js

export default function About() {
  // This will cause an error in Next.js 15 if the function is not async
  const data = fetchData();

  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page.</p>
      <p>Data from API: {data}</p> 
    </div>
  );
}

async function fetchData(){
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await res.json();
  return data;
}
```