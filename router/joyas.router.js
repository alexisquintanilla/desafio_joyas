import { Router } from "express";
import { getJoyas, getJoyasV2, getJoyaById, getJoyaFields, getJoyasByCategory } from "../controllers/joyas.controller.js";


const router = Router();

router.get('/v1/joyas', getJoyas);
router.get('/v2/joyas', getJoyasV2);
router.get('/joya/:id', getJoyaById);
router.get('/v2/joya/:id', getJoyaFields);
router.get('/v2/category/:category', getJoyasByCategory);

export default router;