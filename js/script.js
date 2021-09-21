//global variables

var projurl = "https://fmascare.github.io/JavaScriptProjects";
var linkedinurl = "https://www.linkedin.com/in/faricamascarenhas";
var giturl = "https://github.com/fmascare";

//function to display and close navigation menu displayed at the
//top of the screen when window is resized

function displayMenu() {
    var topNav = document.getElementById("topnav");
    topNav.style.visibility = "visible";
}

function closeMenu() {
    var topNav = document.getElementById("topnav");
    topNav.style.visibility = "hidden";
}

//Top Nav event Handlers

var btnListener = document.getElementById("menuIcon");
if(btnListener) {
    btnListener.addEventListener("click", function() {
        if(btnListener.classList.contains("active")) {
            btnListener.classList.remove("active");
            closeMenu();
            btnListener.innerHTML = '<i class="fa fa-bars"></i>';
        }
        else {
            btnListener.classList.add("active");
            displayMenu();
            btnListener.innerHTML = '<i class="fas fa-times"></i>';
        }
    });
}

var projectLink = document.getElementById("projlink");
if (projectLink) {
    projectLink.addEventListener("click", function() {
        window.open(projurl, '_blank').focus();
    });
}

var emaillink = document.getElementById("emaillink");
if (emaillink) {
    emaillink.addEventListener("click", function() {
        window.open('mailto:fem0022@gmail.com');
    });
}

var lilink = document.getElementById("lilink");
if (lilink) {
    lilink.addEventListener("click", function() {
        window.open(linkedinurl, '_blank').focus();
    });
}

var gitlink = document.getElementById("gitlink");
if (gitlink) {
    gitlink.addEventListener("click", function() {
        window.open(giturl, '_blank').focus();
    });
}

//Side Nav event Handlers

var projectBtn = document.getElementById("projects");
if (projectBtn) {
    projectBtn.addEventListener("click", function() {
        window.open(projurl, '_blank').focus();
    });
    
    if (! projectBtn.classList.contains("active")) {
        projectBtn.addEventListener("mouseover", function() {
            projectBtn.style.color = "#C6DE41";
            document.getElementById("projlabel").style.visibility = "visible";
        });
    
        projectBtn.addEventListener("mouseout", function() {
            projectBtn.style.color = "#fff";
            document.getElementById("projlabel").style.visibility = "hidden";
        });
    }
}

var emailBtn = document.getElementById("contact");
if (emailBtn) {
    emailBtn.addEventListener("click", function() {
        window.open('mailto:fem0022@gmail.com');
    });
    
    emailBtn.addEventListener("mouseover", function() {
        emailBtn.style.color = "#C6DE41";
        document.getElementById("emaillabel").style.visibility = "visible";
    });

    emailBtn.addEventListener("mouseout", function() {
        emailBtn.style.color = "#fff";
        document.getElementById("emaillabel").style.visibility = "hidden";
    });
}

var socialBtn = document.getElementById("linkedin");
if (socialBtn) {
    socialBtn.addEventListener("click", function() {
        window.open(linkedinurl, '_blank').focus();
    });
    
    socialBtn.addEventListener("mouseover", function() {
        socialBtn.style.color = "#C6DE41";
        document.getElementById("sociallabel").style.visibility = "visible";
    });

    socialBtn.addEventListener("mouseout", function() {
        socialBtn.style.color = "#fff";
        document.getElementById("sociallabel").style.visibility = "hidden";
    });
}

var gitBtn = document.getElementById("github");
if (gitBtn) {
    gitBtn.addEventListener("click", function() {
        window.open(giturl, '_blank').focus();
    });
    
    gitBtn.addEventListener("mouseover", function() {
        gitBtn.style.color = "#C6DE41";
        document.getElementById("gitlabel").style.visibility = "visible";
    });

    gitBtn.addEventListener("mouseout", function() {
        gitBtn.style.color = "#fff";
        document.getElementById("gitlabel").style.visibility = "hidden";
    });
}

//Resume event Handler

var resumeListener = document.getElementById("resumeBtn");
if (resumeListener) {
    resumeListener.addEventListener("click", function() {
        window.open("./files/Farica_Mascarenhas_Resume.pdf", '_blank').focus();
    });
}