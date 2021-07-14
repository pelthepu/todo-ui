import axios from 'axios';
import Todo from '../types/Todo';

const baseURL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/todos`;

export default {
  async add(title: string) {
    return await axios.post<Todo>(baseURL as string, {
      title,
      completed: false
    });
  },
  async fetch() {
    return await axios.get<Todo[]>(baseURL as string);
  },
  async delete(todo: Todo) {
    await axios.delete(`${baseURL}/${todo.id}`);
  },
  async update(todo: Todo) {
    return await axios.put<Todo>(`${baseURL}/${todo.id}`, todo);
  }
};
