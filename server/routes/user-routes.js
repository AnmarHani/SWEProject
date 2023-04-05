const express = require('express');
const router = express.Router();

const userControllers = require('../controllers/user-controllers');

const requireAuth = require('../middlewares/auth-middleware')
const requireAdmin = require('../middlewares/admin-middleware')

/* Start Guest Routes */
    router.post('/register', userControllers.register);
    /* 
        post data must contain = {
            email,
            password
        }
    */
    router.post('/login'   , userControllers.login);
    /* 
        post data must contain = {
            email,
            password
        }
    */    
/* End Guest Routes */

/* Start Authenticated Routes */
router.get('/'               , [requireAuth], userControllers.allUsers); //no longer for admin
router.get('/me'                 , requireAuth, userControllers.getRequestedUser);
router.get('/leaderboard'        , requireAuth, userControllers.leaderboard);

router.put('/create-profile'     , requireAuth, userControllers.createProfile);
/* 
put data must contain = {
    personalInformation: {
        name,
        description,
        gender,
        major,
        intrestedIn,
        phoneNumber
    }
}
*/ 
router.put('/update-credentials', requireAuth, userControllers.updateCredentials);
/* 
put data must contain = anything from the user schema fields
*/ 
/* End Authenticated Routes */

/* Start Admin Routes */

/* 
post data must contain = {
    points
}
*/ 
/* End Admin Routes */  
router.get('/:id'                , requireAuth, userControllers.getUser);
router.post('/add-points/:id', [requireAuth, requireAdmin], userControllers.addPoints);

module.exports = router;