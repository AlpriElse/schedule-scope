var parse = require('csv-parse');
var fs = require('fs');

var course_columns = ["department", "department_code", "course_title", "course_number", "course_description", "course_hours"];
var course_parser = parse({
  delimiter: ',',
  from_line: 2, // Skip label row,
  quote: true,
  columns: course_columns
});

var subject_columns = ["department", "code", "website", "college_code"];
var subject_parser = parse({
  delimiter: ',',
  from_line: 2,
  quote: true,
  columns: subject_columns
});

var COURSE_INFORMATION_FILEPATH = "./data/course-information.csv";
var SUBJECT_INFORMATION_FILEPATH = "./data/subjects.csv";

var readFile = function readFile(filename) {
  return new Promise(function (resolve, reject) {
    fs.readFile(filename, 'utf8', function (err, text) {
      if (err) {
        reject();
      }
      resolve(text);
    });
  });
};

module.exports.loadCourses = function () {
  return new Promise(function (resolve, reject) {
    var courses = [];
    console.log("Reading course information file.");

    readFile(COURSE_INFORMATION_FILEPATH).then(function (text) {
      console.log("Parsing course information csv file.");
      course_parser.write(text);
      course_parser.end();
      course_parser.on('readable', function () {
        var record = course_parser.read();
        var count = 0;
        while (record) {
          count += 1;
          courses.push(record);
          record = course_parser.read();
        }
        console.log("Done parsing course information.");
        courses.sort(function (a, b) {
          return a.course_title - b.course_title;
        });
        resolve(courses);
      });
    }).catch(function (err) {
      reject();
    });
  });
};

module.exports.loadSubjects = function () {
  return new Promise(function (resolve, reject) {
    var subjects = [];
    console.log("Reading subject information file.");
    readFile(SUBJECT_INFORMATION_FILEPATH).then(function (text) {
      console.log("Parsing subject information csv file.");
      subject_parser.write(text);
      subject_parser.end();
      subject_parser.on('readable', function () {
        var record = subject_parser.read();
        var count = 0;
        while (record) {
          count += 1;
          subjects.push(record);
          record = subject_parser.read();
        }
        console.log("Done parsing subject information.");
        subjects.sort(function (a, b) {
          return a.department - b.department;
        });
        resolve(subjects);
      });
    });
  });
};