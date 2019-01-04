import SQLite from 'react-native-sqlite-storage'
import { info, warn } from '../utils/logger'
import { DATABASE } from '../../config'

const TAG = 'DB'

let database

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

export const deleteTodo = async (id) => {
  return open()
    .then((db) => {
      return db.executeSql(`DELETE FROM todo WHERE id = ?;`, [id])
    })
    .then(() => {
      return id
    })
    .catch(() => {
      close()
      warn(TAG, 'Delete todo failed!')
      warn(TAG, 'Todo id =', id + '.')
    })
}

export const getAllTodos = async () => {
  return open()
    .then((db) => {
      info(TAG, 'Finding all todos...')
      return db.executeSql(`SELECT * FROM todo;`)
    })
    .then(([results]) => {
      const len = results.rows.length
      info(TAG, `Found ${len} todo(s)`)

      const todos = []

      for (let i = 0; i < len; i++) {
        const raw = results.rows.item(i)

        const id = raw.id
        const title = raw.title
        const checked = !!raw.checked

        todos.push({
          id,
          title,
          checked
        })
      }

      info(TAG, 'todos:', todos)
      close()

      return todos
    })
    .catch(() => {
      close()
    })
}

const close = () => {
  info(TAG, 'Closing DB...')

  if (!database) {
    info(TAG, "Can't find DB!")
    return Promise.resolve()
  }

  return database.close()
    .then(() => {
      database = undefined
      info(TAG, 'Database closed.')
    })
}

const open = async () => {
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
