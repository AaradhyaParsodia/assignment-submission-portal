/**
 * @swagger
 * /admin/assignments:
 *   get:
 *     summary: Get all assignments for a specific admin
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of assignments for the admin who requested them.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/GetAllAssignmentResponse'
 *       403:
 *         description: Forbidden
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Error message
 *                   example: 'Unauthorised to perform this task'
 *       404:
 *         description: Not Found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Error message
 *                   example: 'Assignments not found or no assignments exists as of now'
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Error message
 *                   example: 'Something went wrong try again or Internal Server Error'
 */

// ============================================================================================

// ============================================================================================

/**
 * @swagger
 * /admin/assignments/{id}/accept:
 *   post:
 *     summary: Admin can accept a assignment
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the assignment to be accepted
 *     responses:
 *       200:
 *         description: Assignment accepted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Success status
 *                   example: 'true'
 *                 message:
 *                   type: string
 *                   default: Assignment accepted successfully
 *                   description: Success message
 *                   example: 'Assignment accepted successfully'
 *       400:
 *         description: Invalid input
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   default: Error Invalid input
 *                   description: Invalid assignment ID
 *                   example: 'Invalid assignment ID'
 *       403:
 *         description: Forbidden
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   default: false
 *                   description: Success status
 *                   example: 'false'
 *                 message:
 *                   type: string
 *                   default: Error
 *                   description: Error message
 *                   example: 'Unauthorised to perform this task'
 *       404:
 *         description: Not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   default: Error Not Found
 *                   description: Error message
 *                   example: 'Assignment not found'
 *       409:
 *         description: Error while updating the assignment entry
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   deafult: Error
 *                   description: Error message
 *                   example: 'Failed to update assignment status'
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   default: Error
 *                   description: Error message
 *                   example: 'Something went wrong. Try again or Internal Server Error'
 */

// ============================================================================================

// ============================================================================================

/**
 * @swagger
 * /admin/assignments/{id}/reject:
 *   post:
 *     summary: Admin can reject a assignment
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the assignment to be accepted
 *     responses:
 *       200:
 *         description: Assignment rejected successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Success status
 *                   example: 'true'
 *                 message:
 *                   type: string
 *                   default: Assignment rejected successfully
 *                   description: Success message
 *                   example: 'Assignment rejected successfully'
 *       400:
 *         description: Invalid input
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   default: Error Invalid input
 *                   description: Invalid assignment ID
 *                   example: 'Invalid assignment ID'                   
 *       403:
 *         description: Forbidden
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   default: false
 *                   description: Success status
 *                   example: 'false'
 *                 message:
 *                   type: string
 *                   default: Error
 *                   description: Error message
 *                   example: 'Unauthorised to perform this task'
 *       404:
 *         description: Not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   default: Error Not Found
 *                   description: Error message
 *                   example: 'Assignment not found'
 *       409:
 *         description: Error while updating the assignment entry
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   deafult: Error
 *                   description: Error message
 *                   example: 'Failed to update assignment status'
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   default: Error
 *                   description: Error message
 *                   example: 'Something went wrong. Try again or Internal Server Error'
 */
