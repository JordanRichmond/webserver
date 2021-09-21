const {Router} = require("express");
const helloRouter = Router();
const {
    steve,
    addSteve,
    updateSteve,
    deleteSteve,
} = require("../controllers");

helloRouter.get("/steve", steve);
helloRouter.post("/steve", addSteve);
helloRouter.put("/steve", updateSteve);
helloRouter.patch("/steve", updateSteve);
helloRouter.delete("/steve", deleteSteve);


module.exports = helloRouter;