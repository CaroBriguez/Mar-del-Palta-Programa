const getAll = async(req,res)=>{
    res.json({data:'GET ALL'});
}

const postData = async(req,res)=>{
    res.json({data:'GET POST SAVE '});
};

const filterData = async(req,res)=>{
    console.log(req.params);
    res.json({data:'GET POST SAVE '});
};
module.exports={getAll,postData,filterData}