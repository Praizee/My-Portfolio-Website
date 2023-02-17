// const containerEl = document.querySelector(".container");

// const careers = ["Software Developer", "Software Engineer", "Frontend Web Developer"];

// let careerIndex = 0;

// let characterIndex = 0;

// updateText();

// function updateText() {
//     characterIndex++;
//     containerEl.innerHTML = `
//     <p>I am ${careers[careerIndex].slice(0, 1) === "I" ? "an" : "a"} ${careers[
//             careerIndex
//         ].slice(0, characterIndex)}</p>
//     `;

//     if (characterIndex === careers[careerIndex].length) {
//         careerIndex++;
//         characterIndex = 0;
//     }

//     if (careerIndex === careers.length) {
//         careerIndex = 0;
//     }
//     setTimeout(updateText, 250);

// }


// new typer
document.addEventListener('DOMContentLoaded', function () {
    Typed.new('.type', {
        strings: ["Software Developer", "Software Engineer", "Frontend Web Developer"],
        stringsElement: null,

        // typing speed
        typeSpeed: 60,

        // time before typing starts
        startDelay: 600,

        // backspacing speed
        backSpeed: 20,

        // time before backspacing
        backDelay: 700,

        // loop
        loop: true,

        // false = infinite
        loopCount: false,
        // loopCount: 1,

        // show cursor
        showCursor: false,

        // character for cursor
        cursorChar: "|",

        // attribute to type (null == text)
        attr: null,

        // either html or text
        contentType: 'html',
    });
});