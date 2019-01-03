import SQLite from 'react-native-sqlite-storage'
import { info } from '../utils/logger'
import { DATABASE } from '../../config'

const TAG = 'DB'

let database

export const close = () => {
  if (!database) return Promise.reject(new Error())

  return database.close()
    .then(() => {
      database = undefined
      info(TAG, 'Database closed.')
    })
}

export const createTodo = async (title) => {
  return open()
    .then(() => {
      return database.executeSql('INSERT INTO todo (title) VALUES (?);', [title])
    })
    .then(([results]) => {
      info(TAG, 'Created a new todo.')
      return results.insertId
    })
    .then((id) => {
      info(TAG, 'Finding a todo with id =', id + '...')
      return database.executeSql('SELECT * FROM todo WHERE id = ?;', [id])
    })
    .then(([results]) => {
      const todo = results.rows.item(0)
      info(TAG, 'Found todo with id =', todo.id + '!')
      return todo
    })
    .then((todo) => {
      info(TAG, 'Closing DB...')
      close()

      const id = todo.id
      const title = todo.title
      const checked = !!todo.checked

      info(TAG, 'Returning todo...')
      info(TAG, 'todo:', todo)

      return {
        id,
        title,
        checked
      }
    })
    .catch(() => {
      close()
    })
}

export const open = async () => {
  if (database) return Promise.resolve(database)

  SQLite.DEBUG(true)
  SQLite.enablePromise(true)

  return SQLite.openDatabase({ name: DATABASE.FILE_NAME, location: 'default' })
    .then((db) => {
      database = db
      database.transaction((tx) => {
        tx.executeSql(`
          CREATE TABLE IF NOT EXISTS todo (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            checked INTEGER (1) NOT NULL DEFAULT 0
          );
        `)
      })
      info(TAG, 'Database opened.')
      return database
    })
}
