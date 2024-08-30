import fs from "node:fs/promises";

const createHtmlTemplate = (htmlInjection) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>HTTP Server</title>
  </head>
  <body>
    ${htmlInjection}
  </body>
</html>
`;

const rootHtmlTemplate = createHtmlTemplate(
  '<h1 style="color: blue;">Hello from HTTP server</h1><p>Click <a href="/todos">here</a> to see todos</p><p>Click <a href="/form">here</a> to see form</p><p>Click <a href="/about">here</a> to see about</p><p>Click <a href="/contact">here</a> to see contact</p>'
);
const notFoundTemplate = createHtmlTemplate(
  '<h1 style="color: red;">404 - Not Found</h1>'
);

const aboutHtmlTemplate = createHtmlTemplate(
  '<h1 style="color: blue;">About</h1><p>This is the about page</p><p>Click <a href="/">here</a> to go to the home page</p>'
);

const contactHtmlTemplate = createHtmlTemplate(
  '<h1 style="color: blue;">Contact</h1><p>This is the contact page</p><p>Click <a href="/">here</a> to go to the home page</p>'
);

let formTemplate;

const loadFormTemplate = async () => {
  try {
    formTemplate = await fs.readFile("./template/form.html", "utf8");
  } catch (error) {
    "Error loading form template", error;
  }
};

loadFormTemplate().catch(console.log);

const generateTodosTemplate = () => {
  const headerHtml = '<h1 style="color: blue;">Todos List</h1>'
  const todosHtml = todos.map(todo => {
    return `
    <div style="border: 1px solid black; padding: 10px; margin-bottom: 10px;">
      <h3>${todo.title}</h3>
      <p>ID: ${todo.id}</p>
      <p>User ID: ${todo.userId}</p>
      <p>Completed: ${todo.completed ? "Yes" : "No"}</p>
    </div>
    `}).join('')

    const buttonHtml = `
    <button onclick="location.href='/form'" type="button">Submit</button>
    `
    return createHtmlTemplate(headerHtml + todosHtml + buttonHtml)
  }


const todos = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
  },
  {
    userId: 1,
    id: 4,
    title: "et porro tempora",
    completed: true,
  },
  {
    userId: 1,
    id: 5,
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    completed: false,
  }
];

export { rootHtmlTemplate, todos, notFoundTemplate, formTemplate, generateTodosTemplate, aboutHtmlTemplate, contactHtmlTemplate };
