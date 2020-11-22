const db = require("../db");

const addTeamScheduleEvent = async (req,res) => {
    try {
        const { event_name, start_time, end_time, days, team_id } = req.body;
        const newEvent = await db.query(
            "INSERT INTO team_schedule (event_name, start_time, end_time, days, team_id) VALUES ($1, $2, $3, $4, $5) RETURNING *",
            [event_name, start_time, end_time, days, team_id]
        );
        res.status(201).json(newEvent.rows[0]);
    } catch (err) {
        console.log(err);
    }
}

// const getAllUserSchedules = async (req, res) => {}

const getIndividualTeamSchedule = async (req,res) => {
    try {
        const schedule = await db.query("SELECT * FROM team_schedule WHERE team_id = $1", [req.params.tid]);
        res.status(200).json({
            status: "success",
            results: schedule.rows.length,
            data: {
                schedule: schedule.rows
            },
        });
    } catch (err) {
        console.log(err);
    }
}

const getTeamScheduleEventById = async (req,res) => {
    try {
        const schedule_event = await db.query("SELECT * FROM team_schedule WHERE team_schedule_id = $1", [req.params.sid]);
        res.status(200).json({
            status: "success",
            data: {
                schedule_event: schedule_event.rows[0]
            },
        });
    } catch (err) {
        console.log(err);
    }
}

// add search gets

const updateTeamScheduleEvent = async (req,res) => {
    try {
        const { event_name, start_time, end_time, days } = req.body;
        const result = await db.query(
            "UPDATE team_schedule SET event_name = $1, start_time = $2, end_time = $3, days = $4 WHERE team_schedule_id = $5 RETURNING *",
            [event_name, start_time, end_time, days, req.params.sid]
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

const deleteTeamScheduleEvent = async (req,res) => {
    try {
        const result = await db.query("DELETE FROM team_schedule WHERE team_schedule_id = $1", [req.params.sid])
        res.status(204).json({
            status: "success",
        });
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    addTeamScheduleEvent,
    getIndividualTeamSchedule,
    getTeamScheduleEventById,
    updateTeamScheduleEvent,
    deleteTeamScheduleEvent
}