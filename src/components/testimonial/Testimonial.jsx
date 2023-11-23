import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'

function Testimonial() {
    const context = useContext(myContext);
    const { mode } = context;
    return (
        <div>
            <section className=''>
                <div className=" container mx-auto px-5 py-10">
                    <h1 className=' text-center text-3xl font-bold text-black' style={{ color: mode === 'dark' ? 'white' : '' }}>Our Team</h1>
                    <h2 className=' text-center text-2xl font-semibold mb-10' style={{ color: mode === 'dark' ? 'white' : '' }}>...... <span className=' text-pink-500'>......</span> ......</h2>
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://i.postimg.cc/rpHK6MJc/IMG20231021120432.jpg" />
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="leading-relaxed">Rohit has been an exceptional frontend developer for our website. Their work reflects a deep commitment to creating a user-friendly, visually appealing, and high-performing website. The frontend is a testament to their expertise in design, responsiveness, and code quality. While there are areas for further improvement.</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{ color: mode === 'dark' ? '#ff4162' : '' }} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">ROHIT PANWAR</h2>
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="text-gray-500">UI Developer</p>
                            </div>
                        </div>

                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://i.postimg.cc/4dXFgRNL/IMG20231021120314.jpg" />
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="leading-relaxed">Sachin has been an invaluable UI/UX designer for our website. Their work reflects a deep commitment to user-centered design, aesthetics, and responsiveness. The website's design is a testament to their expertise and attention to detail. While there are areas for further improvement. </p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">SACHIN BASTE</h2>
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="text-gray-500">UI Designer</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://i.postimg.cc/BbF2dfzS/shiv.jpg" />
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="leading-relaxed">Shivendra has been an invaluable backend developer for our website. Their work is marked by a strong focus on architecture, performance, security, and code quality. The website's backend is a testament to their expertise, ensuring a seamless and secure user experience. </p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">SHIVENDRA LODHI</h2>
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="text-gray-500">Backend Developer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial