const db = require("../../db");

const addTeamLeader =  async (req,res) =>{
    try{
        const {user_id} = req.body;
        const duplicated = (await leaderExists(user_id)).valueOf();

        if (!duplicated) {
            const newTeamLeader =  await db.query(
                "INSERT INTO team_leader(user_id) VALUES($1) RETURNING *",
                [user_id]
            );
    
            res.status(201).json(newTeamLeader.rows[0]);
        }
        else {
            res.status(404).json("Team leader record already exists");
        }

    }catch(err){
        console.log(err);
    }
}

const leaderExists = async (req) => {
    try {
      const user_id = req;
      const leader = await db.query(
        "SELECT * FROM team_leader WHERE user_id = $1",
        [user_id]
      );
      if (leader.rows.length !== 0) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      console.log(err);
    }
  };

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
        // const { user_id } =  req.body;
        const teamLeader = await db.query("SELECT * FROM team_leader WHERE user_id = $1 ORDER BY team_leader_id DESC",[req.params.tlid]);
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

const getUserIdByTeamLeader =  async (req,res) =>{
    try{
        const user = await db.query("SELECT user_id FROM team NATURAL INNER JOIN team_leader NATURAL INNER JOIN users WHERE team_id = $1",[req.params.tid]);
        res.status(200).json({
            status: "success",
            data: {
                user: user.rows[0]
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
    getUserIdByTeamLeader,
    updateTeamLeader,
    deleteTeamLeader,
    searchTeamLeader,
}