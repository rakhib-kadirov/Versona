export function scrollToElement() {
    var elmnt = document.getElementById("contact");
    elmnt.scrollIntoView({ behavior: 'smooth', block: 'start' });
}