import { getUser } from "../DAL/prodactsDAL.js";

const validateUser = async (req, res, next) => {
    let user = null
    try {
        user = await getUser(req.body.username, req.body.password);
        console.log(user)
        if (user) {

            if (next){
                const data = await next()
                console.log(2)
                return res.status(200).json({ msg: data })
            }
            else
                console.log(1)
                return res.status(200).json({ msg: true })
        }
        else {
            console.log(3)
            return res.status(401).json({ msg: false })
        }
    } catch (err) {
        console.log(4)
        return res.json({ err: err.msg })
    }
}

export {
    validateUser
}