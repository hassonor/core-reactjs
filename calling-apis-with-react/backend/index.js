const express = require("express");
const cors = require("cors");
const dbfile = "./data/globoticket.db";
const port = 3003;
const webAppOrigin = "http://localhost:3000";
const pageSize = 3;

const sqlite3 = require("sqlite3").verbose();
let db = new sqlite3.Database(dbfile);

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use(
    cors({
        origin: webAppOrigin,
        methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
        exposedHeaders: ["X-SESSION-TOKEN"]
    })
);

app.get("/events", (req, res) => {
    let sql = "SELECT * FROM event ORDER BY date ASC";
    db.all(sql, (err, rows) => {
        if (req.query.page &&
            !isNaN(parseInt(req.query.page)) &&
            parseInt(req.query.page) > 0) {
            const hasMore = rows.length > pageSize * parseInt(req.query.page);
            rows = rows.slice(pageSize * (parseInt(req.query.page) - 1), pageSize * parseInt(req.query.page));
            res.send({hasMore: hasMore, rows: rows});
        } else {
            res.send(rows);
        }
    });
});

app.get("/cart", (req, res) => {
    if (req.header("X-SESSION-TOKEN")) {
        let sql = "SELECT cartitem.*, event.artist, event.name, event.date, event.price, event.imgUrl FROM cartitem INNER JOIN event ON cartitem.event_id = event.id WHERE uuid = ?";
        db.all(sql, [req.header("X-SESSION-TOKEN")], (err, rows) => {
            res.send(rows);
        });
    } else {
        res.sendStatus(400).end();
    }
});

app.post("/cart", (req, res) => {
    if (req.header("X-SESSION-TOKEN") && req.body.id) {
        let sql = "SELECT COUNT(*) as count FROM cartitem WHERE uuid = ? AND event_id = ?";
        db.get(
            sql,
            [req.header("X-SESSION-TOKEN"), parseInt(req.body.id)],
            (err, row) => {
                let cnt = row.count;
                if (cnt === 0) {
                    sql = "INSERT INTO cartitem (uuid, event_id, quantity) VALUES (?, ?, 1)";
                } else {
                    sql = "UPDATE cartitem SET quantity = quantity + 1 WHERE uuid = ? AND event_id = ?";
                }
                db.run(
                    sql,
                    [req.header("X-SESSION-TOKEN"), req.body.id],
                    (err) => {
                        res.sendStatus(200).end();
                    });
            });
    } else {
        res.sendStatus(400).end();
    }
});

app.patch("/cart", (req, res) => {
    if (req.header("X-SESSION-TOKEN") &&
        req.body.id && req.body.quantity) {
        sql = "UPDATE cartitem SET quantity = ? WHERE uuid = ? AND event_id = ?";
        db.run(
            sql,
            [req.body.quantity, req.header("X-SESSION-TOKEN"), req.body.id],
            (err) => {
                res.sendStatus(200).end();
            });
    } else {
        res.sendStatus(400).end();
    }
});

app.delete("/cart", (req, res) => {
    if (req.header("X-SESSION-TOKEN")) {
        if (req.body.id) {
            let sql = "DELETE FROM cartitem WHERE uuid = ? AND event_id = ?";
            db.run(sql, [req.header("X-SESSION-TOKEN"), req.body.id], (err) => {
                res.sendStatus(200).end();
            });
        } else {
            let sql = "DELETE FROM cartitem WHERE uuid = ?";
            db.run(sql, [req.header("X-SESSION-TOKEN")], (err) => {
                res.sendStatus(200).end();
            });
        }
    } else {
        res.sendStatus(400).end();
    }
});

app.use((req, res) => {
    res.status(404);
});

app.listen(port, () => {
    console.log(`API running on port ${port}.`);
});