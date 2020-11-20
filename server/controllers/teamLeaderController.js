const db = require("../db/index");

const addTeamLeader =  async (req,res) =>{
    try{
        const {user_id} = req.body;
        const newTeamLeader =  await db.query(
            "INSERT INTO team_leader(user_id) VALUES($1) RETURNING *",
            [user_id]
        );

        res.status(201).json(newTeamLeader.rows[0]);
    }catch(err){
        console.log(err);
    }
}

//Posible is more than one leader option is implemataded
const getAllTeamLeaders =  async (req,res) =>{
    try{
        const allTeamLeaders = await db.query("SELECT * FROM team_leader")
        res.status(200).json({
            status: "success",
            results: allTeamLeaders.rows.length,
            data:{
                team_leader: allTeamLeaders.rows
            },
        });
    }catch(err){
        console.log(err);
    }
}

const getTeamLeaderByUserId =  async (req,res) =>{
    try{
        const { user_id } =  req.body;
        const teamLeader = await db.query("SELECT * FROM team_leader WHERE user_id = 1$",[user_id]);
        res.status(200).json({
            status: "success",
            data: {
                team: teamLeader.rows[0]
            },
        });
    }catch(err){
        console.log(err);
    }
}

//Not used for now. Maybe later to change roles or something.
const updateTeamLeader =  async (req,res) =>{//Verify
    try{
        const { user_id } =  req.body;
        const result = await db.query(
            "UPDATE team_leader SET user_id = $1 WHERE team_leader_id =$2",
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

const deleteTeamLeader =  async (req,res) =>{
    try{
        const result = await db.query("DELETE FROM team_members WHERE user_id = $1",[req.params.id]);
        res.status(204).json({//Verificar si hay que borrar de otro lado tambien
            status: "success",
        });
    }catch(err){
        console.log(err);
    }
}
//Terminar luego con pareametros por lo que se buscará.
const searchTeamLeader =  async (req,res) =>{
    try{
        // const { team}

    }catch(err){
        console.log(err);
    }
}


module.exports = {
    addTeamLeader,
    getAllTeamLeaders,
    getTeamLeaderByUserId,
    updateTeamLeader,
    deleteTeamLeader,
    searchTeamLeader,
}