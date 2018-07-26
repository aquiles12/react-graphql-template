import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";

import Course from './Course'

const Courses = () => (
  <div className="coursesContainer">
    <h2>Apollo react template</h2>
    <h3>Courses</h3>
    <Query
      query={gql`
        {
          allCourses {
            id
            title
            author
            description
            topic
            url
          }
        }
      `}
    >
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error fetching data</p>;
        return data.allCourses.map((currentCourse) => (
          <Course course={currentCourse} key={currentCourse.id} />
        ));
      }}
    </Query>
  </div>
);
export default Courses;