//Navigations

function scroll(id){
    let element = document.getElementById(id);
    element.scrollIntoView({
        behavior:"smooth"
    });
}
document.getElementById("aboutLink").addEventListener("click", function(){
    scroll("about");
})
document.getElementById("contactLink").addEventListener("click", function(){
    scroll("contact");
})
document.getElementById("articleLink").addEventListener("click", function(){
    scroll("article");
})
document.getElementById("blogLink").addEventListener("click", function(){
    scroll("blog");
})

//Animations
gsap.from(".para1, .para2",{
    x: -350,
    duration: 2,
    opacity: 0,
    stagger: 0.2,
    scrollTrigger:{
        trigger: ".para1, .para2",
        scroller: "body"       
    }
});

gsap.from(".abtcontent",{
    x:350,
    duration: 2.5,
    opacity: 0,
    scrollTrigger:{
        trigger: ".abtcontent",
        scroller: "body"       
    }
});
gsap.from("#contact-list",{
    y:250,
    duration: 1,
    opacity: 0,
    scrollTrigger:{
        trigger: "#contact-list",
        scroller: "body"       
    }
});

gsap.from(".article h2",{
    y: 50,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
        trigger: ".article h2",
        scroller: "body"
    }
})
gsap.from(".card",{
    y: 200,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
        trigger: ".card",
        scroller: "body"
    }
}
)
//Blogs Navigation

document.querySelector("#card1").addEventListener("click", function(){
    window.location.href = "blog1.html";

});
document.querySelector("#card2").addEventListener("click", function(){
    window.location.href = "blog2.html";
});
document.querySelector("#card3").addEventListener("click", function(){
    window.location.href = "blog3.html";  
});

//Snowfall Animation

snowFall.snow(document.querySelector('body'),{
    round: true,
    minSize: 1,
    maxSize: 6,
    shadow: true,
    flakeCount: 150,
    flakeColor: "#c7dfea"
})
