import React from 'react'

function VideoPlayer() {
    return (
        <>
            <div className='my-5 px-lg-5 px-sm-0'>
                 <iframe width="100%" height="300vh"
                    src="https://www.youtube.com/embed/97zGmkdhSNU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                 <div className='px-4 pt-4'>
                    <p>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search
                    </p>
                </div>
            </div>
        </>
    )
}

export default VideoPlayer