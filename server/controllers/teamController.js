const db = require("../db");
const moment = require('moment');

const addTeam = async (req,res) => {
    try {
        const { team_name, team_description, team_leader_id } = req.body.team;
        const date_created = moment(new Date());
        const newTeam = await db.query(
            "INSERT INTO team (team_name, date_created, team_description, team_leader_id) VALUES ($1, $2, $3, $4) RETURNING *",
            [team_name, date_created, team_description, team_leader_id]
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
        const { team_name, date_created, team_description } = req.body;
        const result = await db.query(
            "UPDATE team SET team_name = $1, date_created = $2, team_description = $3 WHERE team_id = $4 RETURNING *",
            [team_name, date_created, team_description, req.params.tid]
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


const getTeamsByUserId = async (req,res) => {
    try {
        const teams = await db.query("SELECT team_id,team_name,team_description,date_created FROM users NATURAL INNER JOIN team_members NATURAL INNER JOIN team_membership NATURAL INNER JOIN team WHERE user_id = $1", [req.params.id]);
        res.status(200).json({
            status: "success",
            results: teams.rows.length,
            data: {
                teams: teams.rows
            },
        });
    } catch (err) {
        console.log(err);
    }
}

const getMostRecentTeamsByUserId = async (req,res) => {
    try {
        const teams = await db.query("SELECT team_id,team_name,team_description,date_created FROM users NATURAL INNER JOIN team_members NATURAL INNER JOIN team_membership NATURAL INNER JOIN team WHERE user_id = $1 ORDER BY date_created DESC,team_id DESC LIMIT 3", [req.params.id]);
        res.status(200).json({
            status: "success",
            results: teams.rows.length,
            data: {
                teams: teams.rows
            },
        });
    } catch (err) {
        console.log(err);
    }
}

const getTeamAllInfo = async (req,res) => {
    try {
        const teaminfo = await db.query("SELECT team_id, team_name, team_description, team_member_id, user_firstname, user_lastname, email FROM team NATURAL INNER JOIN team_membership NATURAL INNER JOIN team_members NATURAL INNER JOIN users NATURAL INNER JOIN account WHERE team_id = $1", [req.params.tid]);
        res.status(200).json({
            status: "success",
            results: teaminfo.rows.length,
            data: {
                team: teaminfo.rows
            },
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
    deleteTeam,
    getTeamsByUserId,
    getMostRecentTeamsByUserId,
    getTeamAllInfo,
}