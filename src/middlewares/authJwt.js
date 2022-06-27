import jwt from "jsonwebtoken";
import config from "../config";
import User from "../models/User";
import Role from "../models/Role";

// METHOD: to protect endpoint with token.
export const verifyToken = async (req, res, next) => {
    try {
        const token = req.headers["x-access-token"];
        if(!token) return res.status(403).json({ message: "No token provided" });

        const decoded = jwt.verify(token, config.SECRET);
        req.userId = decoded.id;
        
        const user = await User.findById(req.userId, { password: 0 });
        if(!user) return res.status(404).json({ message: "User not found" });
    } catch (error) {
        res.status(403).json({ message: "Unauthorized" });
    }
}


// METHOD: to verify roles before any action in backend.
export const isAdmin = async (req, res, next) => {
    const user = await User.findById(req.userId);
    const roles = await Role.find({ _id: { $in: user.roles }});

    for (let i = 0; i < roles.length; i++) {
        if(roles[i].name === "admin") {
            next();
            return;
        }
    }

    return res.status(403).json({ message: "Admin role is required" });
}