import { ApiReference } from '@scalar/nextjs-api-reference'

export const GET = ApiReference({
  content: {
    openapi: '3.1.0',
    info: {
      title: 'RentVerse API',
      description: 'API documentation for RentVerse authentication system',
      version: '1.0.0',
    },
    servers: [
      { url: 'http://localhost:3000', description: 'Development server' },
      { url: 'https://rentverse.com', description: 'Production server' },
    ],
    tags: [
      { name: 'Authentication', description: 'User authentication endpoints' },
    ],
    paths: {
      '/api/create-account': {
        post: {
          tags: ['Authentication'],
          summary: 'Create new user account',
          operationId: 'createAccount',
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  required: ['name', 'email', 'password'],
                  properties: {
                    name: { type: 'string', example: 'John Doe' },
                    email: { type: 'string', format: 'email', example: 'john.doe@example.com' },
                    password: { type: 'string', format: 'password', minLength: 6 },
                  },
                },
              },
            },
          },
          responses: {
            '200': { description: 'Account created successfully' },
            '400': { description: 'Email already exists' },
            '500': { description: 'Internal server error' },
          },
        },
      },
      '/api/login': {
        post: {
          tags: ['Authentication'],
          summary: 'User login',
          operationId: 'login',
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  required: ['email', 'password'],
                  properties: {
                    email: { type: 'string', format: 'email' },
                    password: { type: 'string', format: 'password' },
                  },
                },
              },
            },
          },
          responses: {
            '200': { description: 'Login successful' },
            '401': { description: 'Invalid credentials' },
          },
        },
      },
    },
  },
})
