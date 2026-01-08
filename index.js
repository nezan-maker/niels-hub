const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show")
        }
        else {
            entry.target.classList.remove('show')
        }
    })
}, {
    threshold: 0.1
})
const element = document.querySelectorAll(".card")
element.forEach((el) => observer.observe(el))
const element1 = document.querySelectorAll(".card1")
element1.forEach((el) => observer.observe(el))
const element2 = document.querySelectorAll(".full-container")
element2.forEach((el) => observer.observe(el))
const element3 = document.querySelectorAll(".image")
element3.forEach((el) => observer.observe(el))
const element4 = document.querySelectorAll(".about")
element4.forEach((el) => observer.observe(el))
const element5 = document.querySelectorAll(".card2")
element5.forEach((el) => observer.observe(el))
const element6 = document.querySelectorAll(".kernel")
element6.forEach((el) => observer.observe(el))
const element7 = document.querySelectorAll(".low-level")
element7.forEach((el) => observer.observe(el))
const element8 = document.querySelectorAll(".driver")
element8.forEach((el) => observer.observe(el))
const element9 = document.querySelectorAll(".real-time")
element9.forEach((el) => observer.observe(el))
const element10 = document.querySelectorAll(".security")
element10.forEach((el) => observer.observe(el))