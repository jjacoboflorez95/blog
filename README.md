# 🌎 My Latin Blog

## 📌 Project Overview

**My Latin Blog** is a simple yet interactive web-based blog that displays a selection of posts from an external API. Users can explore blog posts, view detailed content, and toggle comments for each post. The application fetches data dynamically, ensuring an engaging user experience.

## 🚀 Features

- 📝 **Display Blog Posts**: Shows a list of posts, including titles, content, and author names.
- 💬 **View Comments**: Toggle comments for each post by clicking a "View Comments" link.
- 🚀 **Comment Caching**: Caches comments for each post to improve performance and reduce API calls.
- 📱 **Responsive Design**: Adapts to different screen sizes for an optimal viewing experience.

## 📂 Project Structure

```
📁 my_latin_blog
 ├── 📄 index.html          # Main HTML file for the blog
 ├── 📄 blog.css            # Stylesheet for layout and design
 ├── 📄 blog.js             # JavaScript for fetching data and managing interactivity
```

## 🛠 Technologies Used

- **HTML5**: Structures the blog content and layout.
- **CSS3**: Provides styling for a warm and inviting design.
- **JavaScript (with jQuery)**: Manages API interactions, DOM manipulation, and caching.
- **External API**: Utilizes `jsonplaceholder.typicode.com` as a mock API to fetch post and comment data.

## 🏃‍♂️ How to Use the Application

1️⃣ **View Posts**: Open the blog, and the posts will display automatically.

2️⃣ **Toggle Comments**: Click the "View Comments" link below a post to expand and show comments. Click again to hide the comments.

3️⃣ **Explore**: Scroll through the blog to explore posts and their associated comments.

## 📝 Code Highlights

- **`getObject` Function** (`blog.js`): Fetches JSON data from the API.
- **`getComments` Function** (`blog.js`): Retrieves and caches comments for each post to enhance performance.
- **`displayPosts` Function** (`blog.js`): Dynamically generates the blog post layout, including interactive elements.
- **`displayComments` Function** (`blog.js`): Handles the dynamic rendering of comments under a selected post.

## 🌟 Future Improvements

- 📜 **Pagination**: Add pagination or infinite scroll for loading additional posts.
- 🖊 **User Comments**: Enable users to add their own comments.
- ⚠ **Error Handling**: Improve error feedback for users in case of API failures.
- 🎨 **UI Enhancements**: Add animations and transitions for better interactivity.

## 🎭 Screenshots  

| Blog |  
|--------------|  
| ![Blog](img/github/blog.png) |  

## 📜 License

This project was developed for educational purposes as part of a **college assignment**.

---

💼 **Author:** Juan Jacobo Florez Monroy | 🚀 **GitHub**: [GitHub](https://github.com/jjacoboflorez95)  

