import React from 'react'
import "./_Comment.scss"
import moment from 'moment'

const Comment = () => {
    return (
        <div>
            <div className="comment p-2 d-flex">
                <img src="/img/avatar.png" alt="avatar" className="rounded-circle mr-3 " width='50px' />
                <div className="comment__body">
                    <p className="comment__header mb-1">
                        Akshay Rathod •{moment("2020-09-5").fromNow()}
                    </p>
                    <p className="mb-0" >Nice video ...!</p>
                </div>
            </div>
        </div>
    )
}

export default Comment
