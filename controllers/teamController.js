const db = require("../db/index");
const moment = require('moment');

const addTeam = async (req,res) => {
    try {
        const { team_name, team_leader_id } = req.body;
        const date_created = moment(new Date());
        const newTeam = await db.query(
            "INSERT INTO team (team_name, date_created, team_leader_id) VALUES ($1, $2, $3) RETURNING *",
            [team_name, date_created, team_leader_id]
        );
        res.status(201).json(newTeam.rows[0]);
    } catch (err) {
        console.log(err);
    }
}

const getAllTeams = async (req,res) => {
    try {
        const allTeams = await db.query("SELECT * FROM team");
        res.status(200).json({
            status: "success",
            results: allTeams.rows.length,
            data: {
                users: allTeams.rows
            },
        });
    } catch (err) {
        console.log(err);
    }
}

const getTeamById = async (req,res) => {
    try {
        const team = await db.query("SELECT * FROM team WHERE team_id = $1", [req.params.tid]);
        res.status(200).json({
            status: "success",
            data: {
                team: team.rows[0]
            },
        });
    } catch (err) {
        console.log(err);
    }
}

const updateTeam = async (req,res) => {
    try {
        const { team_name, date_created } = req.body;
        const result = await db.query(
            "UPDATE team SET team_name = $1, date_created = $2 WHERE team_id = $3 RETURNING *",
            [team_name, date_created, req.params.tid]
            ); 

        res.status(200).json({
            status: "success",
            data: {
                user: result.rows[0]
            },
        });
    } catch (err) {
        console.log(err);
    }
}

const deleteTeam = async (req,res) => {
    try {
        const result = await db.query("DELETE FROM team WHERE team_id = $1", [req.params.tid])
        res.status(204).json({
            status: "success",
        });
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    addTeam,
    getAllTeams,
    getTeamById,
    updateTeam,
    deleteTeam
}