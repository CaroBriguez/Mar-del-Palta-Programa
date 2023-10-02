const getAll = async(req,res)=>{
    res.json({data:'GET ALL'});
}

const postData = async(req,res)=>{
    res.json({data:'GET POST SAVE '});
};

module.exports={getAll,postData}