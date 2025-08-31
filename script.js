const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstPageAnim(){
    var tl = gsap.timeline();

    tl.from("#nav", {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })

      .to(".boundingelem", {
        y: 0,
        ease: Expo.easeInOut,
        duration: 2,
        stagger: .2
        
    })

}

function circalmousefollower(){
    window.addEventListener("mousemove", function(dets){
        document.querySelector("#minicircal").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
    })
}

circalmousefollower();
firstPageAnim();

document.querySelectorAll(".elem")
.forEach(function (elem) {
    elem.addEventListener("mousemove", function(dets){
        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: Power1,
        })

    })

});