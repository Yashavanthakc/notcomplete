/* ============================================================
VARSHA BIRTHDAY SURPRISE
NEW PART 3 — COMPLETE SCRIPT.JS

Connected features:
✓ Page loader
✓ Floating hearts
✓ Sparkles
✓ Music button
✓ Envelope opening
✓ Love letter reveal
✓ 30-photo memory wall
✓ Photo lightbox
✓ 18 reels
✓ YES button
✓ THINK / MAYBE button
✓ NO button
✓ Flower celebration
✓ Sad reaction
✓ Response form
✓ Formspree
✓ Last surprise
✓ Video playback
✓ Toast messages
============================================================ */

/* ============================================================
01. WAIT FOR PAGE
============================================================ */

document.addEventListener("DOMContentLoaded", function () {

console.log("❤️ Varsha Birthday Surprise loaded");

initializePage();

});

/* ============================================================
02. MAIN INITIALIZATION
============================================================ */

function initializePage() {

setupLoader();

setupFloatingHearts();

setupMusic();

setupEnvelope();

setupMemoryWall();

setupLoveButtons();

setupResponseForm();

setupLastSurprise();

setupLightbox();

}

/* ============================================================
03. PAGE LOADER
============================================================ */

function setupLoader() {

const loader =
    document.querySelector(".page-loader");

if (!loader) {
    return;
}

function hidePageLoader() {

    setTimeout(function () {
        loader.classList.add("hide");
    }, 700);

}

if (document.readyState === "complete") {
    hidePageLoader();
} else {
    window.addEventListener("load", hidePageLoader, { once: true });
}

}

/* ============================================================
04. FLOATING HEARTS
============================================================ */

function setupFloatingHearts() {

const container =
    document.querySelector(".background-hearts");

if (!container) {
    return;
}

const hearts = [
    "❤️",
    "💕",
    "💗",
    "💖",
    "💘",
    "💓",
    "💞"
];

function createHeart() {

    const heart =
        document.createElement("div");

    heart.className =
        "floating-heart";

    heart.textContent =
        hearts[
            Math.floor(
                Math.random() * hearts.length
            )
        ];

    const size =
        12 + Math.random() * 22;

    const left =
        Math.random() * 100;

    const duration =
        7 + Math.random() * 8;

    const delay =
        Math.random() * 2;

    heart.style.left =
        left + "%";

    heart.style.fontSize =
        size + "px";

    heart.style.animationDuration =
        duration + "s";

    heart.style.animationDelay =
        delay + "s";

    container.appendChild(heart);

    setTimeout(function () {

        heart.remove();

    }, (duration + delay + 1) * 1000);

}


for (let i = 0; i < 12; i++) {

    setTimeout(
        createHeart,
        i * 350
    );

}


setInterval(
    createHeart,
    900
);

}

/* ============================================================
05. SPARKLES
============================================================ */

function createSparkles(
amount = 25
) {

const container =
    document.querySelector(
        ".sparkle-container"
    );

if (!container) {
    return;
}


for (
    let i = 0;
    i < amount;
    i++
) {

    setTimeout(function () {

        const sparkle =
            document.createElement("div");

        sparkle.className =
            "sparkle";

        sparkle.style.left =
            Math.random() * 100 + "%";

        sparkle.style.top =
            Math.random() * 100 + "%";

        const size =
            3 + Math.random() * 7;

        sparkle.style.width =
            size + "px";

        sparkle.style.height =
            size + "px";

        container.appendChild(
            sparkle
        );


        setTimeout(function () {

            sparkle.remove();

        }, 1400);

    }, i * 35);

}

}

/* ============================================================
06. MUSIC
============================================================ */

function setupMusic() {

const music =
    document.getElementById("birthdayMusic");

const musicButton =
    document.getElementById("musicButton");

const musicStatus =
    document.querySelector(
        ".music-status"
    );


if (!music || !musicButton) {

    console.log(
        "Music elements not found."
    );

    return;

}


let playing = false;


function updateMusicUI() {

    if (playing) {

        musicButton.textContent =
            "🔊";

        musicButton.classList.add(
            "playing"
        );

        if (musicStatus) {

            musicStatus.textContent =
                "Music playing 🎵";

        }

    } else {

        musicButton.textContent =
            "🎵";

        musicButton.classList.remove(
            "playing"
        );

        if (musicStatus) {

            musicStatus.textContent =
                "Music paused";

        }

    }

}


musicButton.addEventListener(
    "click",
    async function () {

        try {

            if (!playing) {

                await music.play();

                playing = true;

                updateMusicUI();

                showToast(
                    "Our song is playing ❤️"
                );

            } else {

                music.pause();

                playing = false;

                updateMusicUI();

            }

        } catch (error) {

            console.error(
                "Music error:",
                error
            );

            showToast(
                "Please tap the music button again 🎵"
            );

        }

    }
);


music.addEventListener(
    "ended",
    function () {

        playing = false;

        updateMusicUI();

    }
);


music.addEventListener(
    "pause",
    function () {

        if (
            !music.ended
        ) {

            playing = false;

            updateMusicUI();

        }

    }
);


music.addEventListener(
    "play",
    function () {

        playing = true;

        updateMusicUI();

    }
);

}

/* ============================================================
07. ENVELOPE
============================================================ */

function setupEnvelope() {

const envelope =
    document.getElementById(
        "envelope"
    );

const clickText =
    document.querySelector(
        ".envelope-click-text"
    );


if (!envelope) {

    console.log(
        "Envelope element not found."
    );

    return;

}


let opened = false;


function openEnvelope() {

    if (opened) {
        return;
    }


    opened = true;

    envelope.classList.add(
        "open"
    );


    if (clickText) {

        clickText.textContent =
            "My heart is opening for you... ❤️";

    }


    createSparkles(35);


    showToast(
        "A little piece of my heart... 💌"
    );


    setTimeout(
        revealLoveLetter,
        1000
    );

}


envelope.addEventListener(
    "click",
    openEnvelope
);


envelope.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Enter" ||
            event.key === " "
        ) {

            event.preventDefault();

            openEnvelope();

        }

    }
);

}

/* ============================================================
08. LOVE LETTER REVEAL
============================================================ */

function revealLoveLetter() {

const letter =
    document.querySelector(
        ".hidden-letter"
    );


if (!letter) {
    return;
}


letter.classList.remove(
    "hidden-letter"
);


letter.style.display =
    "block";


setTimeout(function () {

    letter.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}, 200);


createSparkles(20);

}

/* ============================================================
09. MEMORY WALL
============================================================ */

function setupMemoryWall() {

const wall =
    document.querySelector(
        ".memory-wall"
    );


if (!wall) {
    return;
}


/*
   IMPORTANT:

   Replace the empty image paths below
   with your actual photo paths.

   Example:

   "images/photo01.jpg"

   Keep exactly 30 photos.
*/


const photos = [

    "photo01.jpg",
    "photo02.jpg",
    "photo03.jpg",
    "photo04.jpg",
    "photo05.jpg",
    "photo06.jpg",
    "photo07.jpg",
    "photo08.jpg",
    "photo09.jpg",
    "photo10.jpg",

    "photo11.jpg",
    "photo12.jpg",
    "photo13.jpg",
    "photo14.jpg",
    "photo15.jpg",
    "photo16.jpg",
    "photo17.jpg",
    "photo18.jpg",
    "photo19.jpg",
    "photo20.jpg",

    "photo21.jpg",
    "photo22.jpg",
    "photo23.jpg",
    "photo24.jpg",
    "photo25.jpg",
    "photo26.jpg",
    "photo27.jpg",
    "photo28.jpg",
    "photo29.jpg",
    "photo30.jpg"

];


wall.innerHTML = "";


photos.forEach(
    function (photo, index) {

        const card =
            document.createElement(
                "div"
            );

        card.className =
            "photo-card";


        const image =
            document.createElement(
                "img"
            );

        image.src =
            photo;

        image.alt =
            "Our memory " +
            (index + 1);


        image.loading =
            "lazy";


        image.addEventListener(
            "error",
            function () {

                card.classList.add(
                    "empty-photo"
                );

                image.style.display =
                    "none";

            }
        );


        const number =
            document.createElement(
                "span"
            );

        number.textContent =
            String(index + 1)
                .padStart(2, "0");


        card.appendChild(image);

        card.appendChild(number);

        wall.appendChild(card);

    }
);

}

/* ============================================================
10. LIGHTBOX
============================================================ */

function setupLightbox() {

const wall =
    document.querySelector(
        ".memory-wall"
    );

const lightbox =
    document.querySelector(
        ".memory-lightbox"
    );

if (
    !wall ||
    !lightbox
) {

    return;

}


const lightboxImage =
    lightbox.querySelector(
        "img"
    );

const caption =
    lightbox.querySelector(
        ".lightbox-caption"
    );

const closeButton =
    lightbox.querySelector(
        ".lightbox-close"
    );


function openLightbox(
    src,
    text
) {

    if (!lightboxImage) {
        return;
    }


    lightboxImage.src =
        src;


    if (caption) {

        caption.textContent =
            text;

    }


    lightbox.classList.remove(
        "hidden"
    );


    document.body.style.overflow =
        "hidden";

}


function closeLightbox() {

    lightbox.classList.add(
        "hidden"
    );


    document.body.style.overflow =
        "";

}


wall.addEventListener(
    "click",
    function (event) {

        const card =
            event.target.closest(
                ".photo-card"
            );

        if (!card) {
            return;
        }


        const image =
            card.querySelector(
                "img"
            );


        if (
            !image ||
            image.style.display ===
                "none"
        ) {

            return;

        }


        const number =
            card.querySelector(
                "span"
            );


        openLightbox(
            image.src,
            number
                ? "Memory " +
                  number.textContent
                : "Our memory ❤️"
        );

    }
);


if (closeButton) {

    closeButton.addEventListener(
        "click",
        closeLightbox
    );

}


lightbox.addEventListener(
    "click",
    function (event) {

        if (
            event.target ===
            lightbox
        ) {

            closeLightbox();

        }

    }
);


document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            !lightbox.classList.contains(
                "hidden"
            )
        ) {

            closeLightbox();

        }

    }
);

}

/* ============================================================
11. LOVE BUTTONS
============================================================ */

function setupLoveButtons() {

const yes =
    document.getElementById(
        "loveYes"
    );

const maybe =
    document.getElementById(
        "loveMaybe"
    );

const no =
    document.getElementById(
        "loveNo"
    );

const response =
    document.getElementById(
        "loveResponse"
    );


if (!yes && !maybe && !no) {

    console.log(
        "Love buttons not found."
    );

    return;

}


/* --------------------------------------------------------
   YES
-------------------------------------------------------- */

if (yes) {

    yes.addEventListener(
        "click",
        function () {

            if (response) {

                response.innerHTML =
                    "You chose YES... ❤️🌸";

            }


            createFlowerCelebration();

            createHeartCelebration();

            createSparkles(60);


            showToast(
                "My heart is smiling because of you ❤️"
            );


            setTimeout(
                function () {

                    scrollToResponseForm();

                },
                1200
            );

        }
    );

}


/* --------------------------------------------------------
   THINK / MAYBE
-------------------------------------------------------- */

if (maybe) {

    maybe.addEventListener(
        "click",
        function () {

            if (response) {

                response.innerHTML =
                    "Take your time... I will respect your decision. 🫂❤️";

            }


            createHeartCelebration();

            showToast(
                "No pressure. Take your time 🫂"
            );


            setTimeout(
                function () {

                    scrollToResponseForm();

                },
                900
            );

        }
    );

}


/* --------------------------------------------------------
   NO
-------------------------------------------------------- */

if (no) {

    no.addEventListener(
        "click",
        function () {

            if (response) {

                response.innerHTML =
                    "It's okay... I respect your choice. 💔🫂";

            }


            createSadCelebration();


            showToast(
                "I respect whatever your heart says 🫂"
            );


            setTimeout(
                function () {

                    scrollToResponseForm();

                },
                1000
            );

        }
    );

}

}

/* ============================================================
12. YES FLOWER CELEBRATION
============================================================ */

function createFlowerCelebration() {

const container =
    getCelebrationContainer();


const flowers = [

    "🌸",
    "🌹",
    "🌷",
    "🌺",
    "🌻",
    "💐",
    "🌼"

];


for (
    let i = 0;
    i < 45;
    i++
) {

    const item =
        document.createElement(
            "div"
        );

    item.className =
        "celebration-item";


    item.textContent =
        flowers[
            Math.floor(
                Math.random() *
                flowers.length
            )
        ];


    const x =
        (Math.random() * 2 - 1) *
        500;

    const y =
        -(150 + Math.random() * 550);


    const rotation =
        (Math.random() * 720 - 360);


    item.style.setProperty(
        "--x",
        x + "px"
    );

    item.style.setProperty(
        "--y",
        y + "px"
    );

    item.style.setProperty(
        "--rotate",
        rotation + "deg"
    );


    item.style.left =
        50 +
        (Math.random() * 20 - 10) +
        "%";


    container.appendChild(
        item
    );


    setTimeout(
        function () {

            item.remove();

        },
        2000
    );

}

}

/* ============================================================
13. HEART CELEBRATION
============================================================ */

function createHeartCelebration() {

const container =
    getCelebrationContainer();


const hearts = [

    "❤️",
    "💗",
    "💖",
    "💕",
    "💞",
    "💓"

];


for (
    let i = 0;
    i < 30;
    i++
) {

    const item =
        document.createElement(
            "div"
        );


    item.className =
        "celebration-item";


    item.textContent =
        hearts[
            Math.floor(
                Math.random() *
                hearts.length
            )
        ];


    const x =
        (Math.random() * 2 - 1) *
        450;

    const y =
        -(100 + Math.random() * 500);


    item.style.setProperty(
        "--x",
        x + "px"
    );

    item.style.setProperty(
        "--y",
        y + "px"
    );


    item.style.setProperty(
        "--rotate",
        (Math.random() * 360) +
        "deg"
    );


    container.appendChild(
        item
    );


    setTimeout(
        function () {

            item.remove();

        },
        1900
    );

}

}

/* ============================================================
14. SAD REACTION
============================================================ */

function createSadCelebration() {

const container =
    getCelebrationContainer();


const items = [

    "🥺",
    "💔",
    "😢",
    "🫂"

];


for (
    let i = 0;
    i < 16;
    i++
) {

    const item =
        document.createElement(
            "div"
        );


    item.className =
        "celebration-item";


    item.textContent =
        items[
            Math.floor(
                Math.random() *
                items.length
            )
        ];


    const x =
        (Math.random() * 2 - 1) *
        300;

    const y =
        -(80 + Math.random() * 300);


    item.style.setProperty(
        "--x",
        x + "px"
    );

    item.style.setProperty(
        "--y",
        y + "px"
    );


    item.style.setProperty(
        "--rotate",
        (Math.random() * 300 - 150) +
        "deg"
    );


    container.appendChild(
        item
    );


    setTimeout(
        function () {

            item.remove();

        },
        1900
    );

}

}

/* ============================================================
15. CELEBRATION CONTAINER
============================================================ */

function getCelebrationContainer() {

let container =
    document.querySelector(
        ".celebration-container"
    );


if (!container) {

    container =
        document.createElement(
            "div"
        );

    container.className =
        "celebration-container";

    document.body.appendChild(
        container
    );

}


return container;

}

/* ============================================================
16. RESPONSE FORM / FORMSPREE
============================================================ */

function setupResponseForm() {

const form =
    document.getElementById(
        "responseForm"
    );


if (!form) {

    console.log(
        "Response form not found."
    );

    return;

}


const status =
    document.getElementById(
        "formStatus"
    );


/*
   YOUR FORMSPREE ENDPOINT
*/

const formspreeURL =
    "https://formspree.io/f/xoeaopno";


form.addEventListener(
    "submit",
    async function (event) {

        event.preventDefault();


        const submitButton =
            form.querySelector(
                "button[type='submit']"
            );


        if (submitButton) {

            submitButton.disabled =
                true;

            submitButton.classList.add(
                "loading"
            );

            submitButton.textContent =
                "Sending... ❤️";

        }


        if (status) {

            status.textContent =
                "Sending your message...";

            status.className =
                "form-status";

        }


        try {

            const formData =
                new FormData(form);


            /*
               Add extra information
               about this surprise website.
            */

            formData.append(
                "source",
                "Varsha Birthday Surprise Website"
            );


            formData.append(
                "sent_from",
                "Birthday Love Response"
            );


            const response =
                await fetch(
                    formspreeURL,
                    {

                        method: "POST",

                        body: formData,

                        headers: {

                            "Accept":
                                "application/json"

                        }

                    }
                );


            if (
                response.ok
            ) {

                if (status) {

                    status.textContent =
                        "Your message has been sent to me ❤️ Thank you for telling me what is in your heart.";

                    status.className =
                        "form-status success";

                }


                showToast(
                    "Message sent successfully ❤️"
                );


                createHeartCelebration();

                createSparkles(25);


                form.reset();


            } else {

                let data = null;


                try {

                    data =
                        await response.json();

                } catch (
                    ignored
                ) {}


                throw new Error(
                    data &&
                    data.errors
                        ? "Formspree rejected the submission."
                        : "Unable to send the message."
                );

            }


        } catch (error) {

            console.error(
                "Formspree error:",
                error
            );


            if (status) {

                status.textContent =
                    "I couldn't send it right now. Please check your internet connection and try again.";

                status.className =
                    "form-status error";

            }


            showToast(
                "Message could not be sent. Please try again."
            );


        } finally {

            if (submitButton) {

                submitButton.disabled =
                    false;

                submitButton.classList.remove(
                    "loading"
                );

                submitButton.textContent =
                    "Send My Message ❤️";

            }

        }

    }
);

}

/* ============================================================
17. SCROLL TO RESPONSE FORM
============================================================ */

function scrollToResponseForm() {

const section =
    document.querySelector(
        ".response-section"
    );


if (!section) {
    return;
}


setTimeout(
    function () {

        section.scrollIntoView({

            behavior: "smooth",

            block: "center"

        });

    },
    300
);

}

/* ============================================================
18. LAST SURPRISE
============================================================ */

function setupLastSurprise() {

const button =
    document.getElementById(
        "lastSurpriseBtn"
    );


const videoContainer =
    document.querySelector(
        ".final-video-container"
    );


const video =
    document.getElementById(
        "finalVideo"
    );


if (!button) {

    console.log(
        "Last surprise button not found."
    );

    return;

}


button.addEventListener(
    "click",
    async function () {

        createSparkles(50);

        createHeartCelebration();


        if (videoContainer) {

            videoContainer.classList.remove(
                "hidden-video"
            );

            videoContainer.style.display =
                "block";

        }


        if (!video) {

            showToast(
                "The surprise video is not connected yet ❤️"
            );

            return;

        }


        try {

            video.currentTime = 0;

            video.muted = false;

            await video.play();


            showToast(
                "One last surprise... ❤️🎬"
            );


            setTimeout(
                function () {

                    enterVideoFullscreen(
                        video
                    );

                },
                400
            );


        } catch (error) {

            console.error(
                "Video playback error:",
                error
            );


            showToast(
                "Tap the video once to start the surprise 🎬"
            );

        }

    }
);


if (video) {

    video.addEventListener(
        "ended",
        function () {

            createHeartCelebration();

            showToast(
                "I hope this becomes a beautiful memory ❤️"
            );

        }
    );

}

}

/* ============================================================
19. FULLSCREEN VIDEO
============================================================ */

async function enterVideoFullscreen(
video
) {

try {

    if (
        video.requestFullscreen
    ) {

        await video.requestFullscreen();

        return;

    }


    if (
        video.webkitRequestFullscreen
    ) {

        video.webkitRequestFullscreen();

        return;

    }


    if (
        video.webkitEnterFullscreen
    ) {

        video.webkitEnterFullscreen();

    }

} catch (error) {

    /*
       Some mobile browsers do not allow
       automatic fullscreen.

       Video will still play normally.
    */

    console.log(
        "Fullscreen not available:",
        error
    );

}

}

/* ============================================================
20. TOAST
============================================================ */

function showToast(
message
) {

let toast =
    document.querySelector(
        ".toast"
    );


if (!toast) {

    toast =
        document.createElement(
            "div"
        );

    toast.className =
        "toast";

    document.body.appendChild(
        toast
    );

}


toast.textContent =
    message;


toast.classList.add(
    "show"
);


clearTimeout(
    window.toastTimer
);


window.toastTimer =
    setTimeout(
        function () {

            toast.classList.remove(
                "show"
            );

        },
        3200
    );

}

/* ============================================================
21. IMAGE ERROR HANDLING
============================================================ */

document.addEventListener(
"error",
function (event) {

    const target =
        event.target;


    if (
        target &&
        target.tagName === "IMG"
    ) {

        console.warn(
            "Image could not be loaded:",
            target.src
        );

    }

},
true

);

/* ============================================================
22. PREVENT ACCIDENTAL FORM RESUBMISSION
============================================================ */

window.addEventListener(
"beforeunload",
function () {

    /*
       Nothing is intentionally saved
       in the browser here.
    */

}

);

/* ============================================================
23. CONSOLE MESSAGE
============================================================ */

console.log(
"%c❤️ Made with love for Varsha ❤️",
"font-size:18px;font-weight:bold;"
);

console.log(
"30 memories + 18 reels + love letter + final surprise"
);

/* ============================================================
END OF NEW PART 3
============================================================ */
