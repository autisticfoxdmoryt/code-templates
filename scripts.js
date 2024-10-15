/* scripts.js */
function searchTemplates() {
    let input = document.getElementById('searchBar').value.toLowerCase();
    let templates = document.getElementsByClassName('template');

    for (let i = 0; i < templates.length; i++) {
        let templateName = templates[i].getAttribute('data-name').toLowerCase();
        if (templateName.includes(input)) {
            templates[i].style.display = "";
        } else {
            templates[i].style.display = "none";
        }
    }
}
