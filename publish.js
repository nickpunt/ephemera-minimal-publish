var plausible = document.createElement('script')
plausible.defer = true
plausible.setAttribute('data-domain', 'minimal.guide')
plausible.src = 'https://plausible.io/js/plausible.js'
document.head.appendChild(plausible)

/*
var siteLeft = document.querySelector('.site-body-left-column');

let navOrderAsc = ["Home.md", "Help.md"]; /* these go on top

let navOrderDsc = []; /* these go at the bottom 

/* items not mentioned go in between in alphabetical order 

var siteNav = siteLeft.querySelector('.nav-view-outer');

var navContainer = siteNav.querySelector('.tree-item').querySelector('.tree-item-children');

for (const item of navOrderAsc.reverse()){

    querytext = '[data-path="' + item + '"]';

    navItem = navContainer.querySelector(querytext);

    if (navItem == null) continue;

    moveItem = navItem.parentElement;

    navContainer.prepend(moveItem);

}

for (const item of navOrderDsc.reverse()){

    querytext = '[data-path="' + item + '"]';

    navItem = navContainer.querySelector(querytext);

    if (navItem == null) continue;

    moveItem = navItem.parentElement;

    navContainer.append(moveItem);

}
*/;
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
text.addEventListener('mouseleave', () => removeHoverState(logo));;
document.body.appendChild(Object.assign(document.createElement('canvas'), { id: 'canvas', width: 600, height: 400 }));

// Little Canvas things
var canvas = document.querySelector("#canvas"),
    ctx = canvas.getContext('2d');

// Set Canvas to be window size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Configuration, Play with these
var config = {
  particleNumber: 800,
  maxParticleSize: 10,
  maxSpeed: 40,
  colorVariation: 50
};

// Colors
var colorPalette = {
    bg: {r:12,g:9,b:29},
    matter: [
      {r:36,g:18,b:42}, // darkPRPL
      {r:78,g:36,b:42}, // rockDust
      {r:252,g:178,b:96}, // solorFlare
      {r:253,g:238,b:152} // totesASun
    ]
};

// Some Variables hanging out
var particles = [],
    centerX = canvas.width / 2,
    centerY = canvas.height / 2,
    drawBg,

// Draws the background for the canvas, because space
drawBg = function (ctx, color) {
    ctx.fillStyle = "rgb(" + color.r + "," + color.g + "," + color.b + ")";
    ctx.fillRect(0,0,canvas.width,canvas.height);
};

// Particle Constructor
var Particle = function (x, y) {
    // X Coordinate
    this.x = x || Math.round(Math.random() * canvas.width);
    // Y Coordinate
    this.y = y || Math.round(Math.random() * canvas.height);
    // Radius of the space dust
    this.r = Math.ceil(Math.random() * config.maxParticleSize);
    // Color of the rock, given some randomness
    this.c = colorVariation(colorPalette.matter[Math.floor(Math.random() * colorPalette.matter.length)],true );
    // Speed of which the rock travels
    this.s = Math.pow(Math.ceil(Math.random() * config.maxSpeed), .7);
    // Direction the Rock flies
    this.d = Math.round(Math.random() * 360);
};

// Provides some nice color variation
// Accepts an rgba object
// returns a modified rgba object or a rgba string if true is passed in for argument 2
var colorVariation = function (color, returnString) {
    var r,g,b,a, variation;
    r = Math.round(((Math.random() * config.colorVariation) - (config.colorVariation/2)) + color.r);
    g = Math.round(((Math.random() * config.colorVariation) - (config.colorVariation/2)) + color.g);
    b = Math.round(((Math.random() * config.colorVariation) - (config.colorVariation/2)) + color.b);
    a = Math.random() + .5;
    if (returnString) {
        return "rgba(" + r + "," + g + "," + b + "," + a + ")";
    } else {
        return {r,g,b,a};
    }
};

// Used to find the rocks next point in space, accounting for speed and direction
var updateParticleModel = function (p) {
    var a = 180 - (p.d + 90); // find the 3rd angle
    p.d > 0 && p.d < 180 ? p.x += p.s * Math.sin(p.d) / Math.sin(p.s) : p.x -= p.s * Math.sin(p.d) / Math.sin(p.s);
    p.d > 90 && p.d < 270 ? p.y += p.s * Math.sin(a) / Math.sin(p.s) : p.y -= p.s * Math.sin(a) / Math.sin(p.s);
    return p;
};

// Just the function that physically draws the particles
// Physically? sure why not, physically.
var drawParticle = function (x, y, r, c) {
    ctx.beginPath();
    ctx.fillStyle = c;
    ctx.arc(x, y, r, 0, 2*Math.PI, false);
    ctx.fill();
    ctx.closePath();
};

// Remove particles that aren't on the canvas
var cleanUpArray = function () {
    particles = particles.filter((p) => { 
      return (p.x > -100 && p.y > -100); 
    });
};


var initParticles = function (numParticles, x, y) {
    for (let i = 0; i < numParticles; i++) {
        particles.push(new Particle(x, y));
    }
    particles.forEach((p) => {
        drawParticle(p.x, p.y, p.r, p.c);
    });
};

// That thing
window.requestAnimFrame = (function() {
  return window.requestAnimationFrame ||
     window.webkitRequestAnimationFrame ||
     window.mozRequestAnimationFrame ||
     function(callback) {
        window.setTimeout(callback, 1000 / 60);
     };
})();


// Our Frame function
var frame = function () {
  // Draw background first
  drawBg(ctx, colorPalette.bg);
  // Update Particle models to new position
  particles.map((p) => {
    return updateParticleModel(p);
  });
  // Draw em'
  particles.forEach((p) => {
      drawParticle(p.x, p.y, p.r, p.c);
  });
  // Play the same song? Ok!
  window.requestAnimFrame(frame);
};

// Click listener
document.body.addEventListener("click", function (event) {
    var x = event.clientX,
        y = event.clientY;
    cleanUpArray();
    initParticles(config.particleNumber, x, y);
});

// First Frame
frame();

// First particle explosion
initParticles(config.particleNumber);;/* CURRENT JAVASCRIPT ISSUES: IPHONE EDITION
- search-scroll-disable works on desktop but not on mobile :(
- iPhone keyboard makes search height too tall; need a hack to get to current viewport
*/


// SEARCH RESULTS UX
// Get the target node to observe
const targetNode = document.body;

// Options for the observer (which mutations to observe)
const observerOptions = { subtree: true, childList: true };

// Create a new observer instance
const searchResultsNote = new MutationObserver(function(mutationsList, observer) {
  // Loop through each mutation in the mutations list
  for (let mutation of mutationsList) {
    // Check if the mutation added any new nodes
    if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
      // Loop through each added node and check if it has the "suggestion-note" class
      for (let addedNode of mutation.addedNodes) {
        if (addedNode.nodeType === Node.ELEMENT_NODE && addedNode.classList.contains("suggestion-note")) {
          const text = addedNode.innerText;
          
          // Define an object with the text to replace as keys, and their replacements as values
          const replacements = {
            "Forest": "🌲Forest",
            "Forest/AI": "🤖AI",
            "People": "🙇People",
            "Health": "🏥Health",
            "Meta": "🛸Meta",
            "Metaphysics": "🌌Metaphysics",
            "Opine": "🧵Opine",
            "PathOS": "🧘🏻PathOS",
            "Patterns": "🧩Patterns",
            "Personal": "🖤Personal",
            "Personal/Projects": "🛠️Projects",
            "Reading": "📕Reading",
            "Workshop": "🎨Workshop",
            "Writing": "🧶Stories",
            // Add more replacements here
          };

          // Loop through the keys of the replacements object and check if the text includes any of them
          for (let key of Object.keys(replacements)) {
            if (text.includes(key)) {
              // If it does, replace it with the corresponding value
              addedNode.innerText = text.replace(key, replacements[key]);
            }
          }
        }
      }
    }
  }
});

// Start observing the target node for mutations
searchResultsNote.observe(targetNode, observerOptions);



/* Enable virtual keyboard API, used to change search-results height. Doesn't seem to work with css "env(keyboard-inset-height)"
// https://www.bram.us/2021/09/13/prevent-items-from-being-hidden-underneath-the-virtual-keyboard-by-means-of-the-virtualkeyboard-api/
if ("virtualKeyboard" in navigator) {
  navigator.virtualKeyboard.overlaysContent = true;
}*/

// Disable annoying autocomplete/spellcheck on iphone
document.querySelector('.search-bar').setAttribute('spellcheck', 'false');
document.querySelector('.search-bar').setAttribute('autocorrect', 'off');
document.querySelector('.search-bar').setAttribute('autocomplete', 'off');


// SEARCH CLOSE BUTTON
const searchInput = document.querySelector('.search-bar');
const searchIcon = document.querySelector('.published-search-icon');
const searchBackground = document.querySelector('.publish-renderer');
const searchScrollBackground = document.querySelector('.markdown-preview-view');

document.querySelector('.published-search-icon').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#8598AD" d="M9 0a8.99 8.99 0 1 0 0 18A8.99 8.99 0 1 0 9 0Zm2.9 13.22L9 10.33l-2.88 2.89c-.87.86-2.18-.47-1.34-1.33L7.68 9l-2.9-2.89c-.87-.86.47-2.17 1.34-1.33L9 7.67l2.9-2.89c.86-.86 2.17.47 1.33 1.33L10.33 9l2.9 2.89c.84.84-.5 2.17-1.34 1.33Z"/></svg>';

// Add new icon, which normally will be display:none
searchInput.addEventListener('focus', () => {
  searchIcon.classList.add('icon-close');
  searchBackground.classList.add('search-blur-bg');
  searchScrollBackground.classList.add('search-scroll-disable');
});

searchInput.addEventListener('blur', () => {
  searchInput.value = ''; // clear the search input
  searchIcon.classList.remove('icon-close');
  searchBackground.classList.remove('search-blur-bg');
  searchScrollBackground.classList.remove('search-scroll-disable');
  // REMOVE SEARCH UPON LOSS OF FOCUS (close iPhone keyboard after typing something)
  // This breaks clicking results on desktop, hence min width
  if (document.querySelector(".search-results") !== null && $(window).width() < 600) {
    document.querySelector(".search-results").remove();
  }
});

// this icon is only used for mobile
searchIcon.addEventListener('click', () => {
  searchInput.value = ''; // clear the search input
  searchIcon.classList.remove('icon-close');
  searchBackground.classList.remove('search-blur-bg');
  searchScrollBackground.classList.remove('search-scroll-disable');
});

document.addEventListener('keydown', function(event) {
  if (event.key === '/' && document.activeElement !== searchInput) {
    searchInput.focus();
    // Prevent the "/" key from being typed in the search box
    event.preventDefault();
  }
  // Close search box after using enter key to navigate to page
  if (event.key === 'Enter' && document.activeElement === searchInput) {
    searchInput.blur();
  }
  if (event.key === 'Escape' && document.activeElement === searchInput) {
    searchInput.value = ''; // Clear the search input
    searchInput.blur(); 
    searchIcon.classList.remove('icon-close');
    searchBackground.classList.remove('search-blur-bg');
    searchScrollBackground.classList.remove('search-scroll-disable');
    // REMOVE SEARCH UPON ESCAPE PRESS
    const searchResultsBox = document.querySelector(".search-results"); // must declare here to find it in DOM
    if (searchResultsBox && searchResultsBox.offsetParent !== null) {
      searchResultsBox.remove();
    }
  }
});
;// Add .skew-top .skew-bg to DOM
document.querySelector('.site-body').appendChild(Object.assign(document.createElement('div'), {className: 'skew-top'}));
document.querySelector('.skew-top').appendChild(Object.assign(document.createElement('div'), {className: 'skew-top-bg'}));
;/* Telescope Mode */

document.getElementsByClassName("graph-global")[0].setAttribute('aria-label-position','bottom');
document.getElementsByClassName("graph-global")[0].setAttribute('aria-label','Telescope Mode');
document.getElementsByClassName("graph-expand")[0].setAttribute('aria-label','');


// Get rid of the 'site unlocked' modal when you unlock the site, saving a click
function removeModalContainerOnButtonClick() {
  const modCtaButton = document.querySelector('.mod-cta');
  if (modCtaButton) {
    const modalContainer = document.querySelector('.modal-container');
    if (modalContainer) {
      modalContainer.remove();
    }
  }
}
observer = new MutationObserver(function(mutationsList, observer) {
  for (let mutation of mutationsList) {
    if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
      removeModalContainerOnButtonClick();
    }
  }
});
observer.observe(document.body, { childList: true, subtree: true });
