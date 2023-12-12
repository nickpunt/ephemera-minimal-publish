/* Telescope Mode */

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
