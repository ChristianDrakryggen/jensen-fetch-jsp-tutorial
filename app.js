let posts = [];

const post = {
  userId: 1,
  title: "Hejsan hoppsan",
  body: "Tjosan svejsan hejsan",
};

const requestHeaders = {
  "Content-type": "application/json",
};

//GET (all)
const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  posts = data;
  document.querySelector("#posts").innerHTML = posts
    .map(
      (
        post
      ) => `<div style="border-bottom: 1px solid grey; padding-bottom: 20px;">
        <p>${post.title}</p>
        <button onclick="updatePost(${post.id})">Update me</button>
        <button onclick="deletePost(${post.id})">Delete me</button>
    </div>`
    )
    .join("");
};

//GET (one)
const getOnePost = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/6");
  const data = await res.json();
  document.querySelector(
    "#one-post"
  ).innerHTML = `<h3>${data.title}</h3><p>${data.body}</p>`;
};

//POST
const postPost = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "post",
    body: JSON.stringify(post),
    headers: requestHeaders,
  });
  const data = await res.json();
  console.log(data);
};

//PUT
const updatePost = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "put",
    body: JSON.stringify({
      title: "Tjoflöjt",
    }),
    headers: requestHeaders,
  });
  const data = await res.json();
  console.log(data);
};

//DELETE
const deletePost = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "delete",
  });
  const data = await res.json();
  console.log(data);
};

window.addEventListener("load", () => {
  getPosts();
  getOnePost();
  document.querySelector("#post-stuff").addEventListener("click", postPost);
  document
    .querySelector("#update-stuff")
    .addEventListener("click", () => updatePost(3));
  document
    .querySelector("#delete-stuff")
    .addEventListener("click", () => deletePost(8));
});
