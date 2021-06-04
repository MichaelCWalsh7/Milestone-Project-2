let faviconFont = "Lakki Ready";

const vowels = ['A', 'E', 'I', 'O', 'U'];
const consonants = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'];

let anagram = [];
let vowelsUsed = [];
let consonantsUsed = [];

function testingVowelGenerator() {
    // Generates 3 random non-repeating vowels
    while (vowelsUsed.length < 3) {
        let vowelIndexer = Math.floor(Math.random() * 5);
        if (vowelsUsed.includes(vowels[vowelIndexer]) === false) {
            vowelsUsed.push(vowels[vowelIndexer])
        }
    }
}

function testingConsonantGenerator(difficulty) {
    // Generates 6 random non-repeating consonants
    while (consonantsUsed.length < difficulty) {
        let consonantIndexer = Math.floor(Math.random() * 21);
        if (consonantsUsed.includes(consonants[consonantIndexer]) === false) {
            consonantsUsed.push(consonants[consonantIndexer])
        }
    }
}

function testingAnagramGenerator(vowelsUsed, consonantsUsed ) {
    anagram = vowelsUsed.concat(consonantsUsed);


    Shuffle(anagram);
    let anagramStringToModify = anagram.toString();
    anagramString = anagramStringToModify.replace(/,/g, "")

    $("#showString").append(`<li>${anagramString}</li>`);
    
    anagram = [];
    vowelsUsed = [];
    consonantsUsed = [];
}

// Fisher-Yates algorithm to mix the vowels and adjectives
function Shuffle(anagram) {
    for (var i = anagram.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1)); //random index
        [anagram[i], anagram[j]] = [anagram[j], anagram[i]]; // swap
    }
}


// let InputId = this.id;
//     console.log(InputId)
//     let letterToinput = $(`#${InputId}`).innerHtml;
//     console.log(letterToinput)

// console.log(InputId);
// $("#textInput").children().text(this.id.text());



//  --------Duplicate consonants allowed:
// while (consonantsUsed.length < 6) {
//         let consonantIndexer = Math.floor(Math.random() * 21);
//         if (consonantsUsed.includes(consonants[consonantIndexer] * 2) === false) {
//             consonantsUsed.push(consonants[consonantIndexer])
//         }
//     }  The "* 2" line here allows duplicate consonants.

// Current Score: <span id="currentScore">X</span>/<span id="maxScore">20</span>
// Time Remaing:<span>0:00</span>

// Merriam webster api request url:  https://dictionaryapi.com/api/v3/references/collegiate/json/test?key=620f4bc9-4aa8-4c06-aa88-08358e30153a