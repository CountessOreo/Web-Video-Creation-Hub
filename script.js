const topics = {
    Significance:{
        video: "Video Significance URL",
        text: "Text Significance Content",
        test: "Test Significance Questions",
        answers: "Answers Significance Content",
    },
    Benefits: {
        video: "Video Benefits URL",
        text: "Text Benefits Content",
        test: "Test Benefits Questions",
        answers: "Answers Benefits Content",
    },
    Impact: {
        video: "Video Impact URL",
        text: "Text Impact Content",
        test: "Test Impact Questions",
        answers: "Answers Impact Content",
    },
    Importance: {
        video: "Video Importance URL",
        text: "Text Importance Content",
        test: "Test Importance Questions",
        answers: "Answers Importance Content",
    },
};

const topicsDropdown = document.getElementById("topicsDropdown");
const contentDiv = document.getElementById("content");


for (const topic in topics) {
    const option = document.createElement("option");
    option.value = topic;
    option.textContent = topic;
    topicsDropdown.appendChild(option);
}

topicsDropdown.addEventListener("change", function () {
    const selectedTopic = topicsDropdown.value;
    const selectedTopicInfo = topics[selectedTopic];
    renderTopicInfo(selectedTopicInfo);
});

function renderTopicInfo(topicInfo) {
    const contentHTML = `
        <h2>Video:</h2>
        <p>${topicInfo.video}</p>
        <h2>Text:</h2>
        <p>${topicInfo.text}</p>
        <h2>Test:</h2>
        <p>${topicInfo.test}</p>
        <h2>Answers:</h2>
        <p>${topicInfo.answers}</p>
    `;
    contentDiv.innerHTML = contentHTML;
}
