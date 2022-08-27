const logic = function () {
    let nextIdPost = 2
    let nextIdComment = 6

    const _postsData =
        [
            {
                text: "First post!",
                id: "p1",
                comments: [
                    { id: "c1", text: "First comment on first post!" },
                    { id: "c2", text: "Second comment on first post!!" },
                    { id: "c3", text: "Third comment on first post!!!" }
                ]
            },
            {
                text: "Aw man, I wanted to be first",
                id: "p2",
                comments: [
                    { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                    { id: "c5", text: "Yeah, believe in yourself!" },
                    { id: "c6", text: "Haha second place what a joke." }
                ]
            }
        ]

    const _idPosts = function () {
        nextIdPost += 1
        return `p${nextIdPost}`;

    }


    const _idComments = function () {
        nextIdComment += 1
        return `c${nextIdComment}`;
    }



    const getPosts = function () {
        return _postsData;
    }


    const addPost = function (text) {
        const newPost = {
            text: text,
            id: _idPosts(),
            comments: []

        }
        _postsData.push(newPost)


    }

    const removePost = function (id) {
        const idPost = _postsData.findIndex(item => item.id == id)
        if (idPost != -1) {
            _postsData.splice(idPost, 1)
        }


    }

    const addComment = function (text, id) {
        const post = _postsData.find(item => item.id == id)

        if (!post) {
            console.log("ID does not exiest")
            return
        }
        const newComment = {
            id: _idComments(),
            text: text

        }
        post.comments.push(newComment)


    }

    const removeComment = function (pId, cId) {
        const post = _postsData.find(item => item.id == pId)

        if (!post) {
            console.log("ID post does not exiest")
            return
        }



        const idxComment = post.comments.findIndex(item => item.id == cId)
        if (idxComment != -1) {
            post.comments.splice(idxComment, 1)

        }


    }


    return {
        getPosts: getPosts,
        addPost: addPost,
        removePost: removePost,
        addComment: addComment,
        removeComment: removeComment

    }


}

// const model = logic()

// const c=logic()
// c.addPost("hi!")
// console.log(c.getPosts())
// c.addComment("p3", "no!!!")
// c.removePost("p3")
// c.removeComment("p2", "c4")
// c.removePost("p1")
// console.log(c.getPosts())

