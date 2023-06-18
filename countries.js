let data = []; 

// Fetch data from the API
fetch('https://restcountries.com/v2/all?fields=name,region,area')
  .then(response => response.json())
  .then(apiData => {
    data = apiData; 
    
    renderList(data);
  })

  .catch(error => {
    console.log('Error:', error);
  });

function renderList(data) {
  const listContainer = document.getElementById('list-container');
  listContainer.innerHTML = '';

  data.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = `Name: ${item.name}, Region: ${item.region}, Area: ${item.area}`;
    listContainer.appendChild(listItem);
  });
}

//Sort the list
function sortList(property, order) {
    const sortedData = data.sort((a, b) => {
      if (order === 'asc') {
        if (a[property] < b[property]) return -1;
        if (a[property] > b[property]) return 1;
        return 0;
      } else if (order === 'desc') {
        if (a[property] > b[property]) return -1;
        if (a[property] < b[property]) return 1;
        return 0;
      }
      return 0;
    });
    renderList(sortedData);
  }


// Function to filter countries smaller than Lithuania by area
function filterByArea(area) {
    const filteredData = data.filter(item => item.area < area);
    renderList(filteredData);
  }
  
 // Function to filter countries in Oceania
function filterByRegion(region) {
    const filteredData = data.filter(item => item.region === region);
    renderList(filteredData);
  }