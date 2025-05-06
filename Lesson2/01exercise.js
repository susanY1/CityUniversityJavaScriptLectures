console.log("Hello world");


fetch('https://ghibliapi.vercel.app/people') // api for the get request
    .then(response => response.json())
    .then(data => console.log(data));