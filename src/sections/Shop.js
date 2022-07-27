import gsap from 'gsap';
import { motion } from "framer-motion";
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useEffect, useLayoutEffect } from 'react'
import { useRef } from 'react';
import styled from 'styled-components'
import img1 from '../assets/Images/1.webp'
import img2 from "../assets/Images/2.webp";
import img3 from "../assets/Images/3.webp";
import img4 from "../assets/Images/4.webp";
import img5 from "../assets/Images/5.webp";
import img6 from "../assets/Images/6.webp";
import img7 from "../assets/Images/7.webp";
import img8 from "../assets/Images/8.webp";
import img9 from "../assets/Images/9.webp";
import img10 from "../assets/Images/10.webp";


const Section = styled.section`
min-height: 100vh;
height: auto;
width: 100vw;
margin: 0 auto;
overflow: hidden;

display: flex;
justify-content: flex-start;
align-items: flex-start;
position: relative;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: "Kaushan Script";
  font-weight: 300;
  text-shadow: 1px 1px 1px ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 11;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Left = styled.div`
  width: 35%;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  min-height: 100vh;
  z-index: 5;

  position: fixed;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: ${(props) => props.theme.font1g};
    font-weight: 300;
    width: 80%;
    margin: 0 auto;
  }
  @media (max-width: 64em) {
    p {
      font-size: ${(props) => props.theme.fontmd};
    }
  }

  @media (max-width: 48em) {
    width: 40%;
    p {
      font-size: ${(props) => props.theme.fontsm};
    }
  }
  @media (max-width: 30em) {
    p {
      font-size: ${(props) => props.theme.fontxs};
    }
  }
`;

const Right = styled.div`
  position: absolute;
  left: 35%;
  padding-left: 30%;
  min-height: 100vh;

  background-color: ${(props) => props.theme.grey};

display: flex;
justify-content: flex-start;
align-items: center;

h1{
    width: 5rem;
    margin: 0 2rem;

}
`;

const Item = styled(motion.div)`
  display: flex;
  width: 20rem;
  margin-right: 6rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img {
    width: 100%;
    height: auto;
    cursor: pointer;
  }
  h1 {
    display: inline-block;
    width: fit-content;
    font-weight: 500;
    text-align: center;
    cursor: pointer;
  }

  @media (max-width: 48em) {
    width: 15rem;
  }
`;


const Product = ({img, title = ""}) => {
  return (
    <Item
      initial={{
        filter: "grayscale(100%)",
      }}
      whileInView={{
        filter: "grayscale(0%)",
      }}
      transition={{
        duration: 0.5
      }}
      viewport={{
        once: false, amount:'all'
      }}
    >
      <img src={img} alt={title} />
      <h1>{title}</h1>
    </Item>
  );
}


const Shop = () => {
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef(null);
  const horizontalRef = useRef(null);

useLayoutEffect(() => {
  let element = ref.current;
let scrollingElement = horizontalRef.current;

let pinWrapWidth = scrollingElement.offsetWidth;
  let tl = gsap.timeline();

  setTimeout(() => {
    tl.to(element, {
      scrollTrigger: {
        trigger: element,
        start: "top top",
        scroller: '.App',
        end: pinWrapWidth,
        scrub: true,
        pin: true,
       
      },

      height: `${scrollingElement.scrollWidth}px`,
      ease: 'none,'
    });

 tl.to(scrollingElement, {
   scrollTrigger: {
     trigger: scrollingElement,
     start: "top top",
     scroller: ".App",
     end: pinWrapWidth,
     scrub: true,
   
    
   },

   x: -pinWrapWidth,
   ease: "none,",
 });


    ScrollTrigger.refresh();
  }, 1000);

   return () => {
     tl.kill();
     ScrollTrigger.kill();
   };
}, [])
  
    return (
      <Section ref={ref} id="shop">
        <Title data-scroll data-scroll-speed="-1">
          New Collection
        </Title>
        <Left>
          <p>
            The brand new collection is currently being developed in USA. We
            create our products using best quality material, including the use
            of some of the pure fabrics to make our products. All products are
            made using the best materials, from the finest cotton to the finest
            fabrics.
            <br />
            <br />
            We have lots of different clothing options like shoes, jackets and
            dresses. Not only clothes but we also provide unique Jewellery as
            well. It is great for us to carry our new clothes all around the
            country and look different.
          </p>
        </Left>
        <Right ref={horizontalRef}>
          <Product img={img1} title="Man Basics" />
          <Product img={img2} title="Tops" />
          <Product img={img3} title="Sweatshirts" />
          <Product img={img4} title="Ethnic Wear" />
          <Product img={img5} title="Blazers" />
          <Product img={img6} title="Suits" />
          <Product img={img7} title="Antiques" />
          <Product img={img8} title="Jewellery" />
          <Product img={img9} title="Watches" />
          <Product img={img10} title="Special Edition" />
        </Right>
      </Section>
    );
}

export default Shop