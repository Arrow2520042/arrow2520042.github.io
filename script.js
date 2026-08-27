const SHARED_NAV_MENU_TEMPLATE = `
<li><a href="/subpages/historie.html" class="wanted-list header-shortcut info-shortcut">Sick stories!</a></li>
<li class="dropdown">
    <a href="/subpages/page1.html">Data Storage Media ▾</a>
    <ul class="dropdown-content">
        <li class="sub-dropdown">
            <a href="/subpages/page1.html">Diskettes ▸</a>
            <ul class="sub-dropdown-content">
                <li><a href="/page1subpages/page1-1.html">2 inches</a></li>
                <li><a href="/page1subpages/page1-2.html">2.5 inches</a></li>
                <li><a href="/page1subpages/page1-3.html">2.6 inches</a></li>
                <li><a href="/page1subpages/page1-4.html">2.8 inches</a></li>
                <li><a href="/page1subpages/page1-5.html">3 inches</a></li>
                <li><a href="/page1subpages/page1-6.html">3.5 inches</a></li>
                <li><a href="/page1subpages/page1-7.html">3.94 inches</a></li>
                <li><a href="/page1subpages/page1-8.html">5.25 inches</a></li>
                <li><a href="/page1subpages/page1-9.html">8 inches</a></li>
            </ul>
        </li>
        <li class="sub-dropdown">
            <a href="/subpages/page2.html">Discs ▸</a>
            <ul class="sub-dropdown-content">
                <li class="sub-sub-dropdown">
                    <a href="/page2subpages/page2-1.html">Audio ▸</a>
                    <ul class="sub-sub-dropdown-content">
                        <li><a href="/page2-1subpages/page2-1-1.html">Magnetic</a></li>
                        <li><a href="/page2-1subpages/page2-1-2.html">Optical</a></li>
                        <li><a href="/page2-1subpages/page2-1-5.html">Optical Recordable</a></li>
                        <li><a href="/page2-1subpages/page2-1-3.html">Other Audio</a></li>
                        <li><a href="/page2-1subpages/page2-1-4.html">Vinyls</a></li>
                    </ul>
                </li>
                <li class="sub-sub-dropdown">
                    <a href="/page2subpages/page2-2.html">Data & Game & Photo & Video ▸</a>
                    <ul class="sub-sub-dropdown-content">
                        <li><a href="/page2-2subpages/page2-2-1.html">Optical</a></li>
                        <li><a href="/page2-2subpages/page2-2-3.html">Optical Recordable</a></li>
                        <li><a href="/page2-2subpages/page2-2-2.html">Vinyls</a></li>
                    </ul>
                </li>
                <li class="sub-sub-dropdown">
                    <a href="/page2subpages/page2-3.html">Video ▸</a>
                    <ul class="sub-sub-dropdown-content">
                        <li><a href="/page2-3subpages/page2-3-1.html">Magnetic</a></li>
                        <li><a href="/page2-3subpages/page2-3-2.html">Optical</a></li>
                        <li><a href="/page2-3subpages/page2-3-3.html">Vinyls</a></li>
                    </ul>
                </li>
                <li><a href="/page2subpages/page2-4.html">Photo</a></li>
            </ul>
        </li>
        <li class="sub-dropdown">
            <a href="/subpages/page3.html">Removable Discs ▸</a>
            <ul class="sub-dropdown-content">
                <li><a href="/page3subpages/page3-1.html">Magnetic</a></li>
                <li><a href="/page3subpages/page3-2.html">Optical</a></li>
            </ul>
        </li>
        <li class="sub-dropdown">
            <a href="/subpages/page4.html">Tapes & Cassettes ▸</a>
            <ul class="sub-dropdown-content">
                <li class="sub-sub-dropdown">
                    <a href="/page4subpages/page4-1.html">Audio ▸</a>
                    <ul class="sub-sub-dropdown-content">
                        <li><a href="/page4-1subpages/page4-1-1.html">Compact Cassettes</a></li>
                        <li><a href="/page4-1subpages/page4-1-2.html">Small Cassettes</a></li>
                        <li><a href="/page4-1subpages/page4-1-3.html">Other</a></li>
                    </ul>
                </li>
                <li><a href="/page4subpages/page4-2.html">Data</a></li>
                <li><a href="/page4subpages/page4-3.html">Video</a></li>
            </ul>
        </li>
        <li><a href="/subpages/page5.html">Other Media</a></li>
        <li><a href="/subpages/page10.html">Lots</a></li>
        <li><a href="/subpages/page15.html">Santana Abraxas CDs</a></li>
        <li><a href="/subpages/page18.html">TDK D</a></li>
    </ul>
</li>
<li class="dropdown">
    <a href="/subpages/page6.html">Other Collectables ▾</a>
    <ul class="dropdown-content">
        <li><a href="/subpages/page6.html">Butterflies</a></li>
        <li><a href="/subpages/page7.html">CPUs</a></li>
        <li><a href="/subpages/page8.html">HDDs</a></li>
        <li><a href="/subpages/page9.html">Light Bublbs</a></li>
        <li><a href="/subpages/page11.html">Minerals</a></li>
        <li><a href="/subpages/page12.html">PC Cards</a></li>
        <li class="sub-dropdown">
            <a href="#">Airplane Models ▸</a>
            <ul class="sub-dropdown-content">
                <li><a href="/page13subpages/page13-1.html">32 scale</a></li>
                <li><a href="/page13subpages/page13-2.html">35 scale</a></li>
                <li><a href="/page13subpages/page13-3.html">48 scale</a></li>
                <li><a href="/page13subpages/page13-4.html">72 scale</a></li>
                <li><a href="/page13subpages/page13-5.html">87 scale</a></li>
            </ul>
        </li>
        <li><a href="/subpages/page14.html">Porcelain Cups</a></li>
        <li><a href="/subpages/page16.html">Stamps</a></li>
        <li><a href="/subpages/page17.html">Stickers</a></li>
        <li><a href="/subpages/page19.html">Train Bahns H0</a></li>
    </ul>
</li>
<li><a href="/subpages/page20.html" class="wanted-list header-shortcut">Wanted</a></li>
<li><a href="/subpages/about.html" class="about-shortcut header-shortcut">About Me</a></li>
`;

const NAV_MENU_DESKTOP_BREAKPOINT = 1300;

document.addEventListener("DOMContentLoaded", () => {
    const navMenu = document.querySelector(".nav-menu");
    if (navMenu) {
        navMenu.innerHTML = SHARED_NAV_MENU_TEMPLATE;
    }
});

//Obsluga fade-in fade-out
document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.remove("fade-out");
    document.body.classList.add("fade-in");

    const links = document.querySelectorAll("a");
    links.forEach(link => {
        link.addEventListener("click", (event) => {
            if (link.classList.contains("download-button")) {
                return;
            }

            if (link.href && link.href.startsWith(window.location.origin) && !link.closest('.dropdown-content') && !link.closest('.dropdown')) {
                event.preventDefault();
                document.body.classList.add("fade-out");

                setTimeout(() => {
                    window.location.href = link.href;
                }, 800); 
            }
        });
    });
});
//Obsluga nav
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
//Obsluga powieszkania zdjec
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

        let scale = 1;
        let translateX = 0;
        let translateY = 0; 

        requestAnimationFrame(() => {
        overlay.style.opacity = 1;
        img.style.transform = `scale(${scale}) translate(${translateX}px, ${translateY}px)`;
        });

        function closeOverlay() {
        overlay.style.opacity = 0;
        img.style.transform = `scale(0.8) translate(0, 0)`;
        setTimeout(() => {
            document.body.removeChild(overlay);
            document.removeEventListener('keydown', keyHandler);
            overlay.removeEventListener('wheel', zoomHandler);
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

        function zoomHandler(e) {
        e.preventDefault();
        const rect = img.getBoundingClientRect();
        const cursorX = e.clientX - rect.left; 
        const cursorY = e.clientY - rect.top;  
        const offsetX = (cursorX / rect.width - 0.5) * 1.5; 
        const offsetY = (cursorY / rect.height - 0.5) * 1.5; 

        if (e.deltaY < 0) {
            scale = Math.min(scale + 0.1, 3); 
            translateX -= offsetX * 15 * (scale - 1); 
            translateY -= offsetY * 15 * (scale - 1); 
        } else {
            scale = Math.max(scale - 0.1, 0.9); 
            if (scale === 0.9) {
                translateX = 0;
                translateY = 0;
            }
        }

    img.style.transform = `scale(${scale}) translate(${translateX}px, ${translateY}px)`;
}
    

        document.addEventListener('keydown', keyHandler);
        overlay.addEventListener('wheel', zoomHandler);

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
//Obsluga backspace
document.addEventListener("DOMContentLoaded", () => {
    const headerButton = document.querySelector(".header-button");

    if (!headerButton) {
        return;
    }

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
//Nowa wersja .json loading + lazy loading
document.addEventListener('DOMContentLoaded', function() {
    const planeModelFolders = new Set([
        '32sMedia',
        '35sMedia',
        '48sMedia',
        '72sMedia',
        '87sMedia'
    ]);

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

    function getFolderKeyCandidates(folderKey) {
        if (!folderKey || !folderKey.endsWith('Media')) {
            return [];
        }

        const baseName = folderKey.slice(0, -5);
        const candidates = [folderKey];

        const disketteWithSpace = baseName.replace(/^(\d+(?:\.\d+)?)in$/i, '$1 inch');
        if (disketteWithSpace !== baseName) {
            candidates.push(`${disketteWithSpace}Media`);
        }

        if (baseName.startsWith('discs-')) {
            candidates.push(`2 Discs-${baseName.slice('discs-'.length)}Media`);
        }

        if (baseName.startsWith('tapescassettes-audio-')) {
            candidates.push(`tapescassettes-${baseName.slice('tapescassettes-audio-'.length)}Media`);
        }

        return [...new Set(candidates)];
    }

    function resolveFolderKeyForJson(jsonData, folderKey) {
        const candidates = getFolderKeyCandidates(folderKey);
        for (const candidate of candidates) {
            if (Object.prototype.hasOwnProperty.call(jsonData, candidate)) {
                return candidate;
            }
        }
        return null;
    }

    function getMediaFolderPath(folderKey) {
        if (!folderKey || !folderKey.endsWith('Media')) {
            return null;
        }

        const baseName = folderKey.slice(0, -5);
        const disketteMatch = baseName.match(/^(\d+(?:\.\d+)?)\s*(?:in|inch)$/i);
        if (disketteMatch) {
            return `WebMedia/1diskettes/${disketteMatch[1]} inch`;
        }

        if (planeModelFolders.has(folderKey)) {
            return `WebMedia/planes/${baseName}`;
        }

        const normalizedBaseName = baseName
            .replace(/^2\s*discs-/i, 'discs-')
            .replace(/^2discs-/i, 'discs-');

        const parts = normalizedBaseName.split('-');
        const rootRenames = {
            discs: '2 Discs',
            rdiscs: '3rdiscs',
            tapescassettes: '4tapescassettes',
            other: '5other'
        };

        if (
            parts[0] === 'tapescassettes' &&
            parts[1] === 'audio' &&
            ['compact', 'small', 'other'].includes(parts[2])
        ) {
            parts.splice(1, 1);
        }

        if (rootRenames[parts[0]]) {
            parts[0] = rootRenames[parts[0]];
        }

        return `WebMedia/${parts.join('/')}`;
    }

    function generateElementsFromJSON(jsonData) {
        const currentFolder = getCurrentFolder();
        if (!currentFolder) {
            console.log('No matching folder found for this page');
            return;
        }

        const resolvedFolderKey = resolveFolderKeyForJson(jsonData, currentFolder);
        if (!resolvedFolderKey) {
            console.log('No matching JSON key found for this page');
            return;
        }

        const mediaFolderPath = getMediaFolderPath(resolvedFolderKey);
        if (!mediaFolderPath) {
            console.error('Could not resolve media folder path for this page');
            return;
        }

        const container = document.querySelector('.container');
        if (!container) {
            console.error('Container element not found');
            return;
        }

        jsonData[resolvedFolderKey].forEach(filename => {
            const blockWrapper = document.createElement('div');
            blockWrapper.className = 'block-wrapper';

            const fileNameWithoutExt = removeExtension(filename);
            const className = createSafeClassName(filename);
            const encodedFilename = filename.replace(/ /g, '%20');

            const link = document.createElement('a');
            link.href = `../${mediaFolderPath}/${encodedFilename}`;
            link.className = `blockZ ${className}`;

            link.setAttribute('data-bg', `../${mediaFolderPath}/${encodedFilename}`);

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
                }
                element.classList.add('loaded');
                observer.unobserve(element);
            }
        });
    }, {
        rootMargin: "350px 0px"
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
//Obsluga scroll-down
document.querySelector('.scroll-down').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  });
//Obsluga scroll-up
  document.querySelector('.scroll-up').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

const scrollUpButton = document.querySelector('.scroll-up');
const scrollDownButton = document.querySelector('.scroll-down');
const headerElement = document.querySelector('.header, header');
const footerElement = document.querySelector('footer.footer, .footer, footer');
const SCROLL_EDGE_GAP_PX = 8;

function keepScrollDownBelowHeader() {
    if (!scrollDownButton || !headerElement) {
        return;
    }

    if (!scrollDownButton.dataset.baseTopPx) {
        const computedTop = parseFloat(window.getComputedStyle(scrollDownButton).top);
        scrollDownButton.dataset.baseTopPx = String(Number.isFinite(computedTop) ? computedTop : 16);
    }

    const baseTopPx = parseFloat(scrollDownButton.dataset.baseTopPx) || 16;
    const headerRect = headerElement.getBoundingClientRect();
    const headerVisibleBottomPx = Math.max(0, headerRect.bottom);
    const requiredTopPx = Math.max(baseTopPx, headerVisibleBottomPx + SCROLL_EDGE_GAP_PX);

    scrollDownButton.style.setProperty('top', `${requiredTopPx}px`, 'important');
}

function keepScrollUpAboveFooter() {
        if (!scrollUpButton || !footerElement) {
                return;
        }

        if (!scrollUpButton.dataset.baseBottomPx) {
                const computedBottom = parseFloat(window.getComputedStyle(scrollUpButton).bottom);
                scrollUpButton.dataset.baseBottomPx = String(Number.isFinite(computedBottom) ? computedBottom : 16);
        }

        const baseBottomPx = parseFloat(scrollUpButton.dataset.baseBottomPx) || 16;
        const footerRect = footerElement.getBoundingClientRect();
        const footerVisibleFromBottomPx = Math.max(0, window.innerHeight - footerRect.top);

        const requiredBottomPx = Math.max(baseBottomPx, footerVisibleFromBottomPx + SCROLL_EDGE_GAP_PX);

        scrollUpButton.style.setProperty('bottom', `${requiredBottomPx}px`, 'important');
}

window.addEventListener('scroll', keepScrollDownBelowHeader, { passive: true });
window.addEventListener('resize', keepScrollDownBelowHeader);
window.addEventListener('load', keepScrollDownBelowHeader);
keepScrollDownBelowHeader();

window.addEventListener('scroll', keepScrollUpAboveFooter, { passive: true });
window.addEventListener('resize', keepScrollUpAboveFooter);
window.addEventListener('load', keepScrollUpAboveFooter);
keepScrollUpAboveFooter();

//Anomacja przyciskow scroll
  document.querySelectorAll('.scroll-up, .scroll-down').forEach(btn => {
    btn.addEventListener('click', function() {
        btn.classList.add('clicked');
        setTimeout(() => btn.classList.remove('clicked'), 300);
    });
});
//hamburger menu
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    if (!hamburger || !navMenu) {
        return;
    }

    hamburger.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });

    navMenu.addEventListener("click", function (e) {
        if (window.innerWidth >= NAV_MENU_DESKTOP_BREAKPOINT) {
            return;
        }

        const link = e.target.closest(".dropdown > a, .sub-dropdown > a, .sub-sub-dropdown > a");
        if (!link) {
            return;
        }

        const href = (link.getAttribute("href") || "").trim();
        if (href && href !== "#") {
            return;
        }

        e.preventDefault();
        const parent = link.parentElement;
        if (parent) {
            parent.classList.toggle("open");
        }
    });
});
//mobile and desktop header version
document.addEventListener('DOMContentLoaded', function() {
    const desktopVersion = document.querySelector('.desktop-version');
    const mobileVersion = document.querySelector('.mobile-version');
    const breakpoint = 820; 

    function updateHeaderVersion() {
        if (window.innerWidth > breakpoint) {
            desktopVersion.style.display = 'flex'; 
            mobileVersion.style.display = 'none'; 
        } else {
            desktopVersion.style.display = 'none'; 
            mobileVersion.style.display = 'flex'; 
        }
    }

    updateHeaderVersion();

    window.addEventListener('resize', updateHeaderVersion);
});