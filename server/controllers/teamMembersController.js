const db = require("../db");

const addTeamMember =  async (req,res) =>{
    try{
        const {user_id} = req.body;
        const duplicated = (await memberExists(user_id)).valueOf();

        if (!duplicated) {
            const newTeamMember =  await db.query(
                "INSERT INTO team_members (user_id) VALUES($1) RETURNING *",
                [user_id]
            );
    
            res.status(201).json(newTeamMember.rows[0]);
        }
        else {
            res.status(404).json("Team member record already exists");
        }

    }catch(err){
        console.log(err);
    }
}

const memberExists = async (req) => {
    try {
      const user_id = req;
      const member = await db.query(
        "SELECT * FROM team_members WHERE user_id = $1",
        [user_id]
      );
      if (member.rows.length !== 0) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      console.log(err);
    }
  };

const getAllTeamMembers =  async (req,res) =>{
    try{
        const allTeamMembers = await db.query("SELECT * FROM team_members")
        res.status(200).json({
            status: "success",
            results: allTeamMembers.rows.length,
            data:{
                users: allTeamMembers.rows
            },
        });
    }catch(err){
        console.log(err);
    }
}

const getTeamMembersByTeamId =  async (req,res) =>{
    try{
        const allTeamMembers = await db.query("SELECT * FROM team NATURAL INNER JOIN team_membership NATURAL INNER JOIN team_members WHERE team_id = $1",
            [req.params.tid]
        );
        res.status(200).json({
            status: "success",
            results: allTeamMembers.rows.length,
            data:{
                users: allTeamMembers.rows
            },
        });
    }catch(err){
        console.log(err);
    }
}

const getTeamMemberByUserId =  async (req,res) =>{
    try{
        // const {user_id} = req.body;
        const teamMember = await db.query("SELECT * FROM team_members WHERE user_id = $1 ORDER BY team_member_id DESC",[req.params.tmid]);
        res.status(200).json({
            status: "success",
            data: {
                team: teamMember.rows[0]
            },
        });
    }catch(err){
        console.log(err);
    }
}

//Not used for now. Maybe later if roles are implementated.
const updateTeamMember =  async (req,res) =>{//Verify
    try{
        const { user_id } =  req.body;
        const result = await db.query(
            "UPDATE team_members SET user_id = $1 WHERE team_member_id =$2",
            [user_id, req.params.id]
            );
        
        res.status(200).json({
            status: "success",
            data: {
                account: result.rows[0]
            },
        });
    }catch(err){
        console.log(err);
    }
}

const deleteTeamMember =  async (req,res) =>{
    try{
        const result = await db.query("DELETE FROM team_members WHERE user_id = $1",[req.params.id]);
        res.status(204).json({//Verificar si hay que borrar de otro lado tambien
            status: "success",
        });
    }catch(err){
        console.log(err);
    }
}

const getAllMembersExceptLeaderByTeamId = async (req,res) => {
    try {
        const members = await db.query("SELECT team_member_id, user_id, pref_start_work_hour, pref_end_work_hour FROM users NATURAL INNER JOIN team_members NATURAL INNER JOIN team_membership NATURAL INNER JOIN team WHERE team_id = $1 AND user_id != (SELECT user_id FROM team NATURAL INNER JOIN team_leader WHERE team_id = $2)",
        [req.params.tid,req.params.tid]);
        res.status(200).json({
            status: "success",
            results: members.rows.length,
            data: {
                members: members.rows
            },
        });
    } catch (err) {
        console.log(err);
    }
}

const getTeamMembersScheduleByTeamId = async (req,res) => {// is this query gonna work?? Test for the algorithm
    try{
        const teamMembersSchedule = await db.query("SELECT user_schedule FROM user NATURAL INNER JOIN user_schedule NATURAL INNER JOIN team_member NATURAL INNER JOIN team_membership where team_id = $1",[req.params.tid]);
        res.status(200).json({
            status: "success",
            results: teamMembersSchedule.rows.length,
            data:teamMembersSchedule.rows,
        })
    }catch(err){
        console.log(err);
    }
}

// const searchTeamMember =  async (req,res) =>{
//     try{
//         const { team}

//     }catch(err){
//         console.log(err);
//     }
// }


module.exports = {
    addTeamMember,
    getAllTeamMembers,
    getTeamMemberByUserId,
    getTeamMembersByTeamId,
    updateTeamMember,
    deleteTeamMember,
    getAllMembersExceptLeaderByTeamId
}