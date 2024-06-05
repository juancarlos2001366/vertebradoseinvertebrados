const words = ["VERTEBRADOS", "INVERTEBRADOS", "AGUA", "AIRE", "TIERRA", "LEON"];
const foundWords = new Set();
let selectedCells = [];

document.querySelectorAll('#sopa td').forEach(cell => {
    cell.addEventListener('click', () => {
        cell.classList.toggle('selected');
        if (cell.classList.contains('selected')) {
            selectedCells.push(cell);
        } else {
            selectedCells = selectedCells.filter(c => c !== cell);
        }
        checkWord();
    });
});

function checkWord() {
    const selectedText = selectedCells.map(cell => cell.textContent).join('');
    if (words.includes(selectedText)) {
        foundWords.add(selectedText);
        selectedCells.forEach(cell => {
            cell.classList.remove('selected');
            cell.classList.add('found');
            cell.style.pointerEvents = 'none';
        });
        selectedCells = [];
        updateWordList();
    }
}

function updateWordList() {
    const wordList = document.getElementById('word-list');
    wordList.innerHTML = words.map(word => foundWords.has(word) ? `<span class="found">${word}</span>` : word).join(', ');
}