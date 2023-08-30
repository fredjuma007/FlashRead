import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='sumz_logo' className='w-28 object-contain' />

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/fredjuma007/FlashRead", "_blank") // beacause it is open source project
          }
          className='black_btn'
        >
          GitHub
        </button>
        
      </nav>

      <h1 className='head_text'>
        Summarize with FlashRead AI<br className='max-md:hidden' />
        <span className='orange_gradient '>Powered by GPT-4</span>
      </h1>
      <h2 className='desc'>
        Simplify your reading & research with FlashRead, an article summarizer AI
        that transforms lengthy web articles into clear straight-fowrward summaries
      </h2>

    </header>
  )
}

export default Hero