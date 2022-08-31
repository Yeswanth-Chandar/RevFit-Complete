"use strict";

(function() {

    function getComputedStyle(el) {
        var style = window.getComputedStyle(el);
        return (style);
    }

    function isBlockShown(el) {
        return getComputedStyle(el).display === 'block';
    }

    function setBottomPadding(element, value) {
        element.style.paddingBottom = value;
    }


    function initPreventFooterOverlap() {
        var pageFooter = document.getElementById("footer");
        var pageFooterBp = getComputedStyle(pageFooter).paddingBottom;
        var revfitCloseButton = document.querySelector(".revfit-close");


        revfitCloseButton.addEventListener('click', function() {
            setBottomPadding(pageFooter, pageFooterBp);
        });
    }

    function initLanguageSelection() {
        var locale = document.getElementById("navbar-locale-selected");

        // skip if page does not have language selection (EG: blog)
        if (!locale) return;

        var localeOpen = false;

        locale.addEventListener("click", function() {
            document.getElementById("navbar-locale-menu")
                .classList.toggle("visible");
            localeOpen = !localeOpen;
        }, false);

        var localeParent = document.getElementById("navbar-locale-menubar");

        window.addEventListener("click", function(event) {
            if (localeOpen && !localeParent.contains(event.target)) {
              document.getElementById("navbar-locale-menu")
                  .classList.remove("visible");
              localeOpen = false;
            }
        }, true);
    }

    function navigationClick(event) {
        document.getElementById("navbar-menu")
            .classList.toggle("visible");
    }

    function initMenu() {
        document.getElementById("navbar-menu-toggle")
            .addEventListener("click", navigationClick, false);

        var targetBlankLinks = [].slice.call(
            document.querySelectorAll('#navbar-menu [target="_blank"]'));

        // close navbarMenu when target _blank links are clicked
        for (var i = 0; i < targetBlankLinks.length; i++) {
            targetBlankLinks[i].addEventListener("click", function() {
                document.getElementById("navbar-menu")
                     .classList.remove("visible");
            }
            , false)
        }
    }

    function initNavbarToggle() {
        var navbar = document.getElementById("navbar");
        var navbarLocale = document.getElementById("navbar-locale-menu");
        var navbarHeight = navbar.offsetHeight;
        var scrollHandled = false;
        var lastScrollTop = 0;
        var newScrollAction = false;

        // IE9 does not support offsetHeight when element is fixed
        if (!navbarHeight)
            return;

        window.addEventListener("scroll", function() {
            scrollHandled = false;
        });

        document.addEventListener("click", function(target) {
            newScrollAction = false;
        });

        setInterval(function() {
          if (
            !scrollHandled &&
            ( // locale menu is not visible
              !navbarLocale || // our blog doesn't have a locale menu
              !navbarLocale.classList.contains("visible")
            )
          ) {
              scrollHandled = handleScroll();
          }
        }, 250);

        function handleScroll() {
            var currentScroll = window.pageYOffset;
            var hash = document.location.hash;

            setTimeout(function() {
                if (hash !== "" && currentScroll > navbarHeight) {
                    navbar.style.top = "-" + navbarHeight + "px";
                    newScrollAction = true;
                }
            }, 20)

            if (newScrollAction)
                hash = "";

            if (currentScroll > lastScrollTop && currentScroll > navbarHeight) {
                navbar.style.top = "-" + navbarHeight + "px";
            } else {
                navbar.style.top = 0;
            }

            lastScrollTop = currentScroll;
            return true;
        }
    }

    // logic for floating TOC a.k.a. table of contents
    function initTOCScroll() {
        var floatingTOC = document.getElementById("toc-float");

        // check if element exists due to using different templates
        if (!floatingTOC) return;

        var pageContainer = document.querySelector(".toc-page-container");

        function updateActiveTOCLink() {
            var headingLinks = document.querySelectorAll("#toc-float a");

            for (var i = 0; i < headingLinks.length; i++) {
                headingLinks[i].classList.remove("active");
            }

            var contentHeadings = document.querySelectorAll(".toc-page-container > h2, .toc-page-container > h3");

            // convert NodeList to an Array so we can sort
            contentHeadings = Array.prototype.slice.call(contentHeadings);

            contentHeadings.sort(function(a,b) {
                // sort by distance to 0 (page top)
                return Math.abs(a.getBoundingClientRect().top) - Math.abs(b.getBoundingClientRect().top);
            });

            var headingLink = document.querySelector("#toc-float [href='#"+ contentHeadings[0].id +"']");

            headingLink.classList.add("active");

            //console.log(floatingTOC.getBoundingClientRect().top, headingLink.getBoundingClientRect().bottom);
        }

        // call the function before scroll event to ensure the active headline is always highlighted
        updateActiveTOCLink();

        function updateFloatingTOCPosition() {
            var containerBounds = pageContainer.getBoundingClientRect();
            var topPosition = containerBounds.top > 70;
            // accounted am additional 18px for floatingTOC CSS margin-top
            var maxTOCheight = window.innerHeight - 88 - 20;
            var expectedTOCHeight = Math.min(floatingTOC.getBoundingClientRect().height, maxTOCheight);
            var bottomPosition = !topPosition && containerBounds.bottom < 70 + 20 + expectedTOCHeight;

            floatingTOC.style.marginTop = "";

            if (topPosition || bottomPosition) {
                floatingTOC.classList.remove("fixed");
                floatingTOC.style.maxHeight = "";
                floatingTOC.style.top = "";

                if (bottomPosition) {
                    floatingTOC.style.marginTop = containerBounds.height - floatingTOC.getBoundingClientRect().height + "px";
                }
            } else {
                floatingTOC.classList.add("fixed");
                floatingTOC.style.top = 70 + "px";

                floatingTOC.style.maxHeight = maxTOCheight + "px";
            }
        }
        // ensure TOC is correctly position on reload
        updateFloatingTOCPosition();

        document.addEventListener('scroll', function(e) {
            updateActiveTOCLink();
            updateFloatingTOCPosition();
        });
        window.addEventListener('resize', updateFloatingTOCPosition);
    }

    initLanguageSelection();
    initMenu();
    initNavbarToggle();
    initPreventFooterOverlap();
    initTOCScroll();
})();

