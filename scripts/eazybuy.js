const humburger = document.querySelector('#menu');
const navigator = document.querySelector('.styletop')

humburger.addEventListener('click', () => {
    humburger.classList.toggle('show');
    navigator.classList.toggle('show');
});

const items = [
    {
        itemName1: "Kitchen Rack",
        price1: "Ksh2,000",
        imageUrl1: "images/kitchenrack.webp",


        itemName2: "Microwave",
        price2: "Ksh12,000",
        imageUrl2: "images/microwave.avif",

        itemName3: "Oven",
        price3: "Ksh45,000",
        imageUrl3: "images/oven.webp"
    },
    {
        itemName1: "Dishwasher",
        price1: "Ksh40,000",
        imageUrl1: "images/dishwasher.webp",

        itemName2: "Toaster",
        price2: "Ksh3,000",
        imageUrl2: "images/toaster.webp",

        itemName3: "Blender",
        price3: "Ksh5,000",
        imageUrl3: "images/blender.webp",
    }
];

const items1 = [
    {
        itemName1: "Crisps",
        price1: "Ksh600",
        imageUrl1: "images/crisps.webp",


        itemName2: "Flour",
        price2: "Ksh200",
        imageUrl2: "images/flour.webp",

        itemName3: "Cooking Oil",
        price3: "Ksh900",
        imageUrl3: "images/cookingoil.webp"
    },
    {
        itemName1: "Afia Juice",
        price1: "Ksh150",
        imageUrl1: "images/juice.webp",

        itemName2: "Canned Meat",
        price2: "Ksh800",
        imageUrl2: "images/meat.webp",

        itemName3: "Bread",
        price3: "Ksh160",
        imageUrl3: "images/bread.webp",
    }
];

const items2 = [
    {
        itemName1: "Fridge",
        price1: "Ksh56,000",
        imageUrl1: "images/fridge.webp",


        itemName2: "Washing Machine",
        price2: "Ksh 65,000",
        imageUrl2: "images/washingmachine.webp",

        itemName3: "Lenovo Legion Laptop",
        price3: "Ksh40,000",
        imageUrl3: "images/lenovolegion.webp"
    },
    {
        itemName1: "JBL Computer Speakers",
        price1: "Ksh30,000",
        imageUrl1: "images/computerspeakers.webp",

        itemName2: "Samsung Smart TV",
        price2: "Ksh32,000",
        imageUrl2: "images/tv.webp",

        itemName3: "Fan",
        price3: "Ksh5,000",
        imageUrl3: "images/fan.webp",
    }
];


function getdemslides(id, list) {
    const container1 = document.getElementById(id);
    for (let idx = 0; idx < items.length; idx++) {
        const slide = list[idx];
        const branchDiv = document.createElement("div");
        branchDiv.className = "slide ";
        branchDiv.setAttribute("data-index", idx); // First div gets 0, second gets 1, etc.

        branchDiv.innerHTML = `
        <div class="card">
            <img src="${slide.imageUrl1}" alt="${slide.itemName1}" loading="lazy">
            <h3>${slide.itemName1}</h3>
            <div class="badge">${slide.price1}</div>
        </div>
        <div class="card">
            <img src="${slide.imageUrl2}" alt="${slide.itemName2}" loading="lazy">
            <h3>${slide.itemName2}</h3>
            <div class="badge">${slide.price2}</div>
        </div>
        <div class="card">
            <img src="${slide.imageUrl3}" alt="${slide.itemName3}" loading="lazy">
            <h3>${slide.itemName3}</h3>
            <div class="badge">${slide.price3}</div>
        </div>
    `;

        container1.appendChild(branchDiv);
    }
}

getdemslides("viewport1", items1);
getdemslides("viewport", items);
getdemslides("viewport2", items2)

document.getElementById('currentyear').textContent = new Date().getFullYear();


document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;