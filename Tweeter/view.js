
const view = function () {
    $("#post").on("click", control.addNewPost)

    const renderPosts = function (posts) {
        $("#posts").empty()

        for (let post of posts) {
            $("#posts").append($(`<div id='${post.id}' class="post">`));
            $("#" + `${post.id}`).append($(`<div class="delete">`));
            $("#" + `${post.id}`).append(`<span class="post-text">${post.text}</span>`);

            for (let comment of post.comments) {
                $("#" + `${post.id}`).append($(`<div id ='${comment.id}' class="comments">`));
                $("#" + `${comment.id}`).append($(`<div class="delete-comment">`).text('X'));
                $("#" + `${comment.id}`).append(`<span class="comment-text">${comment.text}</span>`);

            }


        }
        $(".post").append($(`<input type="text" placeholder="Write a comment" class="comment-input">`))

        $(".post").append($(`<span class="addComment-btn"></span>`).text('Send'))

        $(".addComment-btn").on("click", control.addCommentfunction)








        $(".delete").on("click", control.deletePost)
        $(".delete-comment").on("click", control.deleteComment)

        // const idToDelete = $(this).closest(".post").attr('id')
        // control.deletePost(idToDelete)













    }
    return {
        renderPosts: renderPosts
    }

}

const tweeter = logic()
const renderer = view()

renderer.renderPosts(tweeter.getPosts())


