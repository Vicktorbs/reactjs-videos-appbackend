import {Router} from 'express'

import * as videoConroller from './videos.controller'

const router = Router()

router.get('/videos', videoConroller.getVideos)
router.get('/video/:id', videoConroller.getVideo)
router.post('/videos', videoConroller.createVideo)
router.delete('/videos/:id', videoConroller.deleteVideo)
router.put('/videos/:id', videoConroller.updateVideo)

export default router