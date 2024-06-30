function loader (){
  
  var tl = gsap.timeline();
  
  
  tl.from(".l-text>h1>span",{
      y: 150,
      stagger: {
        amount: -1.5,
        from: "center",
      },
    },"a");
  
  tl.from(".loader-img",{
      height: "0",
      width: "0",
      delay: 0.5,
    }, "a");
  
  tl.to(".loader-img",{
      width: "65vh",
      height: "40vh",
    },"b");
  
  tl.to(".l-img2",{
      opacity: 1,
    },"b");
  
  tl.to(".loader-img",{
      width: "35vh",
      height: "45vh",
      delay: 0.5,
    },"c"
  );
  
  tl.to(".l-img3", {
      opacity: 1,
      delay: 0.4,
    }, "c");
  
  tl.to( ".loader-img", {
      height: "55vh",
      width: "45vh",
      delay: 0.5,
    },"d");
  
  tl.to(".loader-overlay",{
      opacity: 1,
      delay: 0.4,
    },"d");
  
  tl.to(".loader-overlay,.l-img3,.l-img2,.l-img1", {
      opacity: 0,
      delay: -0.2,
      duration: 0.2,
    },"e");
  // tl.to( ".main-img",{
  //     opacity: 1,
  //   },"e");
  
  tl.to( ".loader-img",{
      height: "100vh",
      width: "100%",
    },"f");
  
  tl.to(".l-text>h1>span",{
      y: -170,
      stagger: {
        amount: -0.1,
        from: "center",
      },
    },"f");
  tl.to(".loader-img", {
    opacity: 0,
  });
  
  tl.to(".loader",{
      opacity: 0,
      delay: 0.4,
    },"f");
  
  
  
  tl.from(".text1>span",{
      y: "150",
      stagger: {
        amount: ".8",
      },
      delay: 0.1,
    },"h");
  
  tl.from(".text2>span",{
      y: "150",
      stagger: {
        amount: "-.8",
      },
      delay: 0.1,
    },"h");
  
}
loader()


function loco (){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
loco();




function cursor(){
  
  Shery.mouseFollower({
    //Parameters are optional.
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

  
  var videoC = document.querySelector(".page2 ")
  videoC.addEventListener("mouseenter", function () {
      gsap.to(".mousefollower",{
          opacity:0
      })
      gsap.to("#play-btn",{
        opacity:1
    })
  })
  videoC.addEventListener("mouseleave", function () {
      gsap.to(".mousefollower",{
          opacity:1
      })

      gsap.to("#play-btn",{
          // left:"70%",
          // top:"-5%",
          opacity:0
      })
  })

  videoC.addEventListener("mousemove",function(dets){
    gsap.to("#play-btn",{
        left:dets.x - 100,
        top:dets.y-150
    })
})
  
  

}
cursor()






function nav(){
var btn = document.querySelector("nav button");
var root = document.documentElement;
var flag =0;
btn.addEventListener("click",function(){
    
    if (flag==0){
        root.style.setProperty("--primary","#fff");
        root.style.setProperty("--secondary","#111");
        flag=1;
        btn.innerHTML="Dark"
    }
    else{
        root.style.setProperty("--primary","#111");
        root.style.setProperty("--secondary","#fff");
        flag=0;
        btn.innerHTML = "Light"
    }

    
})
}
nav();


function page2Animation(){
  gsap.from(".page1 .page1-head h1 span",{
    y:200,
    stagger:0.04,
    ease: "power1.inOut",
    delay:5.2
  })


  var tl = gsap.timeline({
    scrollTrigger:{
      trigger:".page2",
      scroller:".main",
      // markers:true,
      start:" -5%",
      end:"100% 0%",
      scrub:3,
      pin:true
    }
  });
  tl.to(".page2 .img1 ",{
    x:"-150%",
  },"a")
  
  tl.to(".page2 .img2 ",{
    x:"170%",
  },"a")
  tl.to(".page2 .img3",{
    x:"440% "
  },"a")
  tl.to(".page2 .page2-vd  ",{
    width:"450vw",
  },"a")
  

}
page2Animation();



function smoothScroller(){
  var tl = gsap.timeline({
    scrollTrigger:{
      trigger:".smooth-scroll",
      scroller:".main",
      // markers:true,
      start:"top 100%",
      end:"top 80%",
    }
  })
  tl.from(".smooth-scroll .heading h1 span ",{
    y:200,
    stagger:0.04,
    ease: "power1.inOut",
  })



  
  var tl = gsap.timeline({
    scrollTrigger:{
      trigger:".smooth-scroll",
      scroller:".main",
      // markers:true,
      start:" 50% 50%",
      end:"80% 35%",
      scrub:3,
    }
  });
  tl.to(".smooth-scroll .img",{
    y:"-10%",
    ease: "power1.out",
    })
    
}
smoothScroller();



function page9Animation(){
  
  var tl = gsap.timeline({
    scrollTrigger:{
      trigger:"#page9",
      scroller:".main",
      // markers:true,
      start:"top 100%",
      end:"top 80%",
    }
  })
  tl.from("#page9 #text .heading h1 span ",{
    y:200,
    stagger:0.04,
    ease: "power1.inOut",
  })


  var tl = gsap.timeline({
    scrollTrigger:{
      trigger:"#page9",
      scroller:".main",
      // markers:true,
      start:" 90% 70%",
      end:"80% 35%",
      scrub:2,
    }
  });

  
  tl.from("#page9 #one",{
    y:"19%",
    ease: "power1.inOut",
  },"e")
  tl.from("#page9 #five",{
    y:"15%",
    ease: "power1.inOut",
  },"e")
  tl.from("#page9 #two",{
    y:"13%",
    ease: "power1.inOut",
  },"e")
  tl.from("#page9 #four",{
    y:"15%",
    ease: "power1.inOut",
  },"e")
  tl.from("#page9 #three",{
    y:"19%",
    ease: "power1.inOut",
  },"e")
}
page9Animation()

function footerBottomAnimation(){
  

  var tl = gsap.timeline({
    scrollTrigger:{
      trigger:".footer-bottom",
      scroller:".main",
      // markers:true,
      start:" 100% 0%",
      end:"80% 35%",
    }
  });
  tl.from(".footer-bottom h1 span ",{
    y:200,
    stagger:0.1,
    ease: "power1.inOut",

  })
 
}

footerBottomAnimation()


function page3Animation(){

 
  var tl = gsap.timeline({
    scrollTrigger:{
      trigger:".page3",
      scroller:".main",
      // markers:true,
      start:"top 100%",
      end:"top 80%",
    }
  })
  tl.from(".page3Head h1 span ",{
    y:200,
    stagger:0.04,
    ease: "power1.inOut",
  })



  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

 
    var tl2 = gsap.timeline({
      scrollTrigger:{
        trigger:".page3",
        scroller:".main",
        // markers:true,
        start:"top 68%",
        end:"top -60%",
        scrub:2
      }
    });
    tl2.to(".page3 .swiper .swiper-slide",{
      x:-400
    },"a")
    // tl.to("#page6 .page6-side",{
    //   x:290
    // },"a")
    

  
}
page3Animation();



function page4Animation() {
  gsap.to(".page4-mark", {
    x: -1000,
    scrollTrigger: {
        trigger: "#page4",
        scroller: ".main",
        start: "top 150%",
        end: "top -50%",
        scrub: 2,
    }
})

gsap.from(".page4-marking", {
    x: -1000,
    scrollTrigger: {
        trigger: "#page4",
        scroller: ".main",
        start: "top 150%",
        end: "top -50%",
        scrub: 2,
        // markers:true
    }
})


}

page4Animation()
