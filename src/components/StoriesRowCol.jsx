import React from 'react'
import StoriesRow from './StoriesRow';
import './StoriesRowCol.css'
function StoriesRowCol() {
    return (
        <div className='StoriesRowCol'>
        <div className="StoriesRowCol__cont">
            
            <StoriesRow 
            profile='http://papers.co/wallpaper/papers.co-bj15-ilya-girl-face-anime-art-34-iphone6-plus-wallpaper.jpg'
            src='https://cdn.britannica.com/18/136518-050-CD0E49C6/The-Beatles-Ringo-Starr-Paul-McCartney-George.jpg'
            name='ნანი'/>
            <StoriesRow 
            profile='https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/MiB.svg/1200px-MiB.svg.png'
            src='https://images-na.ssl-images-amazon.com/images/G/01/digital/video/hero/Movies/1997/B0011E7JBW_meninblack_UXSY1._V143581233_SX1080_.jpg'
            name='Gio B'/>
            <StoriesRow 
            profile='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8y2Y7Gsnbg87nxp6L7AndkSDutwm_nKqgqA&usqp=CAU'
            src='https://i.pinimg.com/236x/6f/18/e7/6f18e71e2a856190b082fae8a2b34590.jpg'
            name='ზურა'/>
            <StoriesRow 
            profile='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRezE0ZJcrtgkZF2_6QkBVD0WqzLuF8dybArkaNk0IhKV88iPThFbmBT26GaZ8lgfQjNW0&usqp=CAU'
            src='https://i.pinimg.com/originals/87/07/90/87079055b55e4dab8117f6d580ec92d5.jpg'
            name='მარი მარი'/>
             <StoriesRow 
            profile='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBiKV2kkpFzIzWA3XYqfNuEejnKNymEVuwa7VY2FQVO8agVT-hULHaU0L7thhvK3DxYDw&usqp=CAU'
            src='https://www.mensjournal.com/wp-content/uploads/mf/back_muscle_main.jpg?w=900&h=506&crop=1&quality=86&strip=all&iswp=1'
            name='Shredded'/>
        </div>
        </div>
    )
}

export default StoriesRowCol
