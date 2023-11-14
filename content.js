const samplePosts = [
    { title: 'First Post', content: 'This is my first blog post!' },
    { title: 'Another Post', content: 'Blogging is fun and informative.' }
];

// Function to display blog posts
function displayPosts() {
    const blogPostsSection = $('#blog-posts');
    blogPostsSection.empty();

    samplePosts.forEach(post => {
        const postDiv = $('<div class="blog-post">');
        postDiv.append(`<h2>${post.title}</h2>`);
        postDiv.append(`<p>${post.content}</p>`);
        blogPostsSection.append(postDiv);
    });
}

// Function to submit a new blog post
function submitPost() {
    const title = $('#title').val();
    const content = $('#content').val();

    if (title && content) {
        const newPost = { title, content };
        samplePosts.push(newPost);
        displayPosts();
    }
}

// Initial display of posts
$(document).ready(() => {
    displayPosts();
});