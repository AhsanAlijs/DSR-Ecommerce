import HomeCard3 from '@/components/dashboard/HomeCard3'
import React from 'react'
import profileUser from '@/assets/dashboard/profile-user.svg'
import ballImage from '@/assets/dashboard/ball-img.png'

const page = () => {

  const cardArr3 = [
    {
      userName: "Andy William",
      userImage: profileUser,
      cardHeader: ballImage,
      videoTitle: "Name of the Video",
      views: "53K views",
      date: "2 weeks ago"
    },
    {
      userName: "Andy William",
      userImage: profileUser,
      cardHeader: ballImage,
      videoTitle: "Name of the Video",
      views: "53K views",
      date: "2 weeks ago"
    },
    {
      userName: "Andy William",
      userImage: profileUser,
      cardHeader: ballImage,
      videoTitle: "Name of the Video",
      views: "53K views",
      date: "2 weeks ago"
    },
    {
      userName: "Andy William",
      userImage: profileUser,
      cardHeader: ballImage,
      videoTitle: "Name of the Video",
      views: "53K views",
      date: "2 weeks ago"
    },
    {
      userName: "Andy William",
      userImage: profileUser,
      cardHeader: ballImage,
      videoTitle: "Name of the Video",
      views: "53K views",
      date: "2 weeks ago"
    },
    {
      userName: "Andy William",
      userImage: profileUser,
      cardHeader: ballImage,
      videoTitle: "Name of the Video",
      views: "53K views",
      date: "2 weeks ago"
    },
    {
      userName: "Andy William",
      userImage: profileUser,
      cardHeader: ballImage,
      videoTitle: "Name of the Video",
      views: "53K views",
      date: "2 weeks ago"
    },
    {
      userName: "Andy William",
      userImage: profileUser,
      cardHeader: ballImage,
      videoTitle: "Name of the Video",
      views: "53K views",
      date: "2 weeks ago"
    },
    {
      userName: "Andy William",
      userImage: profileUser,
      cardHeader: ballImage,
      videoTitle: "Name of the Video",
      views: "53K views",
      date: "2 weeks ago"
    },
    {
      userName: "Andy William",
      userImage: profileUser,
      cardHeader: ballImage,
      videoTitle: "Name of the Video",
      views: "53K views",
      date: "2 weeks ago"
    },
    {
      userName: "Andy William",
      userImage: profileUser,
      cardHeader: ballImage,
      videoTitle: "Name of the Video",
      views: "53K views",
      date: "2 weeks ago"
    },
    {
      userName: "Andy William",
      userImage: profileUser,
      cardHeader: ballImage,
      videoTitle: "Name of the Video",
      views: "53K views",
      date: "2 weeks ago"
    },
  ]


  return (
    <>
      <div>
       <div className='grid grid-cols-4 gap-4 mt-6 max-xl:grid-cols-2 max-md:grid-cols-1'>
          {cardArr3.map((item, index)=>{
            return <HomeCard3 cardBanner={item.cardHeader} profileImage={item.userImage} userName={item.userName} videoTitle={item.videoTitle} views={item.views} weeks={item.date}/>
          })}
        </div>
      </div>
    </>
  )
}

export default page