// dyanmiczne ladowanie obrazow z JSON
/*document.addEventListener('DOMContentLoaded', function() {
    const folderToPageMapping = {
        "2inMedia": "/page1subpages/page1-1.html",
        "2.5inMedia": "/page1subpages/page1-2.html",
        "2.6inMedia": "/page1subpages/page1-3.html",
        "2.8inMedia": "/page1subpages/page1-4.html",
        "3inMedia": "/page1subpages/page1-5.html",
        "3.5inMedia": "/page1subpages/page1-6.html",
        "3.94inMedia": "/page1subpages/page1-7.html",
        "5.25inMedia": "/page1subpages/page1-8.html",
        "8inMedia": "/page1subpages/page1-9.html",
        "32sMedia": "/page13subpages/page13-1.html",
        "35sMedia": "/page13subpages/page13-2.html",
        "48sMedia": "/page13subpages/page13-3.html",
        "72sMedia": "/page13subpages/page13-4.html",
        "87sMedia": "/page13subpages/page13-5.html",
        "discsMedia": "/subpages/page2.html",
        "rmvdiscsMedia": "/subpages/page3.html",
        "tapescassettesMedia": "/subpages/page4.html",
        "otherMedia": "/subpages/page5.html",
        "butterfliesMedia": "/subpages/page6.html",
        "cpusMedia": "/subpages/page7.html",
        "hddsMedia": "/subpages/page8.html",
        "bulbsMedia": "/subpages/page9.html",
        "lotsMedia": "/subpages/page10.html",
        "mineralsMedia": "/subpages/page11.html",
        "cardsMedia": "/subpages/page12.html",
        "cupsMedia": "/subpages/page14.html",
        "santanasMedia": "/subpages/page15.html",
        "stampsMedia": "/subpages/page16.html",
        "stickersMedia": "/subpages/page17.html",
        "tdkMedia": "/subpages/page18.html",
        "trainsMedia": "/subpages/page19.html",
        "wantedMedia": "/subpages/page20.html"
    };

    // Funkcja do usuwania rozszerzenia z nazwy pliku
    function removeExtension(filename) {
        return filename.replace(/\.[^/.]+$/, "");
    }

    // Funkcja do tworzenia bezpiecznej nazwy klasy CSS
    function createSafeClassName(filename) {
        return `photo-of-${removeExtension(filename)
            .replace(/\s+/g, '-') // Zamień spacje na myślniki
            .replace(/[^a-zA-Z0-9-]/g, '') // Usuń znaki specjalne
            .toLowerCase()}`;
    }

    // Funkcja do tworzenia CSS
    function generateCSS(folder, filename) {
        const className = createSafeClassName(filename);
        const cssRule = `.${className} { background-image: url("../${folder}/${filename.replace(/ /g, '%20')}"); }`;
        return cssRule;
    }

    // Funkcja do znajdowania aktualnego folderu na podstawie URL
    function getCurrentFolder() {
        const currentPath = window.location.pathname;
        for (const [folder, page] of Object.entries(folderToPageMapping)) {
            if (page === currentPath) {
                return folder;
            }
        }
        return null;
    }

    // Funkcja do bezpiecznego dodawania reguł CSS
    function addCSSRule(styleElement, rule) {
        try {
            styleElement.sheet.insertRule(rule, styleElement.sheet.cssRules.length);
        } catch (e) {
            console.error('Failed to insert CSS rule:', rule, e);
        }
    }

    // Główna funkcja generująca elementy
    function generateElementsFromJSON(jsonData) {
        const currentFolder = getCurrentFolder();
        if (!currentFolder || !jsonData[currentFolder]) {
            console.log('No matching folder found for this page');
            return;
        }

        const container = document.querySelector('.container');
        if (!container) {
            console.error('Container element not found');
            return;
        }

        const styleElement = document.createElement('style');
        document.head.appendChild(styleElement);

        jsonData[currentFolder].forEach(filename => {
            const blockWrapper = document.createElement('div');
            blockWrapper.className = 'block-wrapper';
            
            const fileNameWithoutExt = removeExtension(filename);
            const className = createSafeClassName(filename);
            
            const link = document.createElement('a');
            link.href = `../${currentFolder}/${filename.replace(/ /g, '%20')}`;
            link.className = `blockZ ${className}`;
            
            const caption = document.createElement('span');
            caption.className = 'block-caption';
            caption.textContent = fileNameWithoutExt;
            
            blockWrapper.appendChild(link);
            blockWrapper.appendChild(caption);
            container.appendChild(blockWrapper);
            
            const cssRule = generateCSS(currentFolder, filename);
            addCSSRule(styleElement, cssRule);
        });
    }

    // Ładowanie pliku JSON
    fetch('../images.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        generateElementsFromJSON(data);
    })
    .catch(error => {
        console.error('Error loading JSON:', error);
    });
});*/
//obsluga fade-in fade-out
document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.remove("fade-out");
    document.body.classList.add("fade-in");
    const links = document.querySelectorAll("a");
    links.forEach(link => {
        link.addEventListener("click", (event) => {
            if (link.href && link.href.startsWith(window.location.origin)) {
                event.preventDefault();
                document.body.classList.add("fade-out");

                setTimeout(() => {
                    window.location.href = link.href;
                }, 50); 
            }
        });
    });
});
// obsluga nav
document.addEventListener("DOMContentLoaded", () => {
    const navElements = document.querySelectorAll(".block-wrapper, .header-link, .header-button");

    navElements.forEach(nav => {
        nav.addEventListener("click", () => {
            const url = nav.getAttribute("data-url");
            if (url) {
                window.location.href = url; 
            }
        });
    });
});
//obsluga powieszkania zdjec
document.addEventListener('DOMContentLoaded', function() {
    let currentIndex = -1;
    let blockZElements = [];

    function openOverlay(index) {
        const clickedElement = blockZElements[index];
        if (!clickedElement) return;

        const overlay = document.createElement('div');
        overlay.className = 'image-overlay';

        const img = document.createElement('img');
        img.src = clickedElement.href;

        overlay.appendChild(img);
        document.body.appendChild(overlay);

        requestAnimationFrame(() => {
            overlay.style.opacity = 1;
            img.style.transform = 'scale(1)';
        });

        function closeOverlay() {
            overlay.style.opacity = 0;
            img.style.transform = 'scale(0.8)';
            setTimeout(() => {
                document.body.removeChild(overlay);
                document.removeEventListener('keydown', keyHandler);
            }, 300);
        }

        function keyHandler(e) {
            if (e.key === 'Escape') {
                closeOverlay();
            } else if (e.key === 'ArrowRight') {
                currentIndex = (currentIndex + 1) % blockZElements.length;
                img.src = blockZElements[currentIndex].href;
            } else if (e.key === 'ArrowLeft') {
                currentIndex = (currentIndex - 1 + blockZElements.length) % blockZElements.length;
                img.src = blockZElements[currentIndex].href;
            }
        }

        document.addEventListener('keydown', keyHandler);

        overlay.addEventListener('click', function() {
            closeOverlay();
        });
    }

    document.body.addEventListener('click', function(event) {
        const clickedElement = event.target.closest('.blockZ');
        if (!clickedElement) return;

        event.preventDefault();

        blockZElements = Array.from(document.querySelectorAll('.container .blockZ'));
        currentIndex = blockZElements.indexOf(clickedElement);

        openOverlay(currentIndex);
    });
});
//lazy loading
/*document.addEventListener("DOMContentLoaded", () => {
    const lazyElements = document.querySelectorAll(".block, .blockZ");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log(`Lazy loaded element:`, element);
                const element = entry.target;
                element.classList.add('loaded');
                observer.unobserve(element);
            }
        });
    });

    lazyElements.forEach(element => observer.observe(element));
});*/
// Obsluga backspace
document.addEventListener("DOMContentLoaded", () => {
    const headerButton = document.querySelector(".header-button");

    document.addEventListener("keydown", (event) => {
        if (event.key === "Backspace") {
            event.preventDefault();
            const url = headerButton.getAttribute("data-url");
            if (url) {
                window.location.href = url;
            }
        }
    });
});
//test swipe gestures na mobile
let touchStartX = 0;
let touchEndX = 0;

function handleGesture() {
    if (!overlayActive) return; // tylko jak overlay aktywny
    const swipeThreshold = 50; // minimalny ruch żeby zaliczyć swipe
    if (touchEndX < touchStartX - swipeThreshold) {
        showNextImage(); // Funkcja zmiany na następne zdjęcie
    }
    if (touchEndX > touchStartX + swipeThreshold) {
        showPreviousImage(); // Funkcja zmiany na poprzednie zdjęcie
    }
}

document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
}, false);

document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleGesture();
}, false);
//
//nowa wersja .json loading + lazy loading
document.addEventListener('DOMContentLoaded', function() {
    const folderToPageMapping = {
        "2inMedia": "/page1subpages/page1-1.html",
        "2.5inMedia": "/page1subpages/page1-2.html",
        "2.6inMedia": "/page1subpages/page1-3.html",
        "2.8inMedia": "/page1subpages/page1-4.html",
        "3inMedia": "/page1subpages/page1-5.html",
        "3.5inMedia": "/page1subpages/page1-6.html",
        "3.94inMedia": "/page1subpages/page1-7.html",
        "5.25inMedia": "/page1subpages/page1-8.html",
        "8inMedia": "/page1subpages/page1-9.html",
        "32sMedia": "/page13subpages/page13-1.html",
        "35sMedia": "/page13subpages/page13-2.html",
        "48sMedia": "/page13subpages/page13-3.html",
        "72sMedia": "/page13subpages/page13-4.html",
        "87sMedia": "/page13subpages/page13-5.html",
        "discsMedia": "/subpages/page2.html",
        "rmvdiscsMedia": "/subpages/page3.html",
        "tapescassettesMedia": "/subpages/page4.html",
        "otherMedia": "/subpages/page5.html",
        "butterfliesMedia": "/subpages/page6.html",
        "cpusMedia": "/subpages/page7.html",
        "hddsMedia": "/subpages/page8.html",
        "bulbsMedia": "/subpages/page9.html",
        "lotsMedia": "/subpages/page10.html",
        "mineralsMedia": "/subpages/page11.html",
        "cardsMedia": "/subpages/page12.html",
        "cupsMedia": "/subpages/page14.html",
        "santanasMedia": "/subpages/page15.html",
        "stampsMedia": "/subpages/page16.html",
        "stickersMedia": "/subpages/page17.html",
        "tdkMedia": "/subpages/page18.html",
        "trainsMedia": "/subpages/page19.html",
        "wantedMedia": "/subpages/page20.html"
    };

    function removeExtension(filename) {
        return filename.replace(/\.[^/.]+$/, "");
    }

    function createSafeClassName(filename) {
        return `photo-of-${removeExtension(filename)
            .replace(/\s+/g, '-') 
            .replace(/[^a-zA-Z0-9-]/g, '') 
            .toLowerCase()}`;
    }

    function getCurrentFolder() {
        const currentPath = window.location.pathname;
        for (const [folder, page] of Object.entries(folderToPageMapping)) {
            if (page === currentPath) {
                return folder;
            }
        }
        return null;
    }

    function generateElementsFromJSON(jsonData) {
        const currentFolder = getCurrentFolder();
        if (!currentFolder || !jsonData[currentFolder]) {
            console.log('No matching folder found for this page');
            return;
        }

        const container = document.querySelector('.container');
        if (!container) {
            console.error('Container element not found');
            return;
        }

        jsonData[currentFolder].forEach(filename => {
            const blockWrapper = document.createElement('div');
            blockWrapper.className = 'block-wrapper';

            const fileNameWithoutExt = removeExtension(filename);
            const className = createSafeClassName(filename);

            const link = document.createElement('a');
            link.href = `../${currentFolder}/${filename.replace(/ /g, '%20')}`;
            link.className = `blockZ ${className}`;

            // ⬇️ Zamiast background-image, ustawiamy data-bg
            link.setAttribute('data-bg', `../${currentFolder}/${filename.replace(/ /g, '%20')}`);

            const caption = document.createElement('span');
            caption.className = 'block-caption';
            caption.textContent = fileNameWithoutExt;

            blockWrapper.appendChild(link);
            blockWrapper.appendChild(caption);
            container.appendChild(blockWrapper);
        });
    }

    // Lazy loading dla .block i .blockZ
    function setupLazyLoading() {
        const lazyElements = document.querySelectorAll(".block, .blockZ");

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    const bg = element.getAttribute('data-bg');
                    if (bg) {
                        element.style.backgroundImage = `url('${bg}')`;
                        console.log(`Lazy loaded background: ${bg}`);
                        element.removeAttribute('data-bg');
                    } else {
                        console.log('No data-bg attribute found for element:', element);
                    }
                    element.classList.add('loaded');
                    observer.unobserve(element);
                }
            });
        });

        lazyElements.forEach(element => observer.observe(element));
    }

    // Ładowanie pliku JSON
    fetch('../images.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        generateElementsFromJSON(data);
        setupLazyLoading(); // <--- URUCHAMIAMY lazy loading po wygenerowaniu elementów!
    })
    .catch(error => {
        console.error('Error loading JSON:', error);
    });
});

