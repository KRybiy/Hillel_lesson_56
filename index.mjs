import * as http from "node:http";
import {
  generateHtml,
  generateJson,
  generateText,
  generate404,
  postData,
  generateForm,
  generateTodos,
  generateAbout,
  generateContact
} from "./api.mjs";

const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") return generateHtml(req, res);
  
  if (req.method === "GET" && req.url === "/text") return generateText(req, res);
  
  if (req.method === "GET" && req.url === "/json") return generateJson(req, res);

  if (req.method === "GET" && req.url === "/about") return generateAbout(req, res);

  if (req.method === "GET" && req.url === "/contact") return generateContact(req, res);
  
  if (req.method === "GET" && req.url === "/todos") return generateTodos(req, res);
  if (req.method === "POST" && req.url === "/todos") return postData(req, res);

  if (req.method === "GET" && req.url === "/form") return generateForm(req, res);

  generate404(req, res);
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
