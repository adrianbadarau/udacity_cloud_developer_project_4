import 'source-map-support/register'

import { APIGatewayProxyEvent, APIGatewayProxyHandler, APIGatewayProxyResult } from 'aws-lambda'

import { CreateTodoRequest } from '../../requests/CreateTodoRequest'
import { TodoAccess } from '../../utils/TodoAccess'
import { getUserId } from '../utils'



export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const userId = getUserId(event);
  const todoAccess = new TodoAccess();

  const newTodo: CreateTodoRequest = JSON.parse(event.body);
  const todoId = await todoAccess.createTodo(userId, newTodo);

  return {
    statusCode: 201,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      item:
        {
          todoId: todoId,
          ...newTodo
        }
    })
  };
};
