function generateNav(current) {
    const navItems = [
        ['Pharmacy Tech Practice', 'index.html'],
        ['FlashCards', 'flashcards.html'],
        ['Transcriptions', 'transcription.html']
    ];

    const nav = document.getElementById('navigation');

    nav.innerHTML = ''; // Prevents duplication if generatenav is called multiple times.

    // Iterate through navItem and create list elements
    navItems.forEach(function(item) {
        var li = document.createElement('li');
        if (item[0].toLowerCase() === current.toLowerCase()) {
            li.textContent = item[0]; // Display current page without hyperlink
        } else {
            var a = document.createElement('a');
            a.href = item[1]; // hyperlink to the respective page
            a.textContent = item[0];
            li.appendChild(a);
        }
        nav.appendChild(li);
    });
}