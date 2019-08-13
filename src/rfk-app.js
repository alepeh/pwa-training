class RfkApp extends HTMLElement {

    constructor(){
        // Always call the parent constructor first
        super();
        // Attach a new shadow root
        const root = this.attachShadow({mode: "open"});
        // Clone the template
        const template = document.getElementById("app-greeting");
        const templateContent = template.content;
        // append the template 
        root.appendChild(
            templateContent.cloneNode(true)
          );
    }


}
window.customElements.define('rfk-app', RfkApp);