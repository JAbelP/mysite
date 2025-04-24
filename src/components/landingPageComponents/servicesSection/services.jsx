import React from 'react'

function Services() {
  return (      <div className="Services-Card-Section flex w-full flex-col lg:flex-row py-4 items-center lg:px-5 bg-neutral justify-evenly">
        
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
      <img
        className="hover:scale-125 transition-all duration-500 cursor-pointer"
        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
        alt="Shoes" />
      </figure>
    <div className="card-body items-center text-center">
      <h2 className="card-title">Blazing Fast Websites</h2>
      <p className="capitalize">Utilizing emerging technology Bright Byte will have you on the web in no time</p>
      <div className="card-actions justify-end">
      </div>
    </div>
    </div>


      <div className="divider lg:divider-horizontal divider-primary"></div>
              
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
      <img
        className="hover:scale-125 transition-all duration-500 cursor-pointer"
        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
        alt="Shoes" />
      </figure>
    <div className="card-body items-center text-center">
      <h2 className="card-title">Social Media Management</h2>
      <p className="capitalize"> Let Bright Byte help you put your face on the web </p>
      <div className="card-actions justify-end">
      </div>
    </div>
    </div>

      <div className="divider lg:divider-horizontal divider-primary"></div>

      <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
      <img
        className="hover:scale-125 transition-all duration-500 cursor-pointer"
        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
        alt="Shoes" />
      </figure>
    <div className="card-body items-center text-center">
      <h2 className="card-title ">Affordable Website and App Hosting</h2>
      <p  className="capitalize "> Host your site with us for affordable pricing</p>
      <div className="card-actions justify-end">
      </div>
    </div>
    </div>
    </div>
  )
}

export default Services