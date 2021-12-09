import React from 'react'

function Announcement() {
    const styleAnnouncement = {
        height:'3rem',
        backgroundColor:'teal',
        color:'white',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        fontSize:'1.4rem'
    }
    return (
        <div style={styleAnnouncement}>
            Super Deal! Free Shipping on Orders Over $50
        </div>
    )
}

export default Announcement
