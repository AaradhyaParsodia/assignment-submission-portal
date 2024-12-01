import Assignments from "../models/assignments.js";
import Users from "../models/users.js";

export const getAssignmnets = async (req, res) => {
    const { _id } = req;
    try {

        const user = await Users.findOne({
            _id: _id,
            isDeleted: false,
        });

        if( !user || user.role !== "admin" ){
            return res.status(403).json({
                success: false,
                message: "Unauthorised to perform this task"
            });
        }

        const assignments = await Assignments.find({
            adminId: _id,
            isDeleted: false
        }).populate('userId', 'email username');

        if (!assignments || assignments.length === 0) {
            return res.status(404).json({ 
                message: 'Assignments not found or no assignments exists as of now' 
            });
        }

        const modifiedAssignmentsDocs = assignments.map(assignment => ({
            _id: assignment._id,
            adminId: assignment.adminId,
            task: assignment.task,
            isAccepted: assignment.isAccepted,
            createdAt: assignment.createdAt,
            updatedAt: assignment.updatedAt,
            userId: {
                email: assignment.userId.email,
                username: assignment.userId.username
            }
        }));

        res.status(200).json({
            success: true,
            assignments: modifiedAssignmentsDocs
        });

    } catch (error) {
        console.error(`error in get all assignment (admin) controller ${error}`);
        res.status(500).send({ message: 'Something went wrong try again or Internal Server Error' });
    }
}

export const acceptAssignment = async (req, res) => {
    
    const userId = req._id;
    const assignmentId = req.params.id;

    try {
        
        const user = await Users.findOne({
            _id: userId,
            isDeleted: false,
        });
        
        if( !user || user.role !== "admin"){
            return res.status(403).json({
                success: false,
                message: "Unauthorised to perform this task"
            });
        }

        const assignment = await Assignments.findOne({
            _id: assignmentId,
            adminId: userId,
            isDeleted: false
        });

        
        if (!assignment) {
            return res.status(404).json({ 
                message: 'Assignment not found' 
            });
        }


        const updatedAssignment = await Assignments.updateByOne({
            _id: assignmentId
        }, {
            $set: {isAccepted: true}
        });

        if (updatedAssignment.modifiedCount === 0) {
            return res.status(409).json({ 
                message: 'Failed to update assignment status' 
            });
        }

        res.status(200).json({
            success: true,
            message: 'Assignment accepted successfully'
        });

    } catch (error) {
        console.error(`Error in accept assignment controller ${error}`);
        res.status(500).send({ message: 'Something went wrong. Try again or Internal Server Error' });
    }

}

export const rejectAssignment = async (req, res) => {
    const userId = req._id;
    const assignmentId = req.params.id;

    try {
        
        const user = await Users.findOne({
            _id: userId,
            isDeleted: false,
        });
        
        if( !user || user.role !== "admin"){
            return res.status(403).json({
                success: false,
                message: "Unauthorised to perform this task"
            });
        }

        const assignment = await Assignments.findOne({
            _id: assignmentId,
            adminId: userId,
            isDeleted: false
        });

        
        if (!assignment) {
            return res.status(404).json({ 
                message: 'Assignment not found' 
            });
        }


        const updatedAssignment = await Assignments.updateByOne({
            _id: assignmentId
        }, {
            $set: {isAccepted: false}
        });

        if (updatedAssignment.modifiedCount === 0) {
            return res.status(409).json({ 
                message: 'Failed to update assignment status' 
            });
        }

        res.status(200).json({
            success: true,
            message: 'Assignment rejected successfully'
        });

    } catch (error) {
        console.error(`Error in reject assignment controller ${error}`);
        res.status(500).send({ message: 'Something went wrong. Try again or Internal Server Error' });
    }
}