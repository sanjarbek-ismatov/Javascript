/**
 * The template of custom menu
 * @type {HTMLTemplateElement}
 */
const menuTemplate = document.getElementById('menu-template')
class CustomMenu extends HTMLElement{
    connectedCallback(){
        const shadow = this.attachShadow({mode: 'open'})
        shadow.append(menuTemplate.content.cloneNode(true))
    }
}
