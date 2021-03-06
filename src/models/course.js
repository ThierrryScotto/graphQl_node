'use strict'

const { buildSchema }  = require('graphql');
const courseController = require('../controllers/courseController');

var schema = buildSchema(`
  type Query {
    course(id: Int!): Course
    courses(topic: String): [Course]
  }
  type Mutation {
    updateCourseTopic(id: Int!, topic: String!): Course
  }
  type Course {
    id: Int
    title: String
    author: String
    description: String
    topic: String
    url: String
  }
`);

const root = {
  course: courseController.getCourse,
  courses: courseController.getCourses,
  updateCourse: courseController.updateCourseTopic
};

module.exports = { schema, root };