// Services Tabs
var serviceMenuItems = document.getElementById('service-menu').getElementsByTagName('li');
for(var i = 0; i < serviceMenuItems.length; i++){
    serviceMenuItems[i].addEventListener('click', openServiceDetails);
}
function openServiceDetails(e){
    var details = document.getElementById('service-details').getElementsByClassName('content');
    for(var i = 0; i < details.length; i++){
        details[i].style.display = "none";
    }
    var content = document.getElementById('service-'+e.target.dataset.content);
    content.style.display = "flex";
    for(var i = 0; i < serviceMenuItems.length; i++){
        serviceMenuItems[i].classList.remove("active");
    }
    e.target.classList.add('active');
}

// Mobile navigation
function openNav() {
    document.getElementById("nav").style.width = "100%";
}
function closeNav() {
    document.getElementById("nav").style.width = "0";
}

// Swiper configuration
const swiper = new Swiper('.swiper', {
direction: 'horizontal',
loop: true,
navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
},
});