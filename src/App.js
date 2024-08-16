import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="flex py-10 px-14 justify-center text-center">
    <div className=''>
      <div className='flex justify-center'>
    <img src="/images/Group 1.svg" alt="hero" />
    </div>
    <div className='flex justify-center'>

<h4 className='text-[#72AC5A] text-center pt-20 px-5 md:px-10 pb-16 font-bold font-modak leading-[60px] md:leading-[70px] max-w-[1000px] text-[54px] md:text-[68px]'>For health builders, investors, and industry players.</h4>
 </div>
 <div className='flex justify-center'>

   <h6 className='text-[#052C37] text-[19px] font-sec px-5 md:px-10 max-w-[833px]'>At HealthGap Africa we are catalyzing the growth and connectivity of Africa's health ecosystem.

<br /> <br />With a vibrant and collaborative health community across Africa, where founders, investors, innovators, professionals, and industry players regardless of their background converge to bridge gaps, foster innovation, and collectively propel the region's health ecosystem forward.</h6>
   </div>

   <div className='pt-20'>
<h4 className='font-sec text-[16px] text-[#052C37] font-semibold tracking-widest'>JOIN OUR COMMUNITY</h4>
   
   <div className='grid pt-12 md:grid-cols-12 md:px-[300px] gap-5'>
    <div className='col-span-5'>
   <input
                                        type="text"
                                        // onChange={handleChange}
                                        className=" border-b-[2px] border-b-[#D9D9D9] text-[#333333] text-sm block w-full p-3"
                                        placeholder="Enter Name"
                                        name="full_name"

                                        required
                                    />   
                                    </div>
    <div className='col-span-7'>

                                       <input
                                    type="text"
                                    // onChange={handleChange}
                                    className=" border-b-[2px] border-b-[#D9D9D9] text-[#333333] text-sm block w-full p-3"
                                    placeholder="Enter Name"
                                    name="full_name"

                                    required
                                />
                                </div>
   </div>

   <div className='pt-10'>
   <a href="mailto:info@healthgapafrica.com" className='text-[#72AC5A]'>info@healthgapafrica.com</a>
   </div>
   </div>
    </div>
    </div>
  );
}

export default App;
