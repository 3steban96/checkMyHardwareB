const express = require ('express');
const router = express.Router();
const systemInfo = require('./controllers');
// const os=require('node:http')
router.get('/getData',async (req,res )=>{
    try {
        console.log('solicitud recibida',req.url)
        const data = await systemInfo.getFullInformation();
        console.log('solicitud exitosa')
        res.json(data);
    } catch (error) {
        console.error('Error obteniendo información completa del sistema:', error);
        res.status(500).json({ error: 'Error obteniendo información completa del sistema' });
    }
}
);
module.exports = router;