import * as uuid from 'uuid'

import { TodoItem } from '../models/TodoItem'
import { TodoAccess } from '../data-layer/TodoAccess'
import { CreateTodoRequest } from '../requests/CreateTodoRequest'

const todoAccess = new TodoAccess()

export async function getAllTodos(userId: string): Promise<TodoItem[]> {
  return todoAccess.getTodos(userId)
}

export async function createTodo(userId: string, newTodo: CreateTodoRequest): Promise<string> {
  const todoId = uuid.v4()

  const newTodoWithAdditionalInfo = {
    userId: userId,
    todoId: todoId,
    ...newTodo
  }
  return await todoAccess.createTodo(newTodoWithAdditionalInfo)
}
