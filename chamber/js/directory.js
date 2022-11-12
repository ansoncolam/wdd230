const requestURL = "./json/data.js";
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const companies = jsonObject['companies'];
    companies.forEach(displayCompanies);
  });


function displayCompanies(company) {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let logo = document.createElement('img');

    h2.textContent = `${company.name}`;

    logo.setAttribute('src', company.img);
    logo.setAttribute('alt', `${company.name} logo`);
    logo.setAttribute('loading', 'lazy');
  
    card.appendChild(h2);
    card.appendChild(logo);

    document.querySelector('div.cards').appendChild(card);
  }

