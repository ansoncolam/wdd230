const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets'];
    prophets.forEach(displayProphets);
  });


function displayProphets(prophet) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let bd = document.createElement('div');
    bd.textContent = `Date of Birth: ${prophet.birthdate}`;
    let bp = document.createElement('div');
    bp.textContent = `Place of Birth: ${prophet.birthplace}`;


    // assign ordinal
    let ordinal;
    let a = prophet.order % 10;
    let b = prophet.order % 100;

    if (a == 1 && b != 11) {
      ordinal = "st";
    } else if (a == 2 && b != 12) {
      ordinal = "nd";
    } else if (a == 3 && b != 13) {
      ordinal = "rd";
    } else {
      ordinal = "th";
    }

    if (prophet.order == 11) {
      ordinal = "st";
    } else if (prophet.order == 12) {
      ordinal = "nd";
    } else if (prophet.order == 13) {
      ordinal = "rd";
    }

    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = `${prophet.name} ${prophet.lastname}`;

  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `${prophet.name} ${prophet.lastname} - ${prophet.order}${ordinal} Latter-day President`);
    portrait.setAttribute('loading', 'lazy');
  
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(bd);
    card.appendChild(bp);
    card.appendChild(portrait);

    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
  }

