# Next.js 15 Non-Async Data Fetching Error

This repository demonstrates a common error in Next.js 15 related to data fetching within page components.  In Next.js 15, if a page component makes a data fetch using a non-async function, it might not work as expected.  This often results in rendering errors or unexpected behavior.

## Bug Description

The `pages/about.js` file attempts to fetch data using a standard synchronous function. This causes Next.js to throw an error because the data is not fetched before the component renders.

## Solution

The solution lies in using `async/await` to handle data fetching within the page component.  This ensures that the data is fetched before the component renders.

## How to reproduce:

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate to `/about` and observe the error. 
5. Compare it to the fixed version.