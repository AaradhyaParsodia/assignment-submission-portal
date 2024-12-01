import swaggerJSDoc from "swagger-jsdoc";

const port = process.env.PORT || 3000

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Assignment Submission Portal's API",
            version: "1.0.0",
            description: "API for managing resources of user and admin",
            contact: {
                name: "API Support",
                email: "support@example.com",
            },
        },
        servers: [
            {
                url: `http://localhost:${port}/api/v1`,
            },
        ],
        tags: [
            {
                name: "User",
                description: "User Managing the Assignment tasks"
            },
            {
                name: "Auth",
                description: "User Authentication and Management"
            },
            {
                name: "Admin",
                description: "Admin to keep track of assignments from users"
            }
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                }
            },
            schemas: {
                UserRegisterBody: {
                    type: 'object',
                    properties: {
                        name: { type: 'string', example: 'jane' },
                        username: { type: 'string', example: 'jane_pane_' },
                        email: { type: 'string', format: 'email', example: 'jane@pane.com' },
                        role: { type: 'string', example: 'admin'},
                        password: { type: 'string', example: 'asdfg1234'}
                    },
                    required: ['email', 'password', 'username', 'role']
                },
                SuccessRegisterUser: {
                    type: 'object',
                    properties: {
                        success: { type: 'string', example: 'true'},
                        message: { type: 'string', example: 'User registered successfully'},
                        userId: {type: 'string', example: '66e141cb6828d8e26178f5b6'},
                        role: { type: 'string', example: 'admin'},
                        token: { type: 'string', example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'}
                    }
                },
                LoginUser: {
                    type: 'object',
                    properties: {
                        email: { type: 'string', format: 'email', example: 'temp@temp.com' },
                        password: { type: 'string', example: 'asdfg1234'}
                    },
                    required: ['email', 'password']
                },
                LoginSuccessResponse: {
                    type: 'object',
                    properties: {
                        token: { type: 'string', example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'},
                        user: {
                            type: 'object',
                            properties: {
                                id: { type: 'string', example: '66e141cb6828d8e26178f5b6'},
                                username: { type: 'string', example: 'temp_temp'},
                                email: { type: 'string', format: 'email', example: 'temp@temp.com'},
                                role: { type: 'string', example: 'user'}
                            }
                        }
                    }
                },
                SuccessGetAdmin: {
                    type: 'object',
                    properties: {
                        admins: {
                            type: 'object',
                            properties: {
                                _id: { type: 'string', example: '66e141cb6828d8e26178f5b6' },
                                username: { type: 'string', example: 'jane_pane_' },
                                email: { type: 'string', format: 'email', example: 'jane@pane.com' },
                                role: { type: 'string', example: 'admin'}
                            }
                        }
                    }
                },
                UploadAssignmentRequest: {
                    type: 'object',
                    properties: {
                        task: { type: 'string', example: 'Hello World'},
                        adminId: { type: 'string', example: '66e141cb6828d8e26178f5b6'},
                    },
                    required: ['task', 'adminId']
                },
                GetAllAssignmentResponse: {
                    type: 'object',
                    properties: {
                        success: { type: 'string', example: 'true'},
                        assignments: {
                            type: 'object',
                            properties: {
                                _id: { type: 'string', example: '66e141cb6828d8e26178f5b6'},
                                adminId: { type: 'string', example: '8e26178f5b666e141cb68283'},
                                task: { type: 'string', example: '100 coding problems'},
                                isAccepted: { type: 'string', example: 'true'},
                                createdAt: { type: 'string', format: 'date-time', example: '2024-12-01T18:05:52.060Z'},
                                updatedAt: { type: 'string', format: 'date-time', example: '2024-12-01T18:05:52.060Z'},
                                userId: {
                                    type: 'object',
                                    properties: {
                                        email: {  type: 'string', format: 'email', example: 'temp@temp.com'},
                                        username: { type: 'string', example: 'temp_12'}
                                    }
                                }
                            }
                        }
                    }
                },
                Error: {
                    type: 'object',
                    properties: {
                        message: { type: 'string' },
                        details: { type: 'array', items: { type: 'string' } }
                    }
                },
            }
        }
    },
    apis: ["./src/utils/swaggerEndpoints/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;