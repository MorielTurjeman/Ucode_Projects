
const model = function () {
    const renderPosts = function (posts) {
        $("#posts").empty()
        for (let post of posts) {
            $("#posts").append($(`<div id='${post.id}'>`).text(`${post.text}`));
            for (let comment of post.comments) {
                $(`#${post.id}`).append($(`<div id='${comment.id}'>`).text(`${comment.text}`));

            }

        }


    }

    return {
        renderPosts: renderPosts
    }

}





const tweeter = logic()
const renderer = model()

renderer.renderPosts(tweeter.getPosts())


