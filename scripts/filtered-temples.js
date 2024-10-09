const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl: 
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl: 
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
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
  ];
  

  const gallery = document.querySelector(".gallery");
  

  function createTempleCard(temple) {
    const figure = document.createElement("figure");
  
    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = temple.templeName;
    img.loading = "lazy"; 
  
    const figcaption = document.createElement("figcaption");
    figcaption.innerHTML = `
      <h3>${temple.templeName}</h3>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Size:</strong> ${temple.area} sq ft</p>
    `;
  
    figure.appendChild(img);
    figure.appendChild(figcaption);
  
    return figure;
  }
  
  temples.forEach((temple) => {
    const templeCard = createTempleCard(temple);
    gallery.appendChild(templeCard);
  });

function filterTemples(criteria) {
    let filteredTemples;
    
    if (criteria === 'Old') {
      filteredTemples = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
    } else if (criteria === 'New') {
      filteredTemples = temples.filter(t => new Date(t.dedicated).getFullYear() >= 2000);
    } else if (criteria === 'Large') {
      filteredTemples = temples.filter(t => t.area > 90000);
    } else if (criteria === 'Small') {
      filteredTemples = temples.filter(t => t.area < 10000);
    } else {
      filteredTemples = temples;
    }
  
    gallery.innerHTML = '';
    filteredTemples.forEach((temple) => {
      const templeCard = createTempleCard(temple);
      gallery.appendChild(templeCard);
    });
  }
  

  document.querySelector('nav').addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
      const criteria = event.target.textContent;
      filterTemples(criteria);
    }
  });
    