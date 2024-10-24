const yearSpan = document.getElementById('currentYear');
const lastModifiedSpan = document.getElementById('lastModified');

const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

const lastModified = document.lastModified;
lastModifiedSpan.textContent = `Last updated: ${lastModified}`;
