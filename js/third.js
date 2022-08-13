const main= document.getElementById('main-container');
const section= document.createElement('section');
section.innerHTML= `
<h1>My Dynamic section</h1>
<p>Extra text added insite paragraph</p>
<ul>
    <li> First item </li>
    <li> First item </li>
    <li> First item </li>
    <li> First item </li>
    <li> First item </li>
</ul>

`
main.appendChild(section);