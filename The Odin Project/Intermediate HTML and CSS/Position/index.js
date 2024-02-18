/**
 * @type {HTMLElement[]}
 */
const stickyElements = document.querySelectorAll("[sticky=true]");
/**
 * Changer function
 * @param {HTMLElement[]} nodeList
 * @param {scrollY} scrollY
 */
function changer(nodeList, scrollY) {
  for (let node of nodeList) {
    node.style.position !== "fixed" && node.setAttribute("top", node.offsetTop);
    const top = node.getAttribute("top");
    if (top <= scrollY) {
      node.style.cssText = `
        position: fixed;
        top: 0;
      `;
    } else {
      node.style.cssText = `
            position: relative;
            top: ${node.getAttribute("top")}px;
        `;
    }
  }
}

window.onscroll = function () {
  changer(stickyElements, window.scrollY);
};
