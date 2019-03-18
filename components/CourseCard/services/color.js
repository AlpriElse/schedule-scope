import  hash from 'js-hash-code'

const colors = [
  "#52A6FF",
  "#E87F3B",
  "#8FDE82",
  "#E5615B",
  "#E597D6",
  "#E5DB9F",
  "#9194E5",
  "#735A54"
]

export const assignColor = (course) => {
  let code = hash(course.department_code + course.course_number)
  let color = colors[Math.abs(parseInt(code)) % colors.length]
  return color
}
