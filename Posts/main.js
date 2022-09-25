import { posts } from "./posts.js";

const cards = document.querySelector('.cards')
const card = document.querySelector('.card')

posts.forEach(post => {
    let postBlog = document.createElement('div')
    postBlog.className = 'card'
    let postTitle = document.createElement('h3')
    postTitle.className = 'title'
    postBlog.appendChild(postTitle)
    let postBody = document.createElement('p')
    postBody.className = 'body'
    postBlog.appendChild(postBody)
    let postId = document.createElement('div')
    postId.className = 'id'
    postBlog.appendChild(postId)

    postBlog.children[0].textContent = post.title
    postBlog.children[1].textContent = post.body
    postBlog.children[2].textContent = post.id

    cards.insertBefore(postBlog, card)
})
