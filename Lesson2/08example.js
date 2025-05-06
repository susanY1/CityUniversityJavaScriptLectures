window.onload = function() {
    getData()
}

async function getData() {
    const url = "https://api.sampleapis.com/coffee/hot";
    try {
      
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();

    } catch (error) {
      console.error(error.message);
    }
}

