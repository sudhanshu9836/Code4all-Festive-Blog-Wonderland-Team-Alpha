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

//

snowFall.snow(document.querySelector('body'),{
    round: true,
    minSize: 1,
    maxSize: 6,
    shadow: true,
    flakeCount: 150,
    flakeColor: "#c7dfea"
})

gsap.from(".article h2",{
    y: 50,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
        trigger: ".article h2",
        scroller: "body"
    }
})