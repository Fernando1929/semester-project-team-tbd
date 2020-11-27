const { query } = require("express");
const db = require("../db/index");


const addMeetingOptionVote = async (req,res) => {
    try {
        const {team_member_id, meeting_option_id} = req.body.vote;
        const result = await db.query("INSERT INTO meeting_options_votes (team_member_id, meeting_option_id) VALUES ($1, $2) RETURNING *", [team_member_id, meeting_option_id])
        res.status(204).json({
            status: "success",
        });
    } catch (err) {
        console.log(err);
    }

}

const isVotingDone = async (req,res) => {
    try {
        const voteCount = await db.query("SELECT COUNT(*) FROM team_members NATURAL INNER JOIN meeting_options_votes NATURAL INNER JOIN meeting_options where team_id =$1",[req.params.tid])
        //const voteCount = await db.query("SELECT vote_count FROM meeting_options WHERE team_id = $1",[req.params.tid])
        const membersCount = await db.query("SELECT COUNT(*) FROM team_members NATURAL INNER JOIN team_membership NATURAL INNER JOIN team where team_id =$1",[req.params.tid])
        if(parseInt(voteCount.rows[0].count) !== parseInt(membersCount.rows[0].count)-1 ){
            return res.status(200).json({data: false}); 

        }
        res.status(200).json({data: true});
    } catch (err) {
        console.log(err);
    }
}

const setEvent = async (req,res) => {
    try {
        const { event_title, start_date_time, end_date_time, r_rule, ex_dates, vote_count, team_id } = req.body;
        const members = await db.query("SELECT user_id FROM users NATURAL INNER JOIN team_members NATURAL INNER JOIN team_membership NATURAL INNER JOIN team where team_id =$1",[team_id])
        var i ;
        for(i = 0; i< members.rows.length; i++){
            const newEvent = await db.query(
                "INSERT INTO user_schedule (event_title, start_date_time, end_date_time, r_rule, ex_dates, user_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
                [event_title, start_date_time, end_date_time, r_rule, ex_dates, members.rows[i].user_id]
            );
        }

        res.status(201).json(req.body.meeting);
    } catch (err) {
       console.log(err); 
    }
}

const hasMemberVoted = async (req,res) => {
    try {
        // const {team_id} = req.body;
        const vote = await db.query("SELECT team_member_id FROM team_members NATURAL INNER JOIN meeting_options_votes NATURAL INNER JOIN meeting_options WHERE user_id = $1 AND team_id = $2", [req.params.tmid, req.params.tid]);
        if (parseInt(vote.rowCount) !== 0) {
            return res.status(200).json({data: true});
        }
        res.status(200).json({data: false});
    } catch (err) {
        console.log(err);
    }
}

const deleteMeetingOptionVoteByTeam = async (req,res) => {
    try {
        const result = await db.query("DELETE FROM meeting_options_votes WHERE meeting_option_id IN (SELECT meeting_option_id FROM meeting_options WHERE team_id = $1)", [req.params.tid])
        res.status(204).json({
            status: "success",
        });
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    addMeetingOptionVote,
    isVotingDone,
    setEvent,
    hasMemberVoted,
    deleteMeetingOptionVoteByTeam
}