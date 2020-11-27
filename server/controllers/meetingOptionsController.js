const db = require("../db/index");

const addMeetingOption = async (req,res) => {
    try {
        const { event_title, start_date_time, end_date_time, r_rule, ex_dates, vote_count, team_id } = req.body.meeting;
        const newMeetingOpt = await db.query(
            "INSERT INTO meeting_options (event_title, start_date_time, end_date_time, r_rule, ex_dates, vote_count, team_id) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
            [event_title, start_date_time, end_date_time, r_rule, ex_dates, vote_count, team_id]
        );
        res.status(201).json(newMeetingOpt.rows[0]);
    } catch (err) {
        console.log(err);
    }
}

const getAllMeetingOptionsByTeamId = async (req,res) => {
    try {
        const meeting_options = await db.query("SELECT * FROM meeting_options WHERE team_id = $1", [req.params.tid]);
        res.status(200).json({
            status: "success",
            results: meeting_options.rows.length,
            data: {
                meetings: meeting_options.rows
            },
        });
    } catch (err) {
        console.log(err);
    }
}

const getMeetingOptionByOptIdAndTeamId = async (req,res) => {
    try {
        const meeting_option = await db.query("SELECT * FROM meeting_option WHERE team_id = $1 AND meeting_option_id = $2", [req.params.tid, req.params.mid]);
        res.status(200).json({
            status: "success",
            results: meeting_option.rows.length,
            data: {
                meeting: meeting_option.rows
            },
        });
    } catch (err) {
        console.log(err);
    }
}

const getMeetingsWithMostVotes = async (req,res) => {
    try {
        const meeting_options = await db.query(
            "SELECT * FROM meeting_options WHERE team_id = $1 AND vote_count = (SELECT MAX(vote_count) FROM meeting_options)", 
            [req.params.tid]
        );
        res.status(200).json({
            status: "success",
            results: meeting_options.rows.length,
            data: {
                meeting: meeting_options.rows
            },
        });
    } catch (err) {
        console.log(err);
    }
}

const updateMeetingOption = async (req,res) => {
    try {
        const { event_title, start_date_time, end_date_time, r_rule, ex_dates } = req.body.meeting;
        const result = await db.query(
            "UPDATE meeting_option SET event_title = $1, start_date_time = $2, end_date_time = $3, r_rule = $4, ex_dates = $5 WHERE team_id = $6 AND meeting_option_id = $7 RETURNING *",
            [event_title, start_date_time, end_date_time, r_rule, ex_dates, req.params.tid, req.params.mid]
            ); 

        res.status(200).json({
            status: "success",
            data: {
                meeting: result.rows[0]
            },
        });
    } catch (err) {
        console.log(err);
    }
}

const updateMeetingVoteCount = async (req,res) => {
    try {
        const result = await db.query(
            "UPDATE meeting_option SET vote_count = (vote_count + 1) WHERE team_id = $1 AND meeting_option_id = $2 RETURNING *",
            [req.params.tid, req.params.mid]
            ); 

        res.status(200).json({
            status: "success",
            data: {
                meeting: result.rows[0]
            },
        });
    } catch (err) {
        console.log(err);
    }
}

const deleteMeetingOption = async (req,res) => {
    try {
        const result = await db.query("DELETE FROM meeting_options WHERE team_id = $1 AND meeting_option_id = $2", [req.params.tid, req.params.mid])
        res.status(204).json({
            status: "success",
        });
    } catch (err) {
        console.log(err);
    }
}

const deleteAllMeetingOptionsByTeam = async (req,res) => {
    try {
        const result = await db.query("DELETE FROM meeting_options WHERE team_id = $1", [req.params.tid])
        res.status(204).json({
            status: "success",
        });
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    addMeetingOption,
    getAllMeetingOptionsByTeamId,
    getMeetingOptionByOptIdAndTeamId,
    getMeetingsWithMostVotes,
    updateMeetingOption,
    updateMeetingVoteCount,
    deleteMeetingOption,
    deleteAllMeetingOptionsByTeam
}