// if form sent, add class success on the form
'use strict';
document.addEventListener("DOMContentLoaded", () => {

    let nlForm = document.querySelectorAll('.newsletter-form');
    console.log(nlForm)
    nlForm.forEach((item) => {
        item.addEventListener('submit', () => {
            item.classList.add('success')
        })
    });

});
