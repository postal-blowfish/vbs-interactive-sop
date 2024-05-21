function openTab(event, tabName) {
    var i, tabcontent, tablinks;

    // Hide all tab content
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove the 'active' class from all tab links
    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab content and add 'active' class to the clicked tab
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";
}

// Set default tab to be open
document.addEventListener("DOMContentLoaded", function() {
    document.getElementsByClassName("tab-link")[0].click();
});
