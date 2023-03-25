// Database connection pool from db.js pool.promise()
const db = require('../config/db');
const { post } = require('../routes/postRoutes');


class Post {
    constructor(title, body) {
        this.title = title;
        this.body = body;
    }

    async save() { 
        let d = new Date();
        let yyyy = d.getFullYear();
        let mm = d.getMonth() + 1; 
        let dd = d.getDate();

        let createdAtDate = `${yyyy}-${mm}-${dd}`;

        // correspond to the column names in the database
        let sql = `
        INSERT INTO posts(
            title,
            body,
            created_at
        )
        VALUES(
            '${this.title}',
            '${this.body}',
            '${createdAtDate}'
        )
        `;
        
        // can use await because of the .promise() on db.js
        // [newPost, _]
        return await db.execute(sql);
    }

    static findAll() {
        let sql = "SELECT * FROM posts;";

        return db.execute(sql);
    }
    
    static findById(id) {
        let sql = `SELECT * FROM posts WHERE id = ${id};`;

        return db.execute(sql);
    }

}

module.exports = Post;