import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("posts.db");

export const init = () => {
  const promisse = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS posts (id INTEGER PRIMARY KEY AUTOINCREMENT, post TEXT NOT NULL)",
        [],
        () => {
          resolve();
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
  return promisse;
};

export const insertPost = (post) => {
  const promisse = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO posts (post) VALUES (?);`,
        [post],
        (_, result) => {
          console.log("helpers", result);
          resolve(result);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
  return promisse;
};
