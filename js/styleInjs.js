const sections=document.querySelectorAll("section");
// console.log(sections);
for (const section of sections){
    // console.log(section);
    section.style.border = '2px solid blue'
    section.style.marginBottom= '5px';
    section.style.borderRadius= '5px';
    section.style.paddingLeft= '10px';
    section.style.background='lightgray';
}

// const placesContainer=document.getElementById('place-container');
// placesContainer.style.backgroundColor= 'yellow';

// const placesContainer=document.getElementById('place-container');
// placesContainer.classList.add('text-center'); 
// placesContainer.classList.remove('large-text');