function enableImageZoom() {
    const blockZElements = document.querySelectorAll(".blockZ");

    blockZElements.forEach(element => {
        element.addEventListener("click", (event) => {
            event.preventDefault(); // Zapobiega domyślnemu otwieraniu linku

            // Pobierz link do obrazu z atrybutu href
            const imageUrl = element.getAttribute("href");

            // Stwórz kontener dla powiększonego obrazu
            const overlay = document.createElement("div");
            overlay.classList.add("image-overlay");

            // Stwórz element obrazu
            const img = document.createElement("img");
            img.src = imageUrl;
            img.alt = "Powiększone zdjęcie";
            img.classList.add("enlarged-image");

            // Dodaj obraz do kontenera
            overlay.appendChild(img);

            // Dodaj kontener do body
            document.body.appendChild(overlay);

            // Zamknij powiększenie po kliknięciu w overlay
            overlay.addEventListener("click", () => {
                document.body.removeChild(overlay);
            });
        });
    });
}

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
        "8inMedia": "/page1subpages/page1-9.html"
    };

    const currentPage = window.location.pathname;
    const folderPath = Object.keys(folderMappings).find(folder => folderMappings[folder] === currentPage);

    if (!folderPath) {
        console.error("No folder mapping found for this page.");
        return;
    }

    const container = document.querySelector(".container");

    async function fetchImages() {
        try {
            const response = await fetch(`/${folderPath}/`);
            if (!response.ok) {
                console.error("Failed to fetch folder contents");
                return;
            }

            const parser = new DOMParser();
            const html = await response.text();
            const doc = parser.parseFromString(html, "text/html");
            const links = Array.from(doc.querySelectorAll("a"));

            links.forEach(link => {
                const href = link.getAttribute("href");
                if (href && (href.endsWith(".jpg") || href.endsWith(".jpeg"))) {
                    const fileName = href.split("/").pop();
                    const nameWithoutExtension = fileName.replace(/\.(jpg|jpeg)$/i, "");

                    // Sprawdź, czy element już istnieje
                    if (document.querySelector(`.${nameWithoutExtension}`)) {
                        console.log(`Element dla ${nameWithoutExtension} już istnieje.`);
                        return;
                    }

                    // Create the new block element
                    const blockWrapper = document.createElement("div");
                    blockWrapper.classList.add("block-wrapper");

                    const anchor = document.createElement("a");
                    anchor.href = `/${folderPath}/${fileName}`;
                    anchor.classList.add("blockZ", nameWithoutExtension);

                    const span = document.createElement("span");
                    span.classList.add("block-caption");
                    span.textContent = nameWithoutExtension;

                    blockWrapper.appendChild(anchor);
                    blockWrapper.appendChild(span);
                    container.appendChild(blockWrapper);

                    // Add CSS dynamically
                    const style = document.createElement("style");
                    style.textContent = `
                        .${nameWithoutExtension} {
                            background-image: url(/${folderPath}/${fileName});
                        }
                    `;
                    document.head.appendChild(style);
                }
            });

            // Ponownie przypisz nasłuchiwanie do nowych elementów
            enableImageZoom();
        } catch (error) {
            console.error("Error fetching images:", error);
        }
    }

    fetchImages();
});