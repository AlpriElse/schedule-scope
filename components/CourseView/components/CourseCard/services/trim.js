
export const trim = (description) => {
  if (description.length > 450) {
    return `${description.substring(0, 447)}...`
  } else {
    return description
  }
}
