const Film = require("../models");

const { response } = require("express");

const helloWorld = (req, res) => {
    res.send("SteveRogers says Hello World!");
};

const steve = (req, res) => {
    const name = req.body.name
    res.send(`${name} smells`);
};

const addFilm = async (req, res) => {
    try {
        const film = new Film(req.body)
        await film.save();
        res.status(200).send({film: film, message: "Successfully added film"});
    } catch (error) {
        res.status(500).send({ err: error });
    };

const updateSteve = (req, res) => {
    const name = req.body.name
    res.send(`${name} has been updated`);
}

const deleteSteve = (req, res) => {
    const name = req.body.name
    res.send(`${name} has been deleted`);
}

module.exports = {
    helloWorld, steve, addFilm, updateSteve, deleteSteve,
}
};