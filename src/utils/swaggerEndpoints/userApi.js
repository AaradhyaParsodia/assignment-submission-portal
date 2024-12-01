/**
 * @swagger
 * /user/admin:
 *   get:
 *     summary: Get all admins present in the database
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *       
 *     responses:
 *       200:
 *         description: Successfully Got All the admin data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SuccessGetAdmin'
 *       404:
 *         desription: Data Not Found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                    type: string
 *                    example: 'No admins found'
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: 'Something went wrong. Try again or Internal Server Error'
 */


// ============================================================================================


// ============================================================================================
/**
 * @swagger
 * /upload:
 *   post:
 *     summary: upload a new assignment 
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UploadAssignmentRequest'
 *     responses:
 *       201:
 *         description: Assignment uploaded successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: string
 *                   description: Success status
 *                   example: true
 *                 assignmentId:
 *                   type: string
 *                   description: ID of the newly created post
 *                   example: 66e141cb6828d8e26178f5b6
 *                 message:
 *                   type: string
 *                   description: Success message
 *                   example: 'assignment uploaded successfully'
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Error message
 *                 errors:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       message:
 *                         type: string
 *                         description: Error details
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