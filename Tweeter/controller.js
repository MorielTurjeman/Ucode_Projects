const controller = function () {


    const addNewPost = function () {

        const newPost = $('#input')
        tweeter.addPost(newPost.val())
        newPost.val("")

        renderer.renderPosts(tweeter.getPosts())




    }
    const deletePost = function () {

        const idToDelete = $(this).closest(".post").attr('id')

        tweeter.removePost(idToDelete)
        renderer.renderPosts(tweeter.getPosts())

    }



    const addCommentfunction = function () {
        const postId = $(this).closest(".post").attr('id')
        const newComment = $(this).closest(".post").find(".comment-input").val()

        tweeter.addComment(newComment, postId)
        renderer.renderPosts(tweeter.getPosts())



    }

    const deleteComment = function () {
        const idCommentToDelete = $(this).closest(".comments").attr('id')
        const idPost = $(this).closest(".post").attr('id')
        tweeter.removeComment(idPost, idCommentToDelete)
        renderer.renderPosts(tweeter.getPosts())


    }


    return {
        addNewPost: addNewPost,
        deletePost: deletePost,
        addCommentfunction: addCommentfunction,
        deleteComment: deleteComment
    }

}








const control = controller()



