const db = require("../db/index");

const addTeamMembership =  async (req,res) =>{
    try{
        const {team_member_id} = req.body.team_membership;
        const newTeamMembership =  await db.query(
            "INSERT INTO team_membership (team_id, team_member_id) VALUES($1, $2) RETURNING *",
            [req.params.tid, team_member_id]
        );

        res.status(201).json(newTeamMembership.rows[0]);
    }catch(err){
        console.log(err);
    }
}

const getAllTeamMemberships =  async (req,res) =>{
    try{
        const allTeamMemberships = await db.query("SELECT * FROM team_membership")
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

const getTeamMembershipsByTeamId =  async (req,res) =>{
    try{
        const allTeamMemberships = await db.query("SELECT * FROM team_membership WHERE team_id = $1", [req.params.tid])
        res.status(200).json({
            status: "success",
            results: allTeamMemberships.rows.length,
            data:{
                team_membership: allTeamMemberships.rows
            },
        });
    }catch(err){
        console.log(err);
    }
}

const getTeamMembershipByMemberId =  async (req,res) =>{
    try{
        const teamMembership = await db.query("SELECT * FROM team_membership WHERE team_member_id = $1",[req.params.tmid]);
        res.status(200).json({
            status: "success",
            data: {
                team_membership: teamMembership.rows[0]
            },
        });
    }catch(err){
        console.log(err);
    }
}

const updateTeamMembership =  async (req,res) =>{
    try{
        const { team_member_id } =  req.body;
        const result = await db.query(
            "UPDATE team_membership SET team_member_id = $1 WHERE team_id =$2",
            [team_member_id, req.params.tid]
            );
        
        res.status(200).json({
            status: "success",
            data: {
                team_membership: result.rows[0]
            },
        });
    }catch(err){
        console.log(err);
    }
}

const deleteTeamMembership =  async (req,res) =>{
    try{
        const result = await db.query("DELETE FROM team_membership WHERE team_id = $1 AND team_member_id = $2",[req.params.tid, req.params.tmid]);
        res.status(204).json({//Verificar si hay que borrar de otro lado tambien
            status: "success",
        });
    }catch(err){
        console.log(err);
    }
}

// const searchTeamMembership =  async (req,res) =>{//Needs completion finish later
//     try{
//         const { team}

//     }catch(err){
//         console.log(err);
//     }
// }


module.exports = {
    addTeamMembership,
    getAllTeamMemberships,
    getTeamMembershipsByTeamId,
    getTeamMembershipByMemberId,
    updateTeamMembership,
    deleteTeamMembership,
}