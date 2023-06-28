const userAdmin = (permissions) => {
    return (req,res,next) => {
        const userRole = req.body.Role
        if(permissions.includes(userRole)) {
            next()
        } else {
            return res.status(401).json('You do not have the permission. ')
        }
    }
}

const userSuperAdmin = (permissions) => {
    return (req,res,next) => {
        const userRole = req.body.Role 
        if(permissions.includes(userRole)) {
            next()
        }
        else {
            return res.status(401).json('You do not have the permission. ')
        }
    }
}

module.exports = {
    userAdmin,
    userSuperAdmin
}