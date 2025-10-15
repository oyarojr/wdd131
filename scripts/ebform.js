const humburger = document.querySelector('#menu');
const navigator = document.querySelector('.styletop')

humburger.addEventListener('click', () => {
    humburger.classList.toggle('show');
    navigator.classList.toggle('show');
});

const items = [
    {
        itemName: "Kitchen Rack",
        price: "Ksh2,000",
        imageUrl: "images/kitchenrack.webp"
    },
    {
        itemName: "Microwave",
        price: "Ksh12,000",
        imageUrl: "images/microwave.avif"
    },
    {

        itemName: "Oven",
        price: "Ksh45,000",
        imageUrl: "images/oven.webp"
    },
    {
        itemName: "Dishwasher",
        price: "Ksh40,000",
        imageUrl: "images/dishwasher.png"
    },
    {
        itemName: "Air Fryer",
        price: "Ksh8,000",
        imageUrl: "images/airfryer.jpg"
    },
    {

        itemName: "Toaster",
        price: "Ksh3,000",
        imageUrl: "images/toaster.webp"
    },
    {

        itemName: "Blender",
        price: "Ksh5,000",
        imageUrl: "images/blender.jpg",
    },
    {
        itemName: "Crisps",
        price: "Ksh600",
        imageUrl: "images/crisps.jpg"
    },
    {
        itemName: "Flour",
        price: "Ksh200",
        imageUrl: "images/flour.jpg"
    },
    {

        itemName: "Cooking Oil",
        price: "Ksh900",
        imageUrl: "images/cookingoil.jpg"
    },
    {
        itemName: "Afia Juice",
        price: "Ksh150",
        imageUrl: "images/juice.jpeg"
    },
    {

        itemName: "Canned Meat",
        price: "Ksh800",
        imageUrl: "images/meat.webp"
    },
    {
        itemName: "Bread",
        price: "Ksh160",
        imageUrl: "images/bread.webp"
    },
    {
        itemName: "Fridge",
        price: "Ksh56,000",
        imageUrl: "images/fridge.webp"
    },
    {
        itemName: "Washing Machine",
        price: "Ksh 65,000",
        imageUrl: "images/washingmachine.jpeg"
    },
    {
        itemName: "Lenovo Legion Laptop",
        price: "Ksh40,000",
        imageUrl: "images/lenovolegion.webp"
    },
    {
        itemName: "JBL Computer Speakers",
        price: "Ksh30,000",
        imageUrl: "images/computerspeakers.webp"
    },
    {
        itemName: "Samsung Smart TV",
        price: "Ksh32,000",
        imageUrl: "images/tv.webp"
    },
    {

        itemName: "Fan",
        price: "Ksh5,000",
        imageUrl: "images/fan.webp",
    }
];

const itemssel = [
    {
        itemName: "Select an item",
        price: "Ksh2,000",
        imageUrl: "images/kitchenrack.webp"
    },
    {
        itemName: "Microwave",
        price: "Ksh12,000",
        imageUrl: "images/microwave.avif"
    }
];

function displaymenu(list) {
    list.forEach(element => {
        const container = document.querySelector("select");
        const option = document.createElement("option");
        option.value = element.id;
        option.textContent = `${element.itemName}`;
        container.appendChild(option);

    });
}

function displaymenufirst(list) {
    list.forEach((element, index) => {
        const container = document.querySelector("select");
        const option = document.createElement("option");
        option.value = element.id;
        option.textContent = `${element.itemName}`;
        if (index === 0) {
            option.disabled = true;
            option.selected = true; // Optional: make it selected by default
        }
        container.appendChild(option);
    });

}

const first = itemssel.map((item, index) => index === 0 ? item : null).filter(item => item !== null);
displaymenufirst(first);
displaymenu(items);

document.getElementById('currentyear').textContent = new Date().getFullYear();


document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;