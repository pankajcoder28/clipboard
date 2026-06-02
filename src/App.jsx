
function App() {

  return (
    <section id="hero" >

      <div className="section-container mb-40 px-10 pt-16">
        <img src="src/images/logo.svg" alt="" className="w-50 h-50 mx-auto my-16 rounded-full" />

        <h3>
          A history of everything you copy
        </h3>

        <p className="max-w-3xl mx-auto mb-10 text-2xl text-gray-400">
          clipboard allows you to track and organize everything you copy. 
          Instantly access your clipboard on all your devices.
        </p>

        <div className="flex flex-col justify-center w-full space-y-5 text-2xl text-white md:flex-row md:space-y-0 md:space-x-4">
          <button className="text-black bg-green-300 rounded-4xl p-3 px-8  hover:opacity-70 cursor-pointer active:scale-98 duration-100 ">Download for ios</button>
          <button className="text-black bg-blue-300 rounded-4xl p-3 px-8 hover:opacity-70 cursor-pointer active:scale-98 duration-100 ">Download for Mac</button>
        </div>
      </div>

      <section className="snippets">
        <div className="section-container my-20 px-10">
          <h3>Keep track of your snippets</h3>

          <p className=" max-w-3xl mx-auto mb-10 text-2xl text-gray-400" >clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices.</p>
        </div>
      </section>

      <section id="features">
        <div className="section-container my-0">
          <div className="relative flex flex-col md:flex-row md:space-x-32">
            <div className="md:w-1/2">
              <img src="src/images/image-computer.png" alt="" className="md:absolute top-0 right-[50%] " />
            </div>
            <div className="flex flex-col mt-16 mb-24 space-y-12 text-xl md:mb-60 md:text-left md:pl-16">
              <div>
                <h5 className="text-2xl font-bold  text-gray-500 text-center">Quick Search</h5>
                <p className="max-w-3xl mx-auto mb-10 text-2xl text-gray-400 md:text-center">easily search your snippets by content category,web address,applcation,and more.</p>
              </div>
              <div>
                <h5 className="text-2xl font-bold  text-gray-500 text-center">icloud sync</h5>
                <p className="max-w-3xl mx-auto mb-10 text-2xl text-gray-400 md:text-center">easily search your snippets by content category,web address,applcation,and more.</p>
              </div>
              <div>
                <h5 className="text-2xl font-bold  text-gray-500 text-center">completely History</h5>
                <p className="max-w-3xl mx-auto mb-10 text-2xl text-gray-400 md:text-center">easily search your snippets by content category,web address,applcation,and more.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="access">
        <div className="section-container my-10">
            <h3 >Access clipboard anywhere</h3>
            <p className="max-w-3xl mx-auto mb-10 text-2xl text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis incidunt modi nemo nesciunt veniam molestiae sint corporis perferendis.
            </p>
            <img src="src/images/image-devices.png" alt="" className="mx-auto" />
        </div>
      </section>

      <section id="supercharge">
        <div className="section-container my-20">
          <h2 className="text-4xl font-bold text-gray-500 mb-10">supercharge your workflow </h2>
          <p className="section-content mb-16"> we have got the tools to boost your productivity </p>

          <div className="flex flex-col items-center justify-between space-y-16 md:flex-row md:space-y-0 md:space-x-12 ">
            <div className="flex flex-col items-center space-y-5">
              <img src="src/images/icon-blacklist.svg" alt="" className="mb-6" />
              <h5 className="text-xl font-bold m-3 text-gray-600">Create blacklists</h5>
              <p className="max-w-md text-gray-400">Easily search your snippets by content,category,web address,application , and more.</p>
            </div>

             <div className="flex flex-col items-center space-y-5">
              <img src="src/images/icon-text.svg" alt="" className="mb-6" />
              <h5 className="text-xl font-bold m-3 text-gray-600">Plain Text Snippets</h5>
              <p className="max-w-md text-gray-400">Easily search your snippets by content,category,web address,application , and more.</p>
            </div>

            <div className="flex flex-col items-center space-y-5">
              <img src="src/images/icon-preview.svg" alt="" className="mb-6" />
              <h5 className="text-xl font-bold m-3 text-gray-600">Sneak Preview</h5>
              <p className="max-w-md text-gray-400">Easily search your snippets by content,category,web address,application , and more.</p>
            </div>
          </div>
        </div>

      </section>

      <section id="references">
        <div className="flex flex-col items-center justify-between px-10 max-w-6xl mx-auto my-30 space-y-20 md:flex-row md:space-y-0">
          <img src="src/images/logo-google.png" alt="" />
          <img src="src/images/logo-hp.png" alt="" />
          <img src="src/images/logo-ibm.png" alt="" />
          <img src="src/images/logo-microsoft.png" alt="" />
          <img src="src/images/logo-vector-graphics.png" alt="" />
        </div>
      </section>
      <section id="bottom">
        <div className="section-container my-20">
          <h3 className="tracking-wider">clipboard for ios and macOS</h3>
          <p className="section-content">
            available for free on the app store. Download for mac or ios ,sync with icloud and you are ready to start adding to your clipboard
          </p>
          <div className="flex flex-col  justify-center mt-10 space-y-5 text-2xl text-white pl-6  md:flex-row md:space-y-0 md:space-x-4">
          <button className="text-black bg-green-300 rounded-4xl max-w-md p-3 px-8  hover:opacity-70 cursor-pointer active:scale-98 duration-100 ">Download for ios</button>
          <button className="text-black bg-blue-300 rounded-4xl max-w-md p-3 px-8 hover:opacity-70 cursor-pointer active:scale-98 duration-100 ">Download for Mac</button>
        </div>
        </div>
      </section>
      <footer className="bg-gray-50">
        <div className="section-container p-4">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <img src="src/images/logo.svg" alt="" className="w-18 " />
            {/*container for menus and social */}
            <div className="flex flex-col items-center justify-between flex-1 mb-10 space-y-6 md:flex-row md:mb-0 md:space-y-0 text-gray-400">
              {/*menus */}
              <div className="flex flex-col space-y-4 md:flex-row md:ml-24 md:space-x-24 md:space-y-0">
                  <div className="felx flex-col space-y-4  text-center md:text-left">
                    <div><a href="#" className="hover:text-cyan-300 ">FAQs</a></div>
                    <div><a href="#" className="hover:text-cyan-300">Contact-us</a></div>
                  </div>
                  <div className="felx flex-col space-y-4  text-center md:text-left">
                    <div><a href="#" className="hover:text-cyan-300 ">privacy policy</a></div>
                    <div><a href="#" className="hover:text-cyan-300">press kit</a></div>
                   
                  </div>
                  <div className="felx flex-col space-y-4  text-center md:text-left">
                    <div><a href="#" className="hover:text-cyan-300 ">press kit</a></div>
                    <div><a href="#" className="hover:text-cyan-300">install guide</a></div>
                  </div>
              </div>
              {/*social */}
              <div className="flex gap-5 ">
                <a href="#"><img src="src/images/icon-instagram.svg" alt="" className="duration-200 ficon"/></a>
                <a href="#"> <img src="src/images/icon-twitter.svg" alt="" className="duration-200 ficon"/></a>
                <a href="#"> <img src="src/images/icon-facebook.svg" alt="" className="duration-200 ficon" /></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
    
    
  )
}

export default App
