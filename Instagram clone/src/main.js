import "./style.css";
import { posts } from "/src/posts.js";

const mainContainer = document.getElementById("main");

/**
 * @param {import('./posts.js').Post[]} posts
 */
const renderPosts = (posts) => {
  let htmlText = "";
  for (const post of posts) {
    htmlText += `
      <div class="post">
          <div class="post-header">
            <img class="avatar" src="${post.avatar}" />
            <div class="user-info">
              <p class="name">${post.name}</p>
              <p class="location">${post.location}</p>
            </div>
          </div>
          <div class="post-content">
            <img src="${post.post}" class="post-img" />
          </div>
          <div class="post-interaction">
            <div>
              <img
                src="icon-heart.png"
                class="heart-icon interaction-icon w-6"
              />
              <img src="icon-comment.png" class="interaction-icon w-5" />
              <img src="icon-dm.png" class="interaction-icon w-6" />
            </div>
            <p class="font-bold">${post.likes} likes</p>
            <p class="comment">
              <span class="username">${post.username}</span> ${post.comment}
            </p>
          </div>
        </div>
    `;
  }
  mainContainer.innerHTML = htmlText;
};

renderPosts(posts);

mainContainer.addEventListener("click", (event) => {
  const heartIcon = event.target.closest(".heart-icon");

  if (heartIcon) {
    heartIcon.src = heartIcon.src.includes("icon-heart-red.png")
      ? "icon-heart.png"
      : "icon-heart-red.png";
  }
});

mainContainer.addEventListener("dblclick", (event) => {
  const postContent = event.target.closest(".post-content");

  if (postContent) {
    const post = postContent.closest(".post");
    const heartIcon = post.querySelector(".heart-icon");
    heartIcon.src = heartIcon.src.includes("icon-heart-red.png")
      ? "icon-heart.png"
      : "icon-heart-red.png";
  }
});
