$(document).ready(function() {
});

function resizeIframe(iframe) {
    var body = iframe.contentWindow.document.body,
    html = iframe.contentWindow.document.documentElement;
    var height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
    iframe.height = height + 500 + "px";
    iframe.contentWindow.document.body.focus();
}

function toggleShowHide(id) {
    var x = document.getElementById(id);
    if (x.style.display !== "block") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
