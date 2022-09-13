import React from 'react'
import './../style/announcement.scss';

function Announcement() {
    const styleAnnouncement = {
        height:'3rem',
        backgroundColor:'teal',
        color:'white',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        
    }
    return (
        <div style={styleAnnouncement} className='mainAnnouncement'>
            <p>Super Deal! Free Shipping on Orders Over $50</p>
        </div>
    )
}

export default Announcement
