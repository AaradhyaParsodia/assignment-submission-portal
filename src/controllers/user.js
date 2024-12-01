import Assignments from "../models/assignments.js";
import Users from "../models/users.js";
import { assignmentSchema } from "../utils/zodSchema.js";

export const getAllAdmins = async (req, res) => {
    try {
        const admins = await Users.find({
            role: "admin",
            isDeleted: false
        }).select('_id username email role');

        if (!admins || admins.length === 0) {
            return res.status(404).json({ message: 'No admins found' });
        }

        res.status(200).json(admins);
    } catch (error) {
        console.error(`Error in get all admins controller: ${error}`);
        res.status(500).send({ message: 'Something went wrong. Try again or Internal Server Error' });
    }
}

export const uploadAssignment = async (req, res) => {
    
    const { task, adminId } = req.body;
    const { _id } = req;

    try {
        
        const { success, error } = assignmentSchema.safeParse(req.body);

        if (!success) {
            return res.status(400).json({
                message: "Invalid input",
                errors: error.issues
            });
        }

        const newAssignment = {
            userId: _id,
            adminId: adminId,
            task: task
        };

        const assignment = await Assignments.create(newAssignment);

        res.status(201).json({
            success: true,
            assignmentId: assignment._id,
            message: "assignment uploaded successfully"
        });
        
    } catch (error) {
        console.error(`error in user upload assignment controller ${error}`);
        res.status(500).send({ message: 'Something went wrong try again or Internal Server Error' });
    }
}