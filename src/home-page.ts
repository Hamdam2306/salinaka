const homePage = document.getElementById('home-link') as HTMLAnchorElement;
const featured = document.getElementById('featured-link') as HTMLAnchorElement;
const recommended = document.getElementById('recommended-link') as HTMLAnchorElement;

const page1 = document.getElementById('PAGE-1') as HTMLDivElement;
const page2 = document.getElementById('PAGE-2') as HTMLDivElement;
const page3 = document.getElementById('PAGE-3') as HTMLDivElement;


const seeAllFeatured = document.getElementById("seeAll-featured") as HTMLAnchorElement;
const seeAllRecommended = document.getElementById("seeAll-recommended") as HTMLAnchorElement;


seeAllFeatured?.addEventListener("click", (event) => {
    event.preventDefault(); 
    page2.style.display = 'block';
    page1.style.display = 'none';
    page3.style.display = 'none';
});

seeAllRecommended?.addEventListener("click", (event) => {
    event.preventDefault(); 
    page3.style.display = 'block';
    page1.style.display = 'none';
    page2.style.display = 'none'; 
});

homePage?.addEventListener('click', (event) => {
    event.preventDefault(); 
    page1.style.display = 'block';
    page2.style.display = 'none';
    page3.style.display = 'none';
});

featured?.addEventListener('click', (event) => {
    event.preventDefault(); 
    page2.style.display = 'block';
    page1.style.display = 'none';
    page3.style.display = 'none';
});

recommended?.addEventListener('click', (event) => {
    event.preventDefault(); 
    page3.style.display = 'block';
    page1.style.display = 'none';
    page2.style.display = 'none';
});


