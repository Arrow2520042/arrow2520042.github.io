//obsluga fade-in fade-out
document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.remove("fade-out");
    document.body.classList.add("fade-in");

    const links = document.querySelectorAll("a");
    links.forEach(link => {
        link.addEventListener("click", (event) => {
            if (link.classList.contains("download-button")) {
                return;
            }

            if (link.href && link.href.startsWith(window.location.origin)) {
                event.preventDefault();
                document.body.classList.add("fade-out");

                setTimeout(() => {
                    window.location.href = link.href;
                }, 500); 
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
        "wantedMedia": "/subpages/page20.html",
        "discs-audio-magneticMedia": "/page2-1subpages/page2-1-1.html",
        "discs-audio-opticalMedia": "/page2-1subpages/page2-1-2.html",
        "discs-audio-otherMedia": "/page2-1subpages/page2-1-3.html",
        "discs-audio-vinylsMedia": "/page2-1subpages/page2-1-4.html",
        "discs-data-opticalMedia": "/page2-2subpages/page2-2-1.html",
        "discs-data-vinylsMedia": "/page2-2subpages/page2-2-2.html",
        "discs-video-magneticMedia": "/page2-3subpages/page2-3-1.html",
        "discs-video-opticalMedia": "/page2-3subpages/page2-3-2.html",
        "discs-video-vinylsMedia": "/page2-3subpages/page2-3-3.html",
        "discs-photoMedia": "/page2subpages/page2-4.html",
        "rdiscs-magneticMedia": "/page3subpages/page3-1.html",
        "rdiscs-opticalMedia": "/page3subpages/page3-2.html",
        "tapescassettes-audio-compactMedia": "/page4-1subpages/page4-1-1.html",
        "tapescassettes-audio-smallMedia": "/page4-1subpages/page4-1-2.html",
        "tapescassettes-dataMedia": "/page4subpages/page4-2.html",
        "tapescassettes-videoMedia": "/page4subpages/page4-3.html",
        "tapescassettes-audio-otherMedia": "/page4-1subpages/page4-1-3.html",
        "discs-data-opticalrecordableMedia": "/page2-2subpages/page2-2-3.html",
        "discs-audio-opticalrecordableMedia": "/page2-1subpages/page2-1-5.html"
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

            link.setAttribute('data-bg', `../${currentFolder}/${filename.replace(/ /g, '%20')}`);

            const caption = document.createElement('span');
            caption.className = 'block-caption';
            caption.textContent = fileNameWithoutExt;

            blockWrapper.appendChild(link);
            blockWrapper.appendChild(caption);
            container.appendChild(blockWrapper);
        });
    }

    // Lazy loading dla .blockZ
    function setupLazyLoading() {
        const lazyElements = document.querySelectorAll(".blockZ");

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    const bg = element.getAttribute('data-bg');
                    if (bg) {
                        element.style.backgroundImage = `url('${bg}')`;
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
        setupLazyLoading(); 
    })
    .catch(error => {
        console.error('Error loading JSON:', error);
    });
});
// Obsluga scrolla
document.querySelector('.scroll-down').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  });
  document.querySelector('.scroll-up').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
