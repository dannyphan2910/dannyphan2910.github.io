// load projects
function loadJSON(callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'assets/projects.json', true); // path to file
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}

// add card
function addCard(imgSrc = 'https://images.pexels.com/photos/2529973/pexels-photo-2529973.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', projectUrl = '', projectTitle = 'Project Title', projectInfo, tags = []) {
    var tagsHTML = '';
    var tagsClass = '';
    tags.forEach(tag => {
        tagKeyword = tag.split(" ").join("").toLowerCase()
        tagsHTML += `<li onclick="filter('${tagKeyword}')"}>${tag}</li>`;
        tagsClass += tagKeyword + ' ';
    });

    var toAdd = `<div class="post ${tagsClass}">
                    <div class="header_post">
                        <img src=${imgSrc} alt="project img">
                    </div>

                    <div class="body_post">
                        <div class="post_content">
                            <a href="${projectUrl}" target="_blank"><h1>${projectTitle}</h1></a>
                            <p>${projectInfo}</p>

                            <div class="container_infos">
                                <div class="container_tags">
                                    <span>tags</span>
                                    <div class="tags">
                                        <ul>
                                            ${tagsHTML}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
    $("#project-card-container").append(toAdd);
}

// filter cards
function filter(tag = '') {
    $("div.post").show();
    $("div.post").removeClass('first-card');
    if (tag != '') {
        // hide elements not with that tag
        $("div.post").not("." + tag).hide();
        $(".project-btns button").show();
    } else {
        $(".project-btns button").hide();
    }

    // first card no margin left
    $("div.post:visible:eq(0)").addClass('first-card');

    // auto scroll buttons 
    if ($("#project-card-container").get(0).scrollWidth - $("#project-card-container").get(0).clientWidth <= 0) {
        $(".btn-left-icon").hide();
        $(".btn-right-icon").hide();
    } else {
        toggleScrollBtn();
    }
}

// scroll buttons for cards
function toggleScrollLeft() {
    $("#project-card-container").animate({ scrollLeft: 0 }, { duration: 1000 });
}

function toggleScrollRight() {
    $("#project-card-container").animate({ scrollLeft: $("#project-card-container").get(0).scrollWidth - $("#project-card-container").get(0).clientWidth }, { duration: 1000 });
}

function toggleScrollBtn() {
    if ($("#project-card-container").scrollLeft() == 0) {
        $(".btn-left-icon").hide();
        $(".btn-right-icon").show('smooth');
    } else if ($("#project-card-container").scrollLeft() == $("#project-card-container").get(0).scrollWidth - $("#project-card-container").get(0).clientWidth) {
        $(".btn-left-icon").show('smooth');
        $(".btn-right-icon").hide();
    } else {
        $(".btn-left-icon").show('smooth');
        $(".btn-right-icon").show('smooth');
    }
}

// modal

function closeModal() {
    $(".modal").hide();
}

function openModal() {
    $(".modal").show();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == document.getElementById("modal")) {
      this.closeModal();
    }
}