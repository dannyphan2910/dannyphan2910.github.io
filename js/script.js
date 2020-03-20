function nav_open() {
    document.getElementById("nav").style.display = "block";
}

function nav_close() {
    document.getElementById("nav").style.display = "none";
}

var sectionsClassName = ['about_container', 'project_container', 'resume_container', 'contact_container']

function set(show) {
    document.getElementById(show).style.display = "block";
    var filtered = sectionsClassName.filter(function(value) {
        return value !== show;
    });
    for (hide of filtered) {
        document.getElementById(hide).style.display = "none";
    }
}

function addCard(divId, cardCategory, cardTitle, cardBy, link) {
    const toAdd =  `<div class="card">
                        <div class="card_info">
                            <span class="card_category">${cardCategory}</span>
                            <h3 class="card_title">${cardTitle}</h3>
                            <span class="card_by">by <a href="${link || '#'}" class="card_author" title="author">${cardBy}</a></span>
                        </div>
                    </div>`;
    document.getElementById(divId).innerHTML += toAdd;
}