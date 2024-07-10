// Code here!
//1. Rename the first hoodie from Ash to Potato .

/*const hoodieTitle = document.querySelector('.art-1 h3');
hoodieTitle.innerHTML = 'Potato';*/

document.querySelector('.art-1 h3').innerHTML = 'Potato';

//2. Rename Home to Start .​​
document.querySelector('nav a:first-child').innerHTML = 'Start';

//3. Rename Contact to Mail Us .​
document.querySelector('nav a:nth-child(3)').innerHTML = 'Mail Us';

//4. Replace the information on Sinus Hoodie - Fire .
document.querySelector('.art-2 h2').innerHTML = 'New Sinus Hoodie';
document.querySelector('.art-2 h3').innerHTML = 'New Fire';
document.querySelector('.art-2 p').innerHTML = 'This is the updated description for the Sinus Hoodie - Fire. It is hotter than ever!';

//5. Change the background color and text of a button.
document.querySelector('.art-1 button').innerHTML = 'Add to cart';
document.querySelector('.art-1 button').style.backgroundColor = 'purple';

//6. Change the background color of any of the products.
document.querySelector('.art-1 figure').style.backgroundColor = 'purple'

//7. Replace the address on the page.
document.querySelector('footer section article:nth-child(2) p').innerHTML = 'New Address Road 42 <br> 12345, New City';

//8. Change the color of all <p>.
document.querySelectorAll('p').forEach (p => {
    p.style.color = "blue";
});

//9. Change text on all buttons to add to cart .
document.querySelectorAll('button').forEach (button =>{
button.innerHTML = 'Add to cart';
});

//10. Add the class active to the home menu option .
document.querySelector('nav a:first-child').classList.add('active');

//11. Remove the logo class from the logo.
document.querySelector('header img').classList.remove('logo');

//12. Add a new menu item.
let newItem = document.createElement('a');
newItem.href = '#';
newItem.innerHTML = 'Login';
//document.querySelector('nav').appendChild(newItem);
let thirdLink = document.querySelector('nav a:nth-child(3)');
thirdLink.insertAdjacentElement('afterend', newItem);

/*13.add a new product with the following info
 img	hoodie-forrest.png
h2	Sinus Hoodie
h3	Forrest
p	Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolores. */
let newProduct = document.createElement('article');
newProduct.classList.add('art-4');
newProduct.innerHTML = ` <figure><img src="img/hoodie-forrest.png" alt="hoodie"></figure>
            <h2>Sinus Hoodie</h2>
            <h3>Forrest</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolores.</p>
            <button>buy</button>` ;
document.querySelector('main').appendChild(newProduct);

//14. Listen for a click on the logo ( .logo). When it registers a click, console.log "found you!";
document.querySelector('header img').addEventListener('click', () => {
    console.log('found you!');
});

//15. Listen for clicks on all products ( <article>). When it registers a click, console.log "Hi, Im article Fire / Ash / Water".
let articles = document.querySelectorAll('article');
articles.forEach(article => {
    article.addEventListener('click', () => {
        let articleTitle = article.querySelector('h3').innerHTML;
        console.log(`Hi, I'm article ${articleTitle}`);
    });
})