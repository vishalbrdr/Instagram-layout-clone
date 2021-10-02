
const posts = document.querySelector(".posts")
const suggestions = document.querySelector(".suggestions")
let users = []

fetch("https://randomuser.me/api/?results=5").then(res => res.json()).then(data => {
    users = [...data.results]
    const suggestedprofile = (user, randomNo) => (`

    <div class="user-pic">
      <img src=https://randomuser.me/api/portraits/thumb/men/${Math.floor(Math.random() * 50)}.jpg alt="" />
    </div>
    <div class="user">
      <span class="user-name">${user && user.login.username}</span>
      <span class="light-text">Followed by aapvt + ${randomNo} others</span>
    </div>
    <span class="btn-blue">Follow</span>
    `)
    for (let i = 0; i < 5; i++) {
        const randomNo = Math.floor(20 + Math.random() * 50);
        const profile = document.createElement("div")
        profile.classList.add("suggested-profile")
        profile.innerHTML = suggestedprofile(users[i], randomNo)
        suggestions.appendChild(profile)
        console.log(users[i]);
    }

})


const postInnerText = `
              <div class="post-header">
                <div class="user-pic">
                  <img src="./images/vishal.jpg" alt="" />
                </div>
                <span class="user-name">vishal_brdr</span>
                <span class="menu-icon"
                  ><a href="#"><i class="fas fa-ellipsis-h"></i></a
                ></span>
              </div>
              <div class="post-feed">
                <img
                  src=""
                  alt=""
                />
              </div>
              <div class="post-footer">
                <div class="post-actions">
                  <i class="far fa-heart"></i>
                  <i class="far fa-comment"></i>
                  <i class="far fa-paper-plane"></i>
                  <i class="far fa-bookmark"></i>
                </div>
                <div class="liked-by">
                  <div class="user-pic"><i class="fas fa-user"></i></div>
                  <p>
                    Liked by <span class="user-name">vishal_brdr</span> and
                    <span class="user-name">198,696 others</span>
                  </p>
                </div>
                <div class="caption">
                  <span class="user-name">vishal_brdr</span> Caption...
                  <span class="light-text">more</span>
                </div>
                <div class="comments">
                  <p class="light-text">View all 30 comments</p>
                  <p class="comment">
                    <span class="user-name">visal_brdr</span>
                    <span class="comment-text">Noice</span>
                    <i class="far fa-heart"></i>
                  </p>
                  <div class="comment">
                    <span class="user-name">aapvt</span>
                    <span class="comment-text">Cool</span>
                    <i class="far fa-heart"></i>
                  </div>
                  <div class="light-text">1 day ago</div>
                  <div class="new-comment">
                    <i class="far fa-smile"></i>
                    <span class="light-text">Add a comment...</span>
                    <span class="btn-post">Post</span>
                  </div>
                </div>
              </div>
`


for (let i = 0; i <= 5; i++) {
    const post = document.createElement("div")
    post.classList.add("post")
    post.innerHTML = postInnerText
    posts.appendChild(post)
}
const postfeeds = document.querySelectorAll(".post-feed")
postfeeds.forEach(post => {
    const randomNo = Math.floor(5 + Math.random() * 5)*100;
    const img = post.querySelector("img")
    img.setAttribute("src", `https://source.unsplash.com/user/erondu/${randomNo}x${randomNo}`)
})