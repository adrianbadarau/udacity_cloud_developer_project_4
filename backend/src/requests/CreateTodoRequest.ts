/**
 * Fields in a request to create a single item.
 */
export interface CreateTodoRequest {
  name: string
  dueDate: string
  done: boolean
  createdAt: string
  attachmentUrl: string
}
