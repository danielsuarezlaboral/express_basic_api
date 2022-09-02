const { Router } = require('express')
const router = Router()

router.get('/', (req,res)=>{
    const data ={
        "name":"daniel",
        "website":"http://www.google.com"
    }
    res.json(data);
})

module.exports = router