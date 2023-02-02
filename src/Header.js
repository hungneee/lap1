import React from 'react'

function Header({author , job , email , phoneNumber , address}) {
  return (
    <div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    <div className="dau text-center">
      <div className="img">
         <img src='https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/325326688_6677710702255841_1519656644961129196_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=OjXl_npGkxMAX-I4xh_&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfD65XjnSysT7c9KivKddQYeVg0degJ6cNLGCDlQzrsSaA&oe=63C67F1F' alt='er'/> 
      </div>
      <div className='text1'>
          <text className='  text-center font-bold  '>
              <h1 className='text-center font-bold'>{author}</h1>
              <h4 className=' text-gray-200 rounded-lg font-bold'>{job}</h4>     
          </text>
      </div>

    </div>
     <div className='info'>
          <i className="fa fa-cloud"></i>
          <a href="#/">{email}</a>
          <i className="fa fa-heart"></i>
          <a href="#/">{phoneNumber}</a>
          <i className="fa fa-car"></i>
          <a href="#/">{address}</a>
      </div>
    </div>
  )
}

export default Header
