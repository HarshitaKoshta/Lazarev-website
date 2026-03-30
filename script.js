// const { Scale } = require("lucide-react")
function locomotiveAni(){
gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  // follwoing line is not required to work pinning on touch screen

  /* pinType: document.querySelector("#main").style.transform
    ? "transform"
    : "fixed"*/
});


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
locomotiveAni()



function navAnimation() {
    var nav = document.querySelector("nav")

    nav.addEventListener("mouseenter", function () {
        let tl = gsap.timeline()
        tl.to("#nav-bottom", {
            height: "21vh"
        })
        tl.to(".nav-part2 h5", {
            display: "block"
        })
        tl.to(".nav-part2 h5 span", {
            y: 0,
            stagger: {
                amount: 0.5
            }
        })
    })

    nav.addEventListener("mouseleave", function () {
        let tl = gsap.timeline()

        tl.to(".nav-part2 h5 span", {
            y: 25,
            stagger: {
                amount: 0.1
            }
        })
        tl.to(".nav-part2 h5", {
            display: "none",
            duration: 0.1

        })
        tl.to("#nav-bottom", {
            height: 0,
            duration: 0.2
        })
    })
}
navAnimation()

function page2Animation(){
    var rightElems = document.querySelectorAll(".right-elem")

rightElems.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        gsap.to(elem.childNodes[3],{
            opacity:1,
            scale:1
        })
    })
    elem.addEventListener("mouseleave",function(){
        gsap.to(elem.childNodes[3],{
            opacity:0,
            scale:0
        })
    })
    elem.addEventListener("mousemove",function(dets){
      gsap.to(elem.childNodes[3],{
        x:dets.x - elem.getBoundingClientRect().x-50,
        y:dets.y - elem.getBoundingClientRect().y-95
      })    
    })
})
}
page2Animation()

function videoAnimation(){
    var sections = document.querySelectorAll(".sec-right")

sections.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        elem.childNodes[3].style.opacity = 1
    elem.childNodes[3].play()
    })
    elem.addEventListener("mouseleave",function(){
        elem.childNodes[3].style.opacity = 0
        elem.childNodes[3].load()
    })
})
}

videoAnimation()


function page6Animation(){
    gsap.from("#btm6-part2 h4",{
    x:0,
    duration:1,
    scrollTrigger:{
        trigger:"#btm6-part2",
        scroller:"#main",
        // marker:true,
        start:"top 85%",
        end:"top -80%",
        scrub:true
    }
})
}
page6Animation()


function loading(){
    var tl= gsap.timeline()
tl.from("#page1",{
    opacity:0,
    duration:0.2,
    delay:1
})
tl.from("#page1",{
    transform:"scaleX(0.7) scaleY(0.2) translateY(30%)",
    duration:1.4,
    ease:"expo.out",
    borderRadius : "50px"
})
tl.from("nav",{
    opacity:0
})
tl.from("#page1 h1,#page1 p,#page1 div",{
    opacity:0,
    duration:0.4,
    stagger:0.2
})
}
loading()