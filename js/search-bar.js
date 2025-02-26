const services = [
    { name: "Machining", url: "machining.html", img: "../accu images/machining2.png" },
    { name: "Laser Cutting", url: "laser cutting.html", img: "../accu images/laser1.png" },
    { name: "Fabrication", url: "fabrication.html", img: "../accu images/fabrication2.png" },
    { name: "3D Printing", url: "3d printing.html", img: "../accu images/home 3d printing.jpg" },
    { name: "Casting", url: "casting.html", img: "../accu images/casting2.png" },
    { name: "Gear", url: "gear.html", img: "../accu images/gear1.png" },
    { name: "Bending", url: "bending.html", img: "../accu images/bending2.png" },
    { name: "Wire Cutting", url: "cutting.html", img: "../accu images/wire cutting.png" },
    { name: "Home", url: "index.html", img: "../images/home.jpg" },
    { name: "Services", url: "our-services.html", img: "../accu images/head service.png" }
];

function showSuggestions() {
    let input = document.getElementById("search").value.toLowerCase();
    let suggestionsBox = document.getElementById("suggestions");
    suggestionsBox.innerHTML = "";

    if (input === "") {
        suggestionsBox.style.display = "none";
        return;
    }

    let filteredServices = services.filter(service => service.name.toLowerCase().includes(input));

    if (filteredServices.length > 0) {
        suggestionsBox.style.display = "block";
        filteredServices.forEach(service => {
            let div = document.createElement("div");
            div.classList.add("suggestion");
            div.innerHTML = `<img src="${service.img}" alt="${service.name}"><span>${service.name}</span>`;
            div.onclick = () => {
                window.location.href = service.url;
            };
            suggestionsBox.appendChild(div);
        });
    } else {
        suggestionsBox.style.display = "none";
    }
}

function keepSearchOpen() {
    document.getElementById("search").style.width = "200px";
}

function toggleMenu() {
    document.getElementById('navlist').classList.toggle('show');
}
