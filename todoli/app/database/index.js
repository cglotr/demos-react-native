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

export const createTodo = (title) => {
  open()
    .then((db) => {
      return db.executeSql('INSERT INTO todo (title) VALUES (?)', [title])
    })
    .then(([results]) => {
      info(TAG, 'Created a new todo.')
      info(TAG, 'results', results)
    })
    .finally(() => {
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
