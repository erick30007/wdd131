const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

const productNameDropdown = document.getElementById('product');
products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    productNameDropdown.appendChild(option);
});

function updateReviewCount() {
    let reviewCount = localStorage.getItem('reviewCount');

    console.log('Initial reviewCount:', reviewCount);

    if (reviewCount === null) {
        reviewCount = 0;
    } else {
        reviewCount = parseInt(reviewCount);
    }

    reviewCount++;

    localStorage.setItem('reviewCount', reviewCount);

    document.getElementById('reviewCountDisplay').textContent = `Reviews completed: ${reviewCount}`;

    console.log('Updated reviewCount:', reviewCount);
}

document.addEventListener('DOMContentLoaded', function () {
    updateReviewCount();
});


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('currentyear').textContent = new Date().getFullYear();

    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = `Last Modification: ${lastModified}`;
});


  