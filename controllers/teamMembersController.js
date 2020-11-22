const db = require("../db");

const addTeamMember =  async (req,res) =>{
    try{
        const {user_id} = req.body;
        const newTeamMember =  await db.query(
            "INSERT INTO team_members (id) VALUES($1) RETURNING *",
            [user_id]
        );

        res.status(201).json(newTeamMember.rows[0]);
    }catch(err){
        console.log(err);
    }
}

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

const getTeamMemberByUserId =  async (req,res) =>{
    try{
        const teamMember = await db.query("SELECT * FROM team_members WHERE user_id = 1$",[req.params.tid]);
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

const searchTeamMember =  async (req,res) =>{
    try{
        const { team}

    }catch(err){
        console.log(err);
    }
}


module.exports = {
    addTeamMember,
    getAllTeamMembers,
    getTeamMemberByUserId,
    updateTeamMember,
    deleteTeamMember,
    searchTeamMember,
}