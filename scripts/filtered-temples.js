const humburger = document.querySelector('#menu');
const navigator = document.querySelector('.navigation')

humburger.addEventListener('click', () => {
  humburger.classList.toggle('show');
  navigator.classList.toggle('show');
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "images/aba-nigeria-temple.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Nairobi Kenya Temple",
    location: "Nairobi City Kenya",
    dedicated: "2025, May, 18",
    area: 19870,
    imageUrl:
      "images/nairobi_kenya_temple.jpg"
  },
  {
    templeName: "Natal Brazil",
    location: "Nova Parnamirim Brazil",
    dedicated: "2025, May, 17",
    area: 19800,
    imageUrl:
      "images/natal-brazil-temple.jpg"

  },
  {
    templeName: "Cape Town South Africa",
    location: "Cape Town, South Africa",
    dedicated: "2025, October, 25",
    area: 9500,
    imageUrl:
      "images/cape-town-south-africa-temple.webp"
  },
  // Add more temple objects here...
];

const smalllink = document.querySelector("#small");
smalllink.addEventListener("click", () => {
  document.querySelector("#temples-branches").innerHTML = "";
  getdemcards(temples.filter(temple => temple.area < 10000));
})

const homelink = document.querySelector("#home");
homelink.addEventListener("click", () => {
  document.querySelector("#temples-branches").innerHTML = "";
  getdemcards(temples);
})

const largelink = document.querySelector("#large");
largelink.addEventListener("click", () => {
  document.querySelector("#temples-branches").innerHTML = "";
  getdemcards(temples.filter(temple => temple.area > 90000));
})
// getdemcards(temples);

// Get the container element


// Loop through the array and create HTML elements
function getdemcards(sth) {
  const container = document.getElementById("temples-branches");
  sth.forEach(branch => {
    const branchDiv = document.createElement("div");
    branchDiv.className = "branch";

    branchDiv.innerHTML = `
    <h2>${branch.templeName}</h2>
    <p><strong>Location:</strong> ${branch.location}</p>
    <p><strong>Dedicated:</strong> ${branch.dedicated}</p>
    <p><strong>Size:</strong> ${branch.area} km²</p>  
    <img src="${branch.imageUrl}" alt="${branch.templeName}" style="width:300px; height:auto;" loading="lazy">
  `;

    container.appendChild(branchDiv);
  });
}

const container = document.getElementById("temples-branches");
temples.forEach(branch => {
  const branchDiv = document.createElement("div");
  branchDiv.className = "branch";

  branchDiv.innerHTML = `
  <h2>${branch.templeName}</h2>
  <p><strong>Location:</strong> ${branch.location}</p>
  <p><strong>Dedicated:</strong> ${branch.dedicated}</p>
  <p><strong>Size:</strong> ${branch.area} km²</p>  
  <img src="${branch.imageUrl}" alt="${branch.templeName}" style="width:300px; height:auto;" loading="lazy">
  `;

  container.appendChild(branchDiv);
});

document.getElementById('currentyear').textContent = new Date().getFullYear();


document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;