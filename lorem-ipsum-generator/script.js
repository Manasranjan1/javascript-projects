const tagOptions = ["p", "h1", 'h2', 'h3', 'h4', 'h5', 'h6', 'span'];

const numParaSlider = document.getElementById("numPara");
const wordParaSlider = document.getElementById("wordPara");
const tagsSelect = document.getElementById("tags");
const includeSelect = document.getElementById("include");
const generateBtn = document.getElementById("btn");
const outputTextarea = document.getElementById("textarea");
const copyBtn = document.getElementById("copyBtn");
const resetBtn = document.getElementById("resetBtn");

populateTagOptions();

function populateTagOptions() {
    tagOptions.forEach(tag => {
        const option = document.createElement('option');
        option.value = tag;
        option.textContent = `<${tag}>`;
        tagsSelect.appendChild(option);
    });
}


generateBtn.addEventListener('click', () => {
    const numParagraphs = parseInt(numParaSlider.value);
    const wordsPerParagraph = parseInt(wordParaSlider.value);
    const selectedTag = tagsSelect.value;

    const includeHtml = includeSelect.value === 'yes';

    console.log({ numParagraphs, wordsPerParagraph, selectedTag, includeHtml });

    const generatedText = generateText(numParagraphs, wordsPerParagraph, selectedTag, includeHtml);

        console.log("Generated Text:", generatedText);

    outputTextarea.value = generatedText;
})


function generateText(numParagraphs, wordsPerParagraph, selectedTag, includeHtml) {
    const textBank = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam iste nulla reprehenderit maiores dicta itaque veritatis ut adipisci, exercitationem ea! Fugiat repudiandae asperiores itaque laboriosam nostrum dignissimos labore, fuga obcaecati blanditiis minus illo! Culpa aut deleniti dolorum! Ratione, dignissimos distinctio aspernatur alias at et? Explicabo temporibus accusamus saepe nam cupiditate reiciendis. Fuga temporibus voluptate corrupti consectetur autem sunt blanditiis asperiores nihil. Nam ipsum temporibus magni earum, voluptate quia inventore dolorum repellendus dolores, est, sequi iusto illo eveniet ratione quasi eos? Dolores sed nihil perspiciatis sint saepe sequi, excepturi provident facere. Tempora illum voluptate modi eum in laboriosam voluptatibus quo omnis!'

    const wordArray = textBank.split(' ');
    const result = [];

    for (let index = 0; index < numParagraphs; index++) {
        let paragraphWords = [];
        for (let j = 0; j < wordsPerParagraph; j++) {
            const word = wordArray[Math.floor(Math.random() * wordArray.length)];
            paragraphWords.push(word);
        }
        let paragraph = paragraphWords.join(" ");
        paragraph = paragraph.charAt(0).toUpperCase() + paragraph.slice(1) + ".";

        if (includeHtml) {
            paragraph = `<${selectedTag}>${paragraph}</${selectedTag}>`;
        }

        result.push(paragraph);
    }

    return result.join("\n\n");

}


copyBtn.addEventListener('click', () => {
    const text = outputTextarea.value;
    if(text.trim()){
        navigator.clipboard.writeText(text)
            .then((result) => {
                alert("Copied to Clipboard!")
            }).catch((err) => {
                alert("Failed to Copy!")
    });
    }else{
        alert("nothing to copy.")
    }
})

resetBtn.addEventListener('click', () => {
    numParaSlider.value = 1;
    wordParaSlider.value = 1;
    tagsSelect.value = 0;
    includeSelect.value = 0;

    // Clear textarea
    outputTextarea.value = ""; 
})

