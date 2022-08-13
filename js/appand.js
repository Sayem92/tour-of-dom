//1 where to add
const placeslist=document.getElementById('places-list');
// console.log(placeslist)

//2 what to be added
const li=document.createElement('li');
li.innerText= 'pahartoli bon'

//3 add the child
placeslist.appendChild(li)

//1 where to add
const maincontainer=document.getElementById('main-container');
// console.log(maincontainer)

//what to be added
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText= 'My food list';
section.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'Biryani';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'Borhani';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'Salad';
ul.appendChild(li3);

section.appendChild(ul);

maincontainer.appendChild(section)


// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// set innerHTML directly
const sectiondress = document.createElement('section');
sectiondress.innerHTML = `
<h1>My Drees Section</h1>
<ul>
    <li>T-shirt</li>
    <li>Gengi</li>
    <li>Longgi</li>
    <li>Panjabi</li>
</ul>
`
 maincontainer.appendChild(sectiondress);