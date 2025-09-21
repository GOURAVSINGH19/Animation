import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';


gsap.registerPlugin(useGSAP);

const App = () => {
  const containerRef = useRef();
  const counterRef = useRef();
  const counterWrapperRef = useRef();
  const imageRef = useRef();

  useGSAP(() => {
    const images = containerRef.current.querySelectorAll('[data-img]');

    gsap.set(images, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
    });
    gsap.set(containerRef.current, {
      clipPath: "polygon(0 50%, 0 50%, 100% 50%, 100% 50%)",
    });
    const counterValue = { value: 0 };
    let isComponentMounted = true;

    const tl = gsap.timeline();

    gsap.to(counterValue, {
      value: 100,
      duration: 3,
      ease: "power1.out",
      onUpdate: () => {
        if (counterRef.current && isComponentMounted) {
          const value = Math.floor(counterValue.value);
          counterRef.current.textContent = value;
        }
      },
      onComplete: () => {
        gsap.to(counterWrapperRef.current, {
          opacity: 0,
          duration: 1.5,
          onComplete: () => {
            gsap.to(images, {
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
              duration: .8,
              opacity: 1,
              ease: "power4.inOut",
            });
          }
        });
      },
    })
    tl.to(containerRef.current, {
      clipPath: "polygon(0 100%, 0 0, 100% 0, 100% 100%)",
      duration: 1,
      ease: "power4.inOut",
    });

    return () => {
      isComponentMounted = false;
    };
  }, []);


  return (
    <div className='w-full h-screen'>
      <div ref={counterWrapperRef} className='fixed top-0 left-0 z-[9999] w-full h-screen text-white bg-black pointer-events-none'>
        <div className='relative w-full h-screen'>
          <div
            ref={counterRef}
            className='counter absolute bottom-[1em] right-[3rem] text-[5em] font-semibold font-sans'
          >
            0
          </div>
        </div>
      </div>
      <div
        ref={containerRef}
        className='w-full h-full bg-[#F0EAE2] clip_path'
      >
        <div className="w-full h-full lg:flex relative" style={{ paddingTop: ".5em", paddingBottom: ".5em" }}>
          <div className="left_container lg:w-2/3 h-full" style={{ paddingTop: ".5em", paddingLeft: ".5em", paddingRight: ".5em" }}>
            <div className="upper_side flex justify-between items-center">
              <div className="logo w-6 h-6  rounded-full bg-purple-900"></div>
              <div className="upper_text">
                <p>Get in touch</p>
              </div>
            </div>
            <div className="lower flex flex-col justify-between h-full relative">
              <div className=" w-full sub_header h-1/2 flex justify-between items-start pt-[1em]" style={{ paddingTop: ".5em" }}>
                <div className="left_side_text w-1/2">
                  <div className="sub_upper_header">
                    <p className='text-[1em] uppercase font-semiBold'>New, Delhi</p>
                    <p className='text-[16px] uppercase  text-black font-extrabold'>Available</p>
                  </div>
                  <div className="paragraph" style={{ marginTop: ".4rem" }}>
                    <p className='text-[16px] lg:w-[50rem] text-balance'>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt eaque consequatur enim.
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi laborum optio libero.
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione libero facilis dolorum.
                    </p>
                  </div>
                </div>
                <div className="right_side_photo flex items-start gap-4 relative flex-col" style={{ marginTop: "1em" }}>
                  {/* <div className='w-[5rem]'>
                    <picture ref={imageRef}>
                      <source src='/img_1.png' aria-label='img' />
                      <img src="/img_1.png" alt="img" className='w-full h-full object-cover img' data-img />
                    </picture>
                  </div>
                  <div className='w-[5rem]'>
                    <picture ref={imageRef}>
                      <source src='/img_2.png' aria-label='img' />
                      <img src="/img_2.png" alt="img" className='w-full h-full object-cover img' data-img />
                    </picture>
                  </div> */}
                  <div className='w-[5rem]'>
                    <picture>
                      <source src='/img_3.png' aria-label='img' />
                      <img ref={imageRef} src="/img_3.png" alt="img" className='w-full h-full object-cover img' data-img />
                    </picture>
                  </div>
                </div>
              </div>
              <div className="lower_heading flex flex-col relative justify-end h-2/3" style={{ marginBottom: "0" }}>
                <p className="lower_upper_sub_heading left-2 absolute top-20">
                  Launching -- <span className='text-black font-semibold'>July 25, 2025</span>
                </p>
                <div className="lower_lw_sub_heading uppercase text-[30vw] lg:text-[19vw] mask-b-from-50% mask-t-from-40% text-[#121212]" style={{ letterSpacing: "-1.3rem" }} >
                  topbud
                </div>
              </div>
            </div>
          </div>

          <div className="right_container lg:w-1/2 h-full" style={{ paddingLeft: ".5em", paddingRight: ".5em" }}>
            <picture>
              <source src='/img_4.png' aria-label='img' />
              <img src="/img_4.png" alt="img" className='w-full h-full object-cover' />
            </picture>
          </div>
        </div>
      </div >
      <div />
    </div>
  );
};

export default App;
