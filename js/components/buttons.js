export default class Button {

    // Params:
    // Texto: Cadena texto en formato string
    // Color: Cadena texto de color en formato hexadecimal sin #
    constructor(texto, css_class){
        this.text = texto;
        this.css_class = css_class;
    }

    render() {
        //let myHTML = "<Button>"+this.text+ "</Button>";

        // comillas con alt 96
        let myHTML = `<button class=${this.css_class} >${this.text}</button>`;
        
        return myHTML;
    }

}