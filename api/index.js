const Course = require('../mongo/models/Course')

const api = require('express').Router()


api.get('/course?', (req, res) => {
  const query = { }

  if (req.query.department_code !== undefined) {
    let department = req.query.department_code
    if (typeof department === 'object') {
      query.$or = []
      for (let code of department) {
        query.$or.push({
          department_code: code
        })
      }
    } else {
      query.department_code = req.query.department_code
    }
    // Handle multiple asks
  }

  // if (req.query.credit_hours !== undefined) {
  //   let credit_hours = req.query.credit_hours
  //   if (typeof credit_hours === 'object') {
  //     //  TODO: handle multiple cases
  //     let
  //   } else {
  //     query.$text = {
  //       $search: credit_hours + " hours."
  //     }
  //   }
  // }

  //  Terms Offered Query
  if (req.query.terms_offered !== undefined) {
    let terms = req.query.terms_offered
    if (typeof terms === 'object') {
      let options = []
      for (let term of terms) {
        options.push({
          terms_offered: term
        })
      }
      if (query.$or !== undefined) {
        let temp = query.$or
        delete query.$or
        query.$and = [
          {
            $or: temp
          },
          {
            $or: options
          }
        ]
      } else {
        query.$or = options
      }
    } else {
      query.terms_offered = terms
    }
  }

  //  General Education Query
  if (req.query.general_education !== undefined) {
    let gen_eds = req.query.general_education
    if (typeof gen_eds === 'object') {
      let options = []
      for (let gen_ed of gen_eds) {
        options.push({
          general_education: gen_ed
        })
      }
      if (query.$or !== undefined) {
        let temp = query.$or
        delete query.$or
        query.$and = [
          {
            $or: temp
          },
          {
            $or: options
          }
        ]
      } else {
        query.$or = options
      }
    } else {
      query.general_education = gen_eds
    }
  }

  console.log(query)
  Course.find(query, (err, courses) => {
    console.log(err)
    res.json(courses)
  })
})

module.exports = api
