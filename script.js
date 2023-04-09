// Создал div с id splash-screen. 1-е задание
function showSplashScreen() {

  const splashScreen = document.getElementById('splash-screen');

  const content = document.querySelectorAll('.content');
  content.forEach(element => {
    element.style.display = 'none';
  });
  splashScreen.style.display = 'block';
}


function hideSplashScreen() {
  const splashScreen = document.getElementById('splash-screen');
  const content = document.querySelectorAll('.content');
  content.forEach(element => {
    element.style.display = 'block';
  });
  splashScreen.style.display = 'none';
}



// 2 задание создание коммента
function createCommentElement(comment) {
  const commentElement = document.createElement('div');
  commentElement.classList.add('comment');

  commentElement.innerHTML = `
    <p>${comment.text}</p>
    <div class="comment-data">
      <span>Posted on ${new Date(comment.createdAt).toLocaleString()}</span>
      <span> by ${comment.user}</span>
    </div>
  `;

  return commentElement;
}

// класс для проверки
const comment = {
  text: 'Коммент для проверки',
  createdAt: Date.now(),
  user: 'sonGoku@mail.ru'
};



// 3-е задание создание поста на разметке
function createPostElement(post){
  const postElement = document.createElement('div');
  postElement.innerHTML = `
    <div>
      <img src="${post.imageUrl}" alt="Post image">
    </div>
    <p>${post.description}</p>
    <p>Posted by ${post.user} at ${new Date(post.createdAt).toLocaleString()}</p>
  `;

  post.comments.forEach(comment => {
    const commentElement = createCommentElement(comment);
    postElement.appendChild(commentElement);
  });

  return postElement;

};
// класс для проверки. 
const post = {
  imageUrl: 'https://www.meme-arsenal.com/memes/7e4cb151162ddcff27664c5a60a23198.jpg',
  description: 'You faggott LOL',
  createdAt: Date.now(),
  user: 'sonGoku@mail.ru',
  comments: [{
    text: 'This is a comment',
    createdAt: Date.now(),
    user: 'sonGoku@mail.ru'
  }]
};
// 4-задание добавление поста
function addPost(postElement) {
  const postContainer = document.getElementById('post-container');
  postContainer.appendChild(postElement);
};