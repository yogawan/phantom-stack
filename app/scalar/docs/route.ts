// @/docs/route.ts
import { ApiReference } from '@scalar/nextjs-api-reference'

export const GET = ApiReference({
  spec: {
    content: {
      openapi: '3.1.0',
      info: {
        title: 'RentVerse API',
        description: 'API documentation for RentVerse authentication system',
        version: '1.0.0',
      },
      servers: [
        {
          url: 'http://localhost:3000',
          description: 'Development server',
        },
        {
          url: 'https://rentverse.com',
          description: 'Production server',
        },
      ],
      tags: [
        {
          name: 'Authentication',
          description: 'User authentication endpoints',
        },
      ],
      paths: {
        '/api/create-account': {
          post: {
            tags: ['Authentication'],
            summary: 'Create new user account',
            description: 'Register a new user with name, email, and password',
            operationId: 'createAccount',
            requestBody: {
              required: true,
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    required: ['name', 'email', 'password'],
                    properties: {
                      name: {
                        type: 'string',
                        description: "User's full name",
                        example: 'John Doe',
                      },
                      email: {
                        type: 'string',
                        format: 'email',
                        description: "User's email address",
                        example: 'john.doe@example.com',
                      },
                      password: {
                        type: 'string',
                        format: 'password',
                        description: "User's password",
                        minLength: 6,
                        example: 'securePassword123',
                      },
                    },
                  },
                },
              },
            },
            responses: {
              '200': {
                description: 'Account created successfully',
                content: {
                  'application/json': {
                    schema: {
                      type: 'object',
                      properties: {
                        success: {
                          type: 'boolean',
                          example: true,
                        },
                        user: {
                          type: 'object',
                          properties: {
                            id: {
                              type: 'string',
                              description: "User's unique identifier",
                              example: '507f1f77bcf86cd799439011',
                            },
                            name: {
                              type: 'string',
                              example: 'John Doe',
                            },
                            email: {
                              type: 'string',
                              example: 'john.doe@example.com',
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
              '400': {
                description: 'Bad request - Email already exists',
                content: {
                  'application/json': {
                    schema: {
                      type: 'object',
                      properties: {
                        message: {
                          type: 'string',
                          example: 'Email already used',
                        },
                      },
                    },
                  },
                },
              },
              '500': {
                description: 'Internal server error',
              },
            },
          },
        },
        '/api/login': {
          post: {
            tags: ['Authentication'],
            summary: 'User login',
            description: 'Authenticate user with email and password',
            operationId: 'login',
            requestBody: {
              required: true,
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    required: ['email', 'password'],
                    properties: {
                      email: {
                        type: 'string',
                        format: 'email',
                        description: "User's email address",
                        example: 'john.doe@example.com',
                      },
                      password: {
                        type: 'string',
                        format: 'password',
                        description: "User's password",
                        example: 'securePassword123',
                      },
                    },
                  },
                },
              },
            },
            responses: {
              '200': {
                description: 'Login successful',
                content: {
                  'application/json': {
                    schema: {
                      type: 'object',
                      properties: {
                        message: {
                          type: 'string',
                          example: 'Login successful',
                        },
                        user: {
                          type: 'object',
                          properties: {
                            email: {
                              type: 'string',
                              example: 'john.doe@example.com',
                            },
                            name: {
                              type: 'string',
                              example: 'John Doe',
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
              '400': {
                description: 'Bad request - Missing required fields',
                content: {
                  'application/json': {
                    schema: {
                      type: 'object',
                      properties: {
                        error: {
                          type: 'string',
                          example: 'Email and password are required',
                        },
                      },
                    },
                  },
                },
              },
              '401': {
                description: 'Unauthorized - Invalid credentials',
                content: {
                  'application/json': {
                    schema: {
                      type: 'object',
                      properties: {
                        error: {
                          type: 'string',
                          example: 'Invalid email or password',
                        },
                      },
                    },
                  },
                },
              },
              '500': {
                description: 'Internal server error',
              },
            },
          },
        },
      },
    },
  },
})
