const mongoose = require('mongoose')

const ObjectId = mongoose.Schema.Types.ObjectId;

const CourseSchema = new mongoose.Schema({
  _id: ObjectId,
  name: String,
  description: String,
  credit_hours: String,
  number: Number,
  terms_offered: [String],
  general_education: [String],
  department_code: String
})

CourseSchema.index({ description: 'text' })

module.exports = mongoose.model(
  'Course',
  CourseSchema,
  process.env.DB_COURSE_COLLECTION_NAME
)
