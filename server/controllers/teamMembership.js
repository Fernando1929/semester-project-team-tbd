const db = require("../db/index");

const addTeamMembership =  async (req,res) =>{
    try{
        const {user_id, team_id} = req.body;
        const newTeamMembership =  await db.query(
            "INSERT INTO team_membership (user_id, team_id) VALUES($1, $2) RETURNING *",
            [user_id, team_id]
        );

        res.status(201).json(newTeamMember.rows[0]);
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

const getTeamMembershipByUserId =  async (req,res) =>{
    try{
        const teamMembership = await db.query("SELECT * FROM team_membership WHERE user_id = 1$",[req.params.tid]);
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

const updateTeamMembership =  async (req,res) =>{
    try{
        const { user_id } =  req.body;
        const result = await db.query(
            "UPDATE team_membership SET team_id = $1 WHERE user_id =$2",
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

const deleteTeamMembership =  async (req,res) =>{
    try{
        const allTeamMembers = await db.query("DELETE FROM team_membership WHERE user_id = $1",[req.params.id]);
        res.status(204).json({//Verificar si hay que borrar de otro lado tambien
            status: "success",
        });
    }catch(err){
        console.log(err);
    }
}

const searchTeamMembership =  async (req,res) =>{//Needs completion finish later
    try{
        const { team}

    }catch(err){
        console.log(err);
    }
}


module.exports = {
    addTeamMembership,
    getAllTeamMemberships,
    getTeamMembershipById,
    updateTeamMembership,
    deleteTeamMembership,
    searchTeamMembership,
}