import *as usercontroller from '../controllers/user.controller'

const router=Router()

router.post('/',usercontroller.postAmit)

export default router

