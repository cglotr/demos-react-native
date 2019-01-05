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
      return results.insertId
    })
    .then((id) => {
      return database.executeSql('SELECT * FROM todo WHERE id = ?;', [id])
    })
    .then(([results]) => {
      return results.rows.item(0)
    })
    .then((todo) => {
      const id = todo.id
      const title = todo.title
      const checked = !!todo.checked

      close()

      return {
        id,
        title,
        checked
      }
    })
    .catch(() => {
      close()
      warn(TAG, 'Create todo failed!')
    })
}

export const deleteTodo = async (id) => {
  return open()
    .then((db) => {
      return db.executeSql(`DELETE FROM todo WHERE id = ?;`, [id])
    })
    .then(() => {
      close()
      return id
    })
    .catch(() => {
      close()
      warn(TAG, 'Delete todo failed!')
    })
}

export const getAllTodos = async () => {
  return open()
    .then((db) => {
      return db.executeSql(`SELECT * FROM todo;`)
    })
    .then(([results]) => {
      const len = results.rows.length
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

      close()

      return todos
    })
    .catch(() => {
      close()
      warn(TAG, 'Failed to get all todos!')
    })
}

export const setTodoChecked = async (id, checked) => {
  return open()
    .then((db) => {
      return db.executeSql(`UPDATE todo SET checked = ? WHERE id = ?;`, [checked, id])
    })
    .then(([results]) => {
      const rowsAffected = results.rowsAffected

      if (rowsAffected !== 1) {
        return Promise.reject(new Error())
      }
    })
    .catch(() => {
      close()
      warn(TAG, 'Set todo checked state failed!')
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
  info(TAG, 'Opening DB...')

  if (database) {
    info(TAG, 'Database is already opened.')
    return Promise.resolve(database)
  }

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
