const db = require("../db/index");

const addUserScheduleEvent = async (req,res) => {
    try {
        const { event_name, start_time, end_time, days, user_id } = req.body;
        const newEvent = await db.query(
            "INSERT INTO user_schedule (event_name, start_time, end_time, days, user_id) VALUES ($1, $2, $3, $4, $5) RETURNING *",
            [event_name, start_time, end_time, days, user_id]
        );
        res.status(201).json(newEvent.rows[0]);
    } catch (err) {
        console.log(err);
    }
}

// const getAllUserSchedules = async (req, res) => {}

const getIndividualUserSchedule = async (req,res) => {
    try {
        const schedule = await db.query("SELECT * FROM user_schedule WHERE user_id = $1", [req.params.id]);
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

const getUserScheduleEventById = async (req,res) => {
    try {
        const schedule_event = await db.query("SELECT * FROM user_schedule WHERE user_schedule_id = $1", [req.params.sid]);
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

const updateUserScheduleEvent = async (req,res) => {
    try {
        const { event_name, start_time, end_time, days } = req.body;
        const result = await db.query(
            "UPDATE user_schedule SET event_name = $1, start_time = $2, end_time = $3, days = $4 WHERE user_schedule_id = $5 RETURNING *",
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

const deleteUserScheduleEvent = async (req,res) => {
    try {
        const result = await db.query("DELETE FROM user_schedule WHERE user_schedule_id = $1", [req.params.sid])
        res.status(204).json({
            status: "success",
        });
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    addUserScheduleEvent,
    getIndividualUserSchedule,
    getUserScheduleEventById,
    updateUserScheduleEvent,
    deleteUserScheduleEvent
}