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
document.querySelector('.art-1 button').innerHTML = 'Add to card';
document.querySelector('.art-1 button').style.backgroundColor = 'purple';

//6. Change the background color of any of the products.
document.querySelector('.art-1 figure').style.backgroundColor = 'purple'

//7. Replace the address on the page.

document.querySelector('footer section article:nth-child(2) p').innerHTML = 'New Address Road 42 <br> 12345, New City';