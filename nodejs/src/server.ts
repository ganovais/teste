import express from "express";
import connection from "./database/index";

const api = express();
api.use(express.json());

api.get("/", (request, response) => {
    connection.query(
        "select * from items i where i.active = 1",
        (error, results, fields) => {
            return response.json(results);
        }
    );
});

api.post("/item", (request, response) => {
    const { name, qtde, active } = request.body;
    const date = new Date();

    connection.query(
        "insert into items (name, qtde, active, created_at, updated_at) values (?, ?, ?, ?, ?)",
        [name, qtde, active, date, date],
        (error, results, fields) => {
            return response.json(
                !error ? "Item cadastrado com sucess" : error.sqlMessage
            );
        }
    );
});

api.put("/item/:id", (request, response) => {
    const id = request.params.id;
    const { name, qtde, active } = request.body;
    const updated_at = new Date();

    connection.query(
        "update items i set i.name = ?, i.qtde = ?, i.active = ?, i.updated_at = ? where i.id = ? ",
        [name, qtde, active, updated_at, id],
        (error, results, fields) => {
            return response.json(
                !error ? "Item alterado com sucess" : error.sqlMessage
            );
        }
    );
});

api.put("/item/increase/:id", (request, response) => {
    const id = request.params.id;
    const updated_at = new Date();
    connection.query(
        "select * from items i where i.active = 1 and i.id = ?",
        [id],
        (error, results, fields) => {
            if (!results.length) {
                return response.json("Nenhum item encontrado com esse ID");
            }
            connection.query(
                "update items i set  i.qtde = ?, i.updated_at = ? where i.id = ? ",
                [results[0].qtde + 1, updated_at, id],
                (error, results, fields) => {
                    return response.json(
                        !error
                            ? "Quantidade aumentada com sucesso"
                            : error.sqlMessage
                    );
                }
            );
        }
    );
});

api.put("/item/decrease/:id", (request, response) => {
    const id = request.params.id;
    const updated_at = new Date();
    connection.query(
        "select * from items i where i.active = 1 and i.id = ?",
        [id],
        (error, results, fields) => {
            if (!results.length) {
                return response.json("Nenhum item encontrado com esse ID");
            }
            connection.query(
                "update items i set  i.qtde = ?, i.updated_at = ? where i.id = ? ",
                [results[0].qtde - 1, updated_at, id],
                (error, results, fields) => {
                    return response.json(
                        !error
                            ? "Quantidade diminuida com sucesso"
                            : error.sqlMessage
                    );
                }
            );
        }
    );
});

api.delete("/item/:id", (request, response) => {
    const id = request.params.id;
    connection.query(
        "delete from items where id = ?",
        [id],
        (error, results, fields) => {
            return response.json(
                !error ? "Item deletado com sucess" : error.sqlMessage
            );
        }
    );
});

api.listen(3333, () => {
    console.log("🚀 Server started on port 3333!");
});
