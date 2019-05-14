const pets = [
  {
    name: 'Dingo',
    type: 'dog',
    age: 1,
  },
  {
    name: 'Kongo',
    type: 'snake',
    age: 3,
  },
  {
    name: 'Meowngo',
    type: 'cat',
    age: 2,
  },
  {
    name: 'Bongo',
    type: 'dog',
    age: 2,
  },
];
// <article>
//   <header>
//     <h2>Dingo</h2>
//   </header>
//   <div class="content">
//     <ul>
//       <li>
//         <span>Species: </span>dog
//       </li>
//       <li>
//         <span>Age: </span>1
//       </li>
//     </ul>
//   </div>
//   <footer>Dingo is a dog and is 1 years old</footer>
// </article>;

// Create an article element with jQuery
const createPetElement = petObj => {
  // Creating the article tag
  const $article = $('<article>');

  // Create header tag
  const $header = $('<header>');

  // Creating the h2 for the name of the pet
  const $h2PetName = $('<h2>').text(petObj.name);

  // adding the h2 to the header
  $header.append($h2PetName);

  // adding the header to the article element
  $article.append($header);

  // Creating the div for the content
  const $contentDiv = $('<div>').addClass('content');

  // Creating the UL list
  const $ul = $('<ul>');

  // Creating the first LI element for the species
  const $speciesLi = $('<li>').text(petObj.type);
  const $speciesSpan = $('<span>').text('Species: ');
  $speciesLi.prepend($speciesSpan);
  $ul.append($speciesLi);

  // Creating the second LI element for the Age
  const $ageLi = $('<li>').text(petObj.age);
  const $ageSpan = $('<span>').text('Age: ');
  $ageLi.prepend($ageSpan);
  $ul.append($ageLi);

  // Adding the UL list to the content div
  $contentDiv.append($ul);

  // Content div is added to the article

  $article.append($contentDiv);

  const $footer = $('<footer>').text(
    `${petObj.name} is a ${petObj.type} and is ${petObj.age} years old`
  );

  $article.append($footer);

  return $article;
};

$(function() {
  for (const pet of pets) {
    const $articleEl = createPetElement(pet);
    $('.pets-container').append($articleEl);
  }
});
