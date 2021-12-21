const element = document.querySelectorAll('.element');
element.forEach(function (el, key) {
    el.addEventListener('click', function () {
        el.classList.add("active");

        element.forEach(function (ell, index) {
            if (key !== index) {
                ell.classList.remove('active');
            }
        });
    });
});

