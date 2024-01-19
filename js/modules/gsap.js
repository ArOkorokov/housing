import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

document.addEventListener('DOMContentLoaded', function ()  {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.hero__content-p',{
        x: -100,
        duration: 3.5,
        stagger: 0.5,
        opacity: 0,
    })
    gsap.from('.WhoWeAre__title',{
        scrollTrigger: '.WhoWeAre__title',
        x: -400,
        duration:2,
    })
    gsap.from('.WhoWeAre__animation',{
        scrollTrigger: '.WhoWeAre__title',
        x: -300,
        duration: 2,
        stagger: 0.3,
        opacity: 0,
    })
})
