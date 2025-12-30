import { getUser } from "../DAL/prodactsDAL.js";

const validateUser = async (req, res, next) => {
    let user = null
    try {
        user = await getUser(req.body.username, req.body.password);
        if (user) {
            if (next){
                next()
                return
            }
            else
                return res.status(200).json({ msg: true })
        }
        else {
            return res.status(401).json({ msg: false })
        }
    } catch (err) {
        return res.json({ err: err.msg })
    }
}

export {
    validateUser
}