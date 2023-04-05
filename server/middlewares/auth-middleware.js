const jwt = require('jsonwebtoken');

const requireAuth = (req, res, next) => {
    const authHeader = req.headers['authorization']
    //Authorization: Bearer JWT_ACCESS_TOKEN

    const token = authHeader
    // const token = authHeader && authHeader.split(' ')[1] 
    //After Spliting it will be [Bearer, JWT_ACCESS_TOKEN]
    //Then We take only the second element which is the JWT_ACCESS_TOKEN

    if (token == null) return res.sendStatus(401)
  
    jwt.verify(token, process.env.JWT_KEY, (err, user) => {  
      if (err) return res.sendStatus(403)
  
      req.user = user
  
      next()
    })
}

module.exports = requireAuth;