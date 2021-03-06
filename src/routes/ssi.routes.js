const { Router } = require('express');

const { getAllssiCotizacion, createssiCotizacion, getssiCotizacion, updatessiCotizacion, updatessiCotizacionStatus, deletessiCotizacion } = require('../controllers/ssiCotizacion.controller');
const { getAllssiCotizacionDetalle, createssiCotizacionDetalle, getssiCotizacionDetalle, deletessiCotizacionDetalle, updatessiCotizacionDetalle } = require('../controllers/ssiCotizacionDetalle.controller');
const { getAllssiCotizacionDetalleLog, createssiCotizacionDetalleLog, getssiCotizacionDetalleLog, deletessiCotizacionDetalleLog } = require('../controllers/ssiCotizacionDetalleLog.controller');
const { getAllssiCotizacionVista, getssiCotizacionVista } = require('../controllers/ssiCotizacionVista.controller');
const { getAllssiRol } = require('../controllers/ssiRoles.controller');

const pool = require('../db');

const router = Router();

// router.get('/tasks', async(req, res) =>{
//     const result = await pool.query('SELECT NOW()');
//     res.json(result.rows[0].now)
// });

router.get('/ssiCotizacion', getAllssiCotizacion);

router.get('/ssiCotizacion/:id', getssiCotizacion);

router.post('/ssiCotizacion', createssiCotizacion);

router.put('/ssiCotizacion/:id', updatessiCotizacion);

router.put('/ssiCotizacionStatus/:id', updatessiCotizacionStatus);

router.delete('/ssiCotizacion/:id', deletessiCotizacion);


// ROUTES DE COTIZACION-DETALLE
router.get('/ssiCotizacionDetalle', getAllssiCotizacionDetalle);

router.get('/ssiCotizacionDetalle/:id', getssiCotizacionDetalle);

router.post('/ssiCotizacionDetalle', createssiCotizacionDetalle);

router.put('/ssiCotizacionDetalle/:id', updatessiCotizacionDetalle);

router.delete('/ssiCotizacionDetalle/:id', deletessiCotizacionDetalle);


// ROUTES DE COTIZACION-DETALLE-LOG
router.get('/ssiCotizacionDetalleLog', getAllssiCotizacionDetalleLog);

router.get('/ssiCotizacionDetalleLog/:id', getssiCotizacionDetalleLog);

router.post('/ssiCotizacionDetalleLog', createssiCotizacionDetalleLog);

router.delete('/ssiCotizacionDetalleLog/:id', deletessiCotizacionDetalleLog);

// ROUTES DE COTIZACION VISTA
router.get('/ssiCotizacionVista', getAllssiCotizacionVista);

router.get('/ssiCotizacionVista/:id', getssiCotizacionVista);

// ROUTES DE ROL
router.get('/ssiCotizacionRol', getAllssiRol)

module.exports = router;