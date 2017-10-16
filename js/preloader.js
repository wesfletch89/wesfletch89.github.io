var myVar;

function preloader() {
    myVar = setTimeout(showPage, 5000);
    jQuery(".loading-text").fadeOut();
    jQuery(".loading").delay(1000).fadeOut(1000);
    jQuery("body").fadeIn("slow");
}

function showPage() {
    document.getElementById("loading").classList.add('hidden');
}
