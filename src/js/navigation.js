
function buildNavigation() {
  // Create the parent div
  const navDiv = document.createElement('div');
  navDiv.className = 'nav-links';
  
  // Create the ul element
  const ul = document.createElement('ul');
  ul.setAttribute('role', 'menu');

  // Create the first li element
  const liAbout = document.createElement('li');
  liAbout.className = 'nav-about';
  liAbout.setAttribute('role', 'menuitem');
  const aAbout = document.createElement('a');
  aAbout.className = 'nav-link';
  aAbout.href = 'https://nickpunt.com/about/';
  aAbout.textContent = 'About';
  liAbout.appendChild(aAbout);

  // Create the second li element
  const liBlog = document.createElement('li');
  liBlog.className = 'nav-blog';
  liBlog.setAttribute('role', 'menuitem');
  const aBlog = document.createElement('a');
  aBlog.className = 'nav-link';
  aBlog.href = 'https://nickpunt.com/blog/';
  aBlog.textContent = 'Blog';
  liBlog.appendChild(aBlog);

  // Create the third li element for the button
  const liButton = document.createElement('li');
  liButton.id = 'nav-light';
  const button = document.createElement('button');
  button.className = 'nav-link';
  button.setAttribute('onclick', 'handleThemeUpdate()');
  // SVG creation is more complex and typically done by setting innerHTML
  button.innerHTML = `
      <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="url(#synth3)">
        <defs>
          <linearGradient x1="50%" y1="12.75%" x2="50%" y2="60%" id="synth3">
            <stop stop-color="#FF80CD" offset="0%"></stop>
            <stop stop-color="#FFFC8A" offset="100%"></stop>
          </linearGradient>
        </defs>
        <path d="M10 2a8 8 0 1 1 0 16V2zm0 18a10 10 0 1 0 0-20 10 10 0 0 0 0 20z" fill-rule="nonzero"></path>
      </svg>
  `;
  liButton.appendChild(button);

  // Append all li elements to the ul
  ul.appendChild(liAbout);
  ul.appendChild(liBlog);
  ul.appendChild(liButton);

  // Append the ul element to the navDiv
  navDiv.appendChild(ul);

  // Append the navDiv to the site-header
  const siteHeader = document.querySelector('.site-header');
  if (siteHeader) {
      siteHeader.appendChild(navDiv);
  }
}

// Call the function to build and add the navigation
buildNavigation();


// Hover over logo
// Function to add hover state
function addHoverState(element) {
  element.classList.add('pseudohover');
}

// Function to remove hover state
function removeHoverState(element) {
  element.classList.remove('pseudohover');
}

// Selecting elements
const logo = document.querySelector('.site-header-logo');
const text = document.querySelector('.site-header-text');

// Adding event listeners to the logo
logo.addEventListener('mouseenter', () => addHoverState(text));
logo.addEventListener('mouseleave', () => removeHoverState(text));

// Adding event listeners to the text
text.addEventListener('mouseenter', () => addHoverState(logo));
text.addEventListener('mouseleave', () => removeHoverState(logo));