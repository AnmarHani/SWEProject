const express = require('express');
const router = express.Router();

const contentControllers = require('../controllers/content-controllers');

const requireAuth = require('../middlewares/auth-middleware')
const requireAdmin = require('../middlewares/admin-middleware')

/* Start Guest Routes */
    router.get('/', contentControllers.allContents);
/* End Guest Routes */

/* Start Authenticated Routes */
/* 
put data must contain = {
        reference
    }
    */ 
   /* End Authenticated Routes */
   
   /* Start Admin Routes */
   router.post('/create'      , [requireAuth, requireAdmin], contentControllers.createContent);
   /* 
   post data must contain = {
       title,
       body: {
           text,
           media,
           links
        },
        points,
        tags
    }
    */ 
   router.get('/:id'                  , requireAuth, contentControllers.getContent)
   router.get('/user-contents/:userId'    , requireAuth, contentControllers.getUserContents)
   router.get('/submittions-count/:id', requireAuth, contentControllers.submittionsCount)
   
   router.put('/submit-to-content/:id', requireAuth, contentControllers.submitToContent)
   
   router.put('/update/:id'   , [requireAuth, requireAdmin], contentControllers.updateContent);
   /* 
   put data must contain = anything from the content schema fields
       */ 
      
      router.delete('/delete/:id', [requireAuth, requireAdmin], contentControllers.deleteContent);
      /* End Admin Routes */  
      
      module.exports = router;