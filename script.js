function enableImageZoom() {
    const blockZElements = document.querySelectorAll(".blockZ");

    blockZElements.forEach(element => {
        element.addEventListener("click", (event) => {
            event.preventDefault(); 

            
            const imageUrl = element.getAttribute("href");

            
            const overlay = document.createElement("div");
            overlay.classList.add("image-overlay");

            
            const img = document.createElement("img");
            img.src = imageUrl;
            img.alt = "Powiększone zdjęcie";
            img.classList.add("enlarged-image");

            
            overlay.appendChild(img);

            
            document.body.appendChild(overlay);

            
            overlay.addEventListener("click", () => {
                document.body.removeChild(overlay);
            });
        });
    });
}

/*document.addEventListener("DOMContentLoaded", () => {
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
});*/

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

        // Generujemy elementy tylko dla aktualnego folderu
        jsonData[currentFolder].forEach(filename => {
            // Tworzymy element HTML
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
            
            // Dodajemy regułę CSS
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
});

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