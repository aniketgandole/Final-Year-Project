document.getElementById('reportForm').onsubmit = function (event) {
    event.preventDefault();

    const websiteLink = document.getElementById('websiteLink').value.trim();
    const shortMsg = document.getElementById('shortMsg').value.trim();

    if (!websiteLink || !shortMsg) {
        alert("Please fill out all the fields.");
        return;
    }

    const confirmationMessage = document.createElement('div');
    confirmationMessage.textContent = "Website reported successfully! Returning to main page...";
    confirmationMessage.style.color = "green";
    confirmationMessage.style.fontWeight = "bold";
    confirmationMessage.style.marginTop = "10px";
    document.getElementById('reportForm').appendChild(confirmationMessage);

    setTimeout(() => {
        window.location.href = 'plugin_ui.html';
    }, 5000);
};
