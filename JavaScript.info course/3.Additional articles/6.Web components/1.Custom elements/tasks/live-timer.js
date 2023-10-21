class LiveTimer extends HTMLElement {
    constructor() {
        super();
    }
    render(){
        this.innerText = new Date().toLocaleString()
    }
    connectedCallback(){
        if(!this.rendered){
            this.render()
            this.rendered = true
        }
        const tickEvent = new CustomEvent('tick', {
            bubbles: true,
            detail: {
                time: this.innerText
            }
        })
        setInterval(() => {
            this.render()
            tickEvent.detail.time = this.innerText
            this.dispatchEvent(tickEvent)
        }, 1000)

    }
}

customElements.define("live-timer", LiveTimer);