
/***************** .Slide Animation*************/

// Animation Slide
let nextBtn = document.querySelector('.next')
let prevBtn = document.querySelector('.prev')

let slider = document.querySelector('.slider')
let sliderList = slider.querySelector('.slider .listt')
let thumbnail = document.querySelector('.thumbnail')
let thumbnailItems = thumbnail.querySelectorAll('.itemm')

thumbnail.appendChild(thumbnailItems[0])

//  next button 
nextBtn.onclick = function () {
    moveSlider('next')
}

// prev button
prevBtn.onclick = function () {
    moveSlider('prev')
}

function moveSlider(direction) {
    let sliderItems = sliderList.querySelectorAll('.itemm')
    let thumbnailItems = document.querySelectorAll('.thumbnail .itemm')

    if (direction === 'next') {
        sliderList.appendChild(sliderItems[0])
        thumbnail.appendChild(thumbnailItems[0])
        slider.classList.add('next')
    } else {
        sliderList.prepend(sliderItems[sliderItems.length - 1])
        thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1])
        slider.classList.add('prev')
    }

    slider.addEventListener('animationend', function () {
        if (direction === 'next') {
            slider.classList.remove('next')
        } else {
            slider.classList.remove('prev')
        }
    }, { once: true })
}
