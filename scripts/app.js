let BTNEL = document.querySelectorAll('.FAQ-button');
let answer = document.querySelectorAll('.FAQ-content');

BTNEL.forEach((BTN, index) => {
  BTN.addEventListener('click', () => {
    answer[index].classList.toggle('answer');
  });
});

const boxCommentEL = document.querySelector(".box-comment")

const getDataComment = async () => {
    try {
        const response = await fetch("https://dummyjson.com/comments");
        const comments = await response.json();
        return comments; 
    } catch (error) {
        console.error('Error fetching comments:', error);
    }
}

getDataComment().then((comments) => {
    let commentHTML = '';
    comments.comments.slice(0, 4).forEach((item) => {
        commentHTML += 
        `
            <div class="info-comment">
                <div class="comment">
                    <p>${item.body}</p> 
                </div>
                <div class="info">
                    <span>${item.user.username}</span>
                    <p>${item.user.fullName}</p> 
                </div>
            </div>
        `;

        boxCommentEL.innerHTML += commentHTML
    });

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:50,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })
});
