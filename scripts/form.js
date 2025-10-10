document.getElementById('currentyear').textContent = new Date().getFullYear();

// Set the last modified date of the document
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;

products = [
    {
        id: "fc-1888",
        name: "Flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "Power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "Time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "Low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "Warp equalizer",
        averagerating: 5.0
    }

];

firstmod = [
    {
        id: "",
        name: "Select a product",
        averagerating: ""
    },
    {
        id: "fc-1888",
        name: "Flux capacitor",
        averagerating: 4.5
    }
];



function displaymenu(list) {
    list.forEach(element => {
        const container = document.querySelector("select");
        const option = document.createElement("option");
        option.value = element.id;
        option.textContent = `${element.name} - ${element.averagerating} stars`;
        container.appendChild(option);

    });
}

function displaymenufirst(list) {
    list.forEach((element, index) => {
        const container = document.querySelector("select");
        const option = document.createElement("option");
        option.value = element.id;
        option.textContent = `${element.name} - ${element.averagerating} stars`;
        if (index === 0) {
            option.disabled = true;
            option.selected = true; // Optional: make it selected by default
        }
        container.appendChild(option);
    });

}

const first = firstmod.map((item, index) => index === 0 ? item : null).filter(item => item !== null);
displaymenufirst(first);
displaymenu(products);