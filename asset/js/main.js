function search() {
    const input = document.getElementById('input').value.toUpperCase();
    const cards = document.getElementsByClassName('card');

    for (let i = 0; i < cards.length; i++) {
        const h3 = cards[i].getElementsByTagName('h3')[0];

        if (h3) {
            const rowText = h3.textContent || h3.innerText;

            if (rowText.toUpperCase().indexOf(input) > -1) {
                cards[i].style.display = '';
            } else {
                cards[i].style.display = 'none';
            }
        }
    }
}
