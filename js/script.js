function nav_open() {
    document.getElementById("nav").style.display = "block";
}

function nav_close() {
    document.getElementById("nav").style.display = "none";
}

var sectionsClassName = ['about_container', 'project_container', 'resume_container', 'contact_container']

function set(show) {
    console.log(show);
    document.getElementById(show).style.display = "block";
    var filtered = sectionsClassName.filter(function(value) {
        return value !== show;
    });
    for (hide of filtered) {
        document.getElementById(hide).style.display = "none";
    }
}