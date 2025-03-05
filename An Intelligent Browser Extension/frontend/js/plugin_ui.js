var colors = {
    "-1": "#58bc8a",
    "0": "#ffeb3c",
    "1": "#ff8b66"
};

var featureList = document.getElementById("features");

chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    chrome.storage.local.get(['results', 'legitimatePercents', 'isPhish'], function (items) {
        var tabId = tabs[0].id;

        if (!items.isPhish || !items.legitimatePercents) {
            console.error("Data not found in storage.");
            return;
        }

        var isPhish = items.isPhish[tabId];
        var legitimatePercent = items.legitimatePercents[tabId];


        $("#site_score").text(parseInt(legitimatePercent) + "%");
        if (isPhish) {
            $("#res-circle").css("background", "#ff8b66");
            $("#site_msg").text("Warning!! You're being phished.");
            $("#site_score").text(parseInt(legitimatePercent) - 20 + "%");
        }
    });
});

document.getElementById('reportBtn').onclick = function () {
    window.location.href = 'report.html';
};
