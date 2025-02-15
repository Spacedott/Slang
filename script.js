// Example slang words and usage statistics
const slangWords = [
    { word: "lit", meaning: "Used to describe something exciting or cool.", usageData: [10, 25, 50, 75, 100], dateLabels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'] },
    { word: "fam", meaning: "Short for family, used to refer to close friends.", usageData: [5, 15, 30, 50, 80], dateLabels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'] },
    { word: "sus", meaning: "Short for suspicious, used when something seems off.", usageData: [20, 40, 70, 90, 120], dateLabels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'] },
    { word: "flex", meaning: "To show off, usually in a boastful manner.", usageData: [30, 50, 80, 100, 150], dateLabels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'] }
];

// Function to populate slang words list
const slangList = document.getElementById('slang-list');
slangWords.forEach(slang => {
    const listItem = document.createElement('li');
    listItem.textContent = slang.word;
    listItem.addEventListener('click', () => showWordDetails(slang));
    slangList.appendChild(listItem);
});

// Function to display word details and graph
function showWordDetails(slang) {
    const wordInfo = document.getElementById('word-info');
    wordInfo.innerHTML = `
        <h3>${slang.word}</h3>
        <p>${slang.meaning}</p>
        <canvas id="usageChart"></canvas>
    `;

    const ctx = document.getElementById('usageChart').getContext('2d');
    const usageChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: slang.dateLabels,
            datasets: [{
                label: `${slang.word} Usage Over Time`,
                data: slang.usageData,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Function to search for slang words
function searchSlang() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const filteredWords = slangWords.filter(slang => slang.word.toLowerCase().includes(searchTerm));

    const slangList = document.getElementById('slang-list');
    slangList.innerHTML = '';

    filteredWords.forEach(slang => {
        const listItem = document.createElement('li');
        listItem.textContent = slang.word;
        listItem.addEventListener('click', () => showWordDetails(slang));
        slangList.appendChild(listItem);
    });
}

// Link to an external site like Urban Dictionary for slang meanings
function getUrbanDictionaryLink(word) {
    return `https://www.urbandictionary.com/define.php?term=${word}`;
}
