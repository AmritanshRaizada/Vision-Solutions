document.querySelectorAll('#accordion label').forEach((label) => {
    label.addEventListener('click', (e) => {
        const radio = document.getElementById(label.getAttribute('for'));

        if (radio.checked) {
            radio.checked = false;
            e.preventDefault();
        } else{
            
        }
    });
});
