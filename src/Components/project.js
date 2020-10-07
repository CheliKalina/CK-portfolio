import React, { useState } from 'react';
import '../App.css'

function Project(proj) {

    let singlePage = proj.project
    const [pageNum, setPageNum] = useState(0);
    const [enabled, setAble] = useState(true)

    const handleClick = () => {
        let newPageNum = pageNum + 1
        let disabled = newPageNum === singlePage.length || newPageNum === 0
        disabled ? setAble(false) : setPageNum(newPageNum)
    }

    const handleBackClick = () => {
        let lastPageNum = pageNum - 1
        let disabled = lastPageNum === singlePage.length || lastPageNum === -1
        disabled ? setAble(false) : setPageNum(lastPageNum)

    }
    return (
        <div className='slide-2'>
            <div className='proj-nav'>
                <div className="square" onClick={handleBackClick} disable={enabled}></div>
            </div>
            <div className='main'>
                <div>{singlePage[pageNum].page}</div>
            </div>
            <div className='proj-nav'><div className="square" onClick={handleClick} disable={enabled} ></div></div>
        </div>


    );
}

export default Project;