let filterEl = document.querySelector('#filter')

let postsContainerEl = document.querySelector('#posts-container')

let loaderEl = document.querySelector('.loader')

let limit = 5;
let page = 1;

async function getPosts() {
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`);

    let data = response.json()

    return data
}

async function showPosts() {
    let posts = await getPosts()

    posts.forEach(post => {
        let postEl = document.createElement('div')
        postEl.className = 'post'
        postEl.innerHTML = 
        `
            <div class="number">${post.id}</div>
            <div class="post-info">
                <h2 class="post-title">${post.title}</h2>
                <p class="post-body">${post.body}</p>
            </div>
        `
        postsContainerEl.appendChild(postEl)
    })
}

//When window loads 5 posts will appear
showPosts()



function showLoading() {
    loaderEl.classList.add('show');
  
    setTimeout(() => {
        loaderEl.classList.remove('show');
        setTimeout(() => {
            page++;
            showPosts();
        }, 300);
    }, 1000);

  }



window.addEventListener('scroll', () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  
    if (scrollTop + clientHeight >= scrollHeight - 5) {
      showLoading();
    }

    // // console.log(document.documentElement.scrollHeight)
    // // console.log(document.documentElement.scrollTop)
    // console.log(document.documentElement.clientHeight)
  });



filterEl.addEventListener('input', (e) => {
    let test = e.target.value.toLowerCase()
    console.log(test)

    let posts = document.querySelectorAll('.post')

    posts.forEach(post => {
        let title = post.querySelector('.post-title').innerText.toLowerCase()
        let body = post.querySelector('.post-body').innerText.toLowerCase()

        if (title.indexOf(test) !== -1 || body.indexOf(test) !== -1) {
            post.style.display = 'flex'
        } else {
            post.style.display = 'none'
        }
    })

})

