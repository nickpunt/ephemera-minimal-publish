// Add .skew-top .skew-bg to DOM
document.querySelector('.site-body').appendChild(Object.assign(document.createElement('div'), {className: 'skew-top'}));
document.querySelector('.skew-top').appendChild(Object.assign(document.createElement('div'), {className: 'skew-top-bg'}));
