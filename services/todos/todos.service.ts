export const getTodos = async (id: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/todos/${id}`,
  );
  const data = await response.json();
  return data;
};

export const addTodo = async (
  id: string,
  taskName: string,
  isCompleted: boolean = false,
) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/add-todo`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        taskName,
        isCompleted,
      }),
    },
  );
  const data = await response.json();
  return data;
};

export const updateTodo = async (
  userId: string,
  todoId: string,
  isCompleted: boolean,
) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/todos/${userId}/${todoId}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isCompleted,
      }),
    },
  );
  const data = await response.json();
  return data;
};
