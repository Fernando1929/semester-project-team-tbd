const db = require("../db/index");

const addTeamMember =  async (req,res) =>{
    try{
        const {user_id , team_id} = req.body;

    }catch(err){
        console.log(err);
    }
}

const getAllTeamMembers =  async (req,res) =>{
    try{
        const allTeamMembers = await db.query("SELECT * FROM team_members")
        res.status(200).json({
            status: "succers",
            results: allTeamMembers.rows.length,
            data:{
                users: allTeamMembers.rows
            },
        });
    }catch(err){
        console.log(err);
    }
}

const getTeamMemberById =  async (req,res) =>{
    try{
        const teamMember = await db.query("SELECT * FROM team_members WHERE team_member_id = 1$",[req.params.tid]);
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

//put
const updateTeamMember =  async (req,res) =>{
    try{
        const { team}

    }catch(err){
        console.log(err);
    }
}

//Del
const deleteTeamMember =  async (req,res) =>{
    try{
        const allTeamMembers = await db.query(" * FROM team_members")
        res.status(200).json({
            status: "succers",
            results: allTeamMembers.rows.length,
            data:{
                users: allTeamMembers.rows
            },
        });
    }catch(err){
        console.log(err);
    }
}

//search
const searchTeamMember =  async (req,res) =>{
    try{
        const { team}

    }catch(err){
        console.log(err);
    }
}