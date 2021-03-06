// Typewriter effect for subtitle
'use strict'

document.addEventListener('DOMContentLoaded', function(event) {
    const dataText = [
        'Fullstack Developer',
        'Instructional Designer',
        'Communicator',
        'Workshop Leader',
        'Mentor',
        'Blogger'
    ]
    const textElementClasses = document.getElementById('typewriter').classList

    const toggleCursor = async () => {
        document.getElementById('typewriter-suffix').classList.toggle('show-cursor')
    }

    const showCursor = () => {
        if (!textElementClasses.contains('show-cursor')) {
            // not in class list
            toggleCursor() // toggle cursor on
        }
    }

    const hideCursor = async () => {
        if (textElementClasses.contains('show-cursor')) {
            // in class list
            toggleCursor() // toggle cursor off
        }
    }

    const toggleHighlight = async () => {
        textElementClasses.toggle('highlight')
        document.getElementById('typewriter-suffix').classList.toggle('highlight')
    }

    const addPrefix = async () => {
        // textElementClasses.add('initial-space')
        document.getElementById('subheading-prefix').innerHTML = 'I am a'
    }

    const addVowelPrefix = async () => {
        // textElementClasses.remove('initial-space')
        document.getElementById('subheading-prefix').innerHTML = 'I am an'
    }

    // type one text in the typewriter
    // keeps calling itself until the text is finished
    async function typeWriter(text, characterCounter, fnCallback) {
        if (characterCounter < text.length) {
            document.getElementById('typewriter').innerHTML =
                text.substring(0, characterCounter + 1) + '<span aria-hidden="true"></span>'
            setTimeout(function() {
                typeWriter(text, characterCounter + 1, fnCallback)
            }, 100)
        } else if (typeof fnCallback == 'function') {
            document.getElementById('typewriter-suffix').innerHTML = '.'
            // flash cursor at the end of the text
            for (var cursorFlashCount = 0; cursorFlashCount < 6; cursorFlashCount++) {
                await new Promise(done =>
                    setTimeout(() => {
                        toggleCursor()
                        done()
                    }, 500)
                )
            }
            // highlight the text then delete
            toggleHighlight() // highlight
            hideCursor()
            await new Promise(done =>
                setTimeout(() => {
                    toggleHighlight() // remove highlight
                    document.getElementById('typewriter-suffix').innerHTML = ''
                    showCursor()
                    done()
                }, 1000)
            )
            setTimeout(fnCallback, 0)
        }
    }
    // start a typewriter animation for a text in the dataText array
    function StartTextAnimation(wordCounter) {
        showCursor()
        if (dataText[wordCounter] == 'Instructional Designer') {
            addVowelPrefix()
        } else {
            addPrefix()
        }
        if (wordCounter >= dataText.length) {
            wordCounter = 0
        }
        if (wordCounter < dataText[wordCounter].length) {
            typeWriter(dataText[wordCounter], 0, async () => {
                // after callback (and whole text has been animated), start next text
                StartTextAnimation(wordCounter + 1)
            })
        }
    }

    StartTextAnimation(0)
})
