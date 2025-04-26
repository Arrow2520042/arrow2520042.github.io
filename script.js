// funkcja powieskzania
function enableImageZoom() {
    const blockZElements = document.querySelectorAll(".blockZ");
    let currentIndex = 0; // Indeks aktualnie wyświetlanego obrazu
    let images = []; // Lista obrazów w katalogu

    // Pobierz wszystkie obrazy w katalogu
    blockZElements.forEach(element => {
        images.push(element.getAttribute("href"));
    });

    blockZElements.forEach((element, index) => {
        element.addEventListener("click", (event) => {
            event.preventDefault();
            currentIndex = index; // Ustaw aktualny indeks na kliknięty obraz

            // Stwórz overlay
            const overlay = document.createElement("div");
            overlay.classList.add("image-overlay");

            // Stwórz element obrazu
            const img = document.createElement("img");
            img.src = images[currentIndex];
            img.alt = "Powiększone zdjęcie";
            img.classList.add("enlarged-image");

            // Dodaj obraz do overlay
            overlay.appendChild(img);

            // Dodaj overlay do dokumentu
            document.body.appendChild(overlay);

            // Dodaj klasę 'visible' po krótkim czasie, aby uruchomić animację
            setTimeout(() => {
                overlay.classList.add("visible");
            }, 10);

            // Obsługa klawiatury
            const handleKeydown = (event) => {
                if (event.key === "ArrowRight") {
                    // Następny obraz
                    currentIndex = (currentIndex + 1) % images.length;
                    img.src = images[currentIndex];
                } else if (event.key === "ArrowLeft") {
                    // Poprzedni obraz
                    currentIndex = (currentIndex - 1 + images.length) % images.length;
                    img.src = images[currentIndex];
                } else if (event.key === "Escape") {
                    // Zamknij overlay
                    overlay.classList.remove("visible");
                    setTimeout(() => {
                        document.body.removeChild(overlay);
                        document.removeEventListener("keydown", handleKeydown);
                    }, 300); // Czas trwania animacji (0.3s)
                }
            };

            document.addEventListener("keydown", handleKeydown);

            // Zamknij overlay po kliknięciu
            overlay.addEventListener("click", () => {
                overlay.classList.remove("visible");
                setTimeout(() => {
                    document.body.removeChild(overlay);
                    document.removeEventListener("keydown", handleKeydown);
                }, 300); // Czas trwania animacji (0.3s)
            });
        });
    });
}

// Obsluga folderow i podstron
document.addEventListener("DOMContentLoaded", () => {
    const folderMappings = {
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
        "stickersMedia": "/subpages/page17.html",//DODAC PLIK 17
        "tdkMedia": "/subpages/page18.html",
        "trainsMedia": "/subpages/page19.html",
        "wantedMedia": "/subpages/page20.html"
    };

    const currentPage = window.location.pathname;
    console.log("Current page:", currentPage);

    // Znajdź folder Media na podstawie bieżącej strony
    const folderPath = Object.keys(folderMappings).find(folder => folderMappings[folder] === currentPage);
    console.log("Folder path:", folderPath);

    if (!folderPath) {
        console.error("No folder mapping found for this page.");
        return;
    }

    // Ścieżka do folderu Media
    const mediaFolderUrl = `/${folderPath}`;
    console.log("Media folder URL:", mediaFolderUrl);

    // Ścieżka do folderu docelowego (subpages)
    const folderUrl = folderMappings[folderPath].replace(/\/[^/]+\.html$/, "");
    console.log("Folder URL:", folderUrl);

    async function fetchImages() {
        try {
            const container = document.querySelector(".container");
            if (!container) {
                console.error("Container element not found on the page.");
                return;
            }
    
            console.log("Fetching images from:", `${mediaFolderUrl}/`);
            const response = await fetch(`${mediaFolderUrl}/`);
            if (!response.ok) {
                console.error("Failed to fetch folder contents:", response.status);
                return;
            }
    
            const parser = new DOMParser();
            const html = await response.text();
            const doc = parser.parseFromString(html, "text/html");
            const links = Array.from(doc.querySelectorAll("a"));
    
            links.forEach(link => {
                const href = link.getAttribute("href");
                console.log("Found file:", href);
                if (href && (href.endsWith(".jpg") || href.endsWith(".jpeg"))) {
                    let fileName = href.split("/").pop();
    
                    // Usuń nawiasy () z nazwy pliku
                    fileName = fileName.replace(/[()]/g, "");
    
                    const originalName = fileName.replace(/\.(jpg|jpeg)$/i, "");
                    const nameWithPrefix = `photo-of-${originalName.replace(/[^a-zA-Z0-9-_]/g, "-")}`;
    
                    if (document.querySelector(`.${nameWithPrefix}`)) {
                        console.log(`Element dla ${nameWithPrefix} już istnieje.`);
                        return;
                    }
    
                    console.log("Adding image:", fileName);
    
                    const blockWrapper = document.createElement("div");
                    blockWrapper.classList.add("block-wrapper");
    
                    const anchor = document.createElement("a");
                    anchor.href = `${mediaFolderUrl}/${fileName}`;
                    anchor.classList.add("blockZ", nameWithPrefix);
    
                    const span = document.createElement("span");
                    span.classList.add("block-caption");
                    span.textContent = decodeURIComponent(originalName);
    
                    blockWrapper.appendChild(anchor);
                    blockWrapper.appendChild(span);
                    container.appendChild(blockWrapper);
    
                    const style = document.createElement("style");
                    style.textContent = `
                        .${nameWithPrefix} {
                            background-image: url(${mediaFolderUrl}/${fileName});
                        }
                    `;
                    document.head.appendChild(style);
                }
            });
    
            enableImageZoom();
        } catch (error) {
            console.error("Error fetching images:", error);
        }
    }

    fetchImages();
});

//obsluga fade out i fade in
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOMContentLoaded fired");

    // Usuń fade-out, jeśli istnieje
    document.body.classList.remove("fade-out");

    // Dodaj fade-in
    document.body.classList.add("fade-in");

    const links = document.querySelectorAll("a");
    links.forEach(link => {
        link.addEventListener("click", (event) => {
            if (link.href && link.href.startsWith(window.location.origin)) {
                event.preventDefault();
                document.body.classList.add("fade-out");

                setTimeout(() => {
                    window.location.href = link.href;
                }, 50); // Czas trwania animacji fade-out
            }
        });
    });
});

// obsluga nav
document.addEventListener("DOMContentLoaded", () => {
    // Wybierz wszystkie elementy nawigacyjne
    const navElements = document.querySelectorAll(".block-wrapper, .header-link, .header-button");

    // Dodaj obsługę kliknięcia dla każdego elementu
    navElements.forEach(nav => {
        nav.addEventListener("click", () => {
            const url = nav.getAttribute("data-url");
            if (url) {
                window.location.href = url; // Przekierowanie na podstronę
            }
        });
    });
});

// lazy loading dla block i blockZ
document.addEventListener("DOMContentLoaded", () => {
    // Wybierz elementy z klasami .block i .blockZ
    const lazyElements = document.querySelectorAll(".block, .blockZ");

    // Utwórz wspólny Intersection Observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const bgImage = element.getAttribute("data-bg");

                if (bgImage) {
                    element.style.backgroundImage = `url(${bgImage})`;
                    element.removeAttribute("data-bg"); // Usuń atrybut po załadowaniu
                }

                observer.unobserve(element); // Przestań obserwować element po załadowaniu
            }
        });
    });

    // Obserwuj wszystkie elementy z klasami .block i .blockZ
    lazyElements.forEach(element => observer.observe(element));
});

// Obsluga backspace
document.addEventListener("DOMContentLoaded", () => {
    const headerButton = document.querySelector(".header-button");

    document.addEventListener("keydown", (event) => {
        // Sprawdź, czy naciśnięto Backspace
        if (event.key === "Backspace") {
            event.preventDefault(); // Zapobiegaj domyślnemu zachowaniu przeglądarki
            const url = headerButton.getAttribute("data-url");
            if (url) {
                window.location.href = url; // Przekierowanie na stronę z `data-url`
            }
        }
    });
});

