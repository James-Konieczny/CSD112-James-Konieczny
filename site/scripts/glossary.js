const glossary = [
    {
    term: "HTML",
    description: "HyperText Markup Language, used to structure web pages."
    },
    {
    term: "CSS",
    description: "Cascading Style Sheets, used for styling HTML content."
    },
    {
    term: "JavaScript",
    description: "A programming language used to make web pages interactive."
    },
    {
    term: "DOM",
    description: "The Document Object Model represents the structure of a web page and allows scripts to access and manipulate it."
    },
    {
    term: "Responsive Design",
    description: "A design approach that makes web content adapt to different screen sizes and devices."
    }
];

// Capture the <main> element using its id
const main = document.getElementById("creating-a-glossary");

// Create and add a level 1 heading
const heading = document.createElement("h1");
heading.textContent = "Glossary";
main.appendChild(heading);

// Create a <dl> element (description list)
const dl = document.createElement("dl");

// Iteratively add each term and its description to the <dl>
glossary.forEach(entry => {
  const dt = document.createElement("dt");
  dt.textContent = entry.term;

  const dd = document.createElement("dd");
  dd.textContent = entry.description;

  dl.appendChild(dt);
  dl.appendChild(dd);
});

// Add the description list to the <main> element
main.appendChild(dl);
