"use strict";

const domain = "https://jsonplaceholder.typicode.com";
const commentsCache = new Map();

const getObject = async (url) => {
	const response = await fetch(url);
	const obj = response.json();
	return obj;
};

const getComments = async (postId) => {
	console.log("commentsCache: ", commentsCache);
	if (commentsCache.has(postId)) {
		return commentsCache.get(postId);
	} else {
		const url = `${domain}/posts/${postId}/comments`;
		const comments = await getObject(url);
		commentsCache.set(postId, comments);
		return comments;
	}
};

const displayComments = (comments, div) => {
	let html = "<ul>";
	for (const comment of comments) {
		html += `<li>${comment.body}</li>`;
	}
	html += "</ul>";
	$(div).append(html);
};

const displayPosts = (posts, users) => {
	let html = "";
	for (const i in posts) {
		// users array was returned by Promises.allSettled()
		const username =
			users[i].status == "fulfilled" ? users[i].value.username : "?";

		// build HTML
		html += `<h2>${posts[i].title}</h2>`;
		html += `<p>${posts[i].body}</p>`;

		html += "<div class='comments'>";
		html += `<label>Posted by ${username}</label>`;
		html += `<a href='#' data-postid='${posts[i].id}'>
            View comments</a>`;
		html += "</div>";
	}
	$("#posts").html(html);

	// add click event handler to newly created "View comments" links
	$("a").click(async (evt) => {
		evt.preventDefault();
		const div = evt.currentTarget.parentNode;
		const ul = div.querySelector("ul");
		if (ul) {
			// comments need to be removed
			div.removeChild(ul);
		} else {
			// comments need to be retrieved and displayed
			const id = evt.currentTarget.getAttribute("data-postid");
			const comments = await getComments(id);
			displayComments(comments, div);
		}
	});
};

$(document).ready(async () => {
	try {
		// Get the blog posts with id 2, 12, 22, 32 and 42
		/*const fetchComments = [
			fetch(`${domain}/posts/2`).then((response) => response.json()),
			fetch(`${domain}/posts/12`).then((response) => response.json()),
			fetch(`${domain}/posts/22`).then((response) => response.json()),
			fetch(`${domain}/posts/32`).then((response) => response.json()),
			fetch(`${domain}/posts/42`).then((response) => response.json()),
		];*/
		const fetchComments = [
			getObject(`${domain}/posts/2`),
			getObject(`${domain}/posts/12`),
			getObject(`${domain}/posts/22`),
			getObject(`${domain}/posts/32`),
			getObject(`${domain}/posts/42`),
		];		
		const posts = await Promise.all(fetchComments)
			.then((posts) => {				
				return posts;
			})
			.catch((error) => console.log(error));
		// get first 5 blog posts	
		posts.splice(5);

		// get user for each post
		const userPromises = posts.map((post) =>
			getObject(`${domain}/users/${post.userId}`)
		);
		const users = await Promise.allSettled(userPromises);

		displayPosts(posts, users);
	} catch (e) {
		alert(e.message);
	}
});
