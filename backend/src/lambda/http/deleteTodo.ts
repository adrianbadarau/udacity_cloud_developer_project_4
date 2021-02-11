import 'source-map-support/register'

import { APIGatewayProxyEvent, APIGatewayProxyResult, APIGatewayProxyHandler } from 'aws-lambda'
import { TodoAccess } from '../../utils/TodoAccess'

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const todoId = event.pathParameters.todoId;
  const todoAccess = new TodoAccess();
  await todoAccess.deleteTodo(todoId);

  return {
    statusCode: 202,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({})
  }
}
