import React from 'react'

const Course = ({ course}) => (
    <React.Fragment key={course.id}>
        <p>{`${course.id} - ${course.title} by ${course.author}`}</p>
    </React.Fragment>
)

export default Course