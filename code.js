

document.addEventListener("DOMContentLoaded", function() {
    console.log("content loaded");

    var headerLoaded = false;
    var footerLoaded = false;

    $("#headerLoad").load("header.html", function() {
        var queryLink = window.location.pathname;


        if (queryLink.includes("index")) {
            document.querySelector("#homeNav").classList.add("active");
        } else if (queryLink.includes("services")) {
            document.querySelector("#servicesNav").classList.add("active");
        } else if (queryLink.includes("portfolio")) {
            document.querySelector("#portfolioNav").classList.add("active");
        } else if (queryLink.includes("aboutme")) {
            document.querySelector("#aboutmeNav").classList.add("active");
        } else {
            window.location.href = "index.html";
        }

        // Image Button click event
        const imgButtons = document.querySelectorAll('.imgClick');
        var imgSound = document.getElementById("imgClick");

        imgButtons.forEach(function(button) {
            button.onclick = function() {
                imgSound.play();
            }
        });
        headerLoaded = true;
    }); 
    $("#footerLoad").load("footer.html", function() {
        // Image Button click event
        const imgButtons = document.querySelectorAll('.imgClick');
        var imgSound = document.getElementById("imgClick");

        imgButtons.forEach(function(button) {
            button.onclick = function() {
                imgSound.play();
            }
        });
        footerLoaded = true;
    });
    $("#contactmeArea").load("contactArea.html", function() {
        var contactButton = document.querySelector(".contact-page");

        contactButton.addEventListener("click", () => {
            window.location.href = "aboutme.html";
        });
    });

    function code() {

        var tosLists = document.querySelectorAll(".tosList");

        tosLists.forEach(function(listitem) {
            listitem.addEventListener("mouseover", () => {
                listitem.classList.add("active");
            });
            listitem.addEventListener("mouseout", () => {
                listitem.classList.remove("active");
            });
        });

        var reveals = this.document.querySelectorAll(".reveal");
        var revealsLeft = this.document.querySelectorAll(".revealLeft");
        var revealsRight = this.document.querySelectorAll(".revealRight");
        const revealArray = {
            reveal: reveals,
            revealLeft: revealsLeft,
            revealRight: revealsRight
        };
        function beforeScroll() {
            // reveal on sight
            for (const key in revealArray) {
                if (!revealArray.hasOwnProperty(key)) {continue;}
                for (let i = 0; i < revealArray[key].length; i++) {
                    var winHeight = this.window.innerHeight;
                    var revealTop = revealArray[key][i].getBoundingClientRect().top;
                    var revealPoint = -50;

                    if (revealTop < winHeight - revealPoint) {
                        revealArray[key][i].classList.add("onScreen");
                    } else {
                        revealArray[key][i].classList.remove("onScreen");
                    }
                }
            }
        }
        beforeScroll();
        // Scroll event
        window.addEventListener("scroll", function() {
            var header = document.getElementById("header");
            var big_picture = this.document.getElementById("background-image");
            

            // Header changes color
            if (window.scrollY >= 100) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }

            // Big picture loses opacity
            if (big_picture) {
                if (this.window.scrollY >= 150 && this.window.scrollY < 250) {
                    big_picture.style.opacity = 0.9;
                } else if (this.window.scrollY >= 250 && this.window.scrollY < 350) {
                    big_picture.style.opacity = 0.8;
                } else if (this.window.scrollY >= 350) {
                    big_picture.style.opacity = 0.5;
                } else {
                    big_picture.style.opacity = 1;
                }
            } 

            // Reveal on sight
            beforeScroll();
        });
    }

    function waitUntilLoaded() {
        if (!footerLoaded || !headerLoaded) {
            setTimeout(() => {
                waitUntilLoaded();
            }, 300);
        } else if (footerLoaded && headerLoaded) {
            code();
            return null;
        }
    }

    waitUntilLoaded();
});