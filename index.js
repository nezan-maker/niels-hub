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
})
const element = document.querySelectorAll(".card")
element.forEach((el) => observer.observe(el))
const element1 = document.querySelectorAll(".card1")
element1.forEach((el) => observer.observe(el))
const element2 = document.querySelectorAll(".full-container")
element2.forEach((el) => observer.observe(el))
const element3 = document.querySelectorAll(".image")
element3.forEach((el) => observer.observe(el))
const element4 = document.querySelectorAll(".performance")
element4.forEach((el) => observer.observe(el))
const element5 = document.querySelectorAll(".optimization")
element5.forEach((el) => observer.observe(el))
const element6 = document.querySelectorAll(".card2")
element6.forEach((el) => observer.observe(el))
const element7 = document.querySelectorAll(".kernel")
element7.forEach((el) => observer.observe(el))
const element8 = document.querySelectorAll(".low-level")
element8.forEach((el) => observer.observe(el))
const element9 = document.querySelectorAll(".driver")
element9.forEach((el) => observer.observe(el))
const element10 = document.querySelectorAll(".real-time")
element10.forEach((el) => observer.observe(el))
const element11 = document.querySelectorAll(".security")
element11.forEach((el) => observer.observe(el))