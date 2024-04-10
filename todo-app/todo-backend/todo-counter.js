const { getAsync, setAsync } = require('./redis/index')

const increment = async() => {
  const counter = await getAsync('added_todos')
  await setAsync('added_todos', Number(counter) + 1)
}

const getCounter = async() => {
  const counter = await getAsync('added_todos')
  return Number(counter)
}

module.exports = {increment, getCounter}