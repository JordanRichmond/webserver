const { response } = require("express");

const helloWorld = (req, res) => {
    res.send("SteveRogers says Hello World!");
};

const steve = (req, res) => {
    const name = req.body.name
    res.send(`${name} smells`);
};

const addSteve = (req, res) => {
    const name = req.body.name
    res.send(`${name} has been posted`);
}

const updateSteve = (req, res) => {
    const name = req.body.name
    res.send(`${name} has been updated`);
}

const deleteSteve = (req, res) => {
    const name = req.body.name
    res.send(`${name} has been deleted`);
}

module.exports = {
    helloWorld, steve, addSteve, updateSteve, deleteSteve,
}