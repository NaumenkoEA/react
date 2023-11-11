let store = {
    _state: {

        profilePage: {
            posts: [{id: 1, text: 'How are you?', likesCount: 240}, {id: 2, text: 'Im fine', likesCount: 125}],
            newPostText: 'jlml'
        },

        dialogsPage: {
            dialogs: [{id: 1, name: 'Alina'}, {id: 2, name: 'Yana'}, {id: 3, name: 'Dasha'}],

            messages: [{id: 1, text: 'I Love Alina'}, {id: 2, text: 'Yana not love Vadim'}, {
                id: 3, text: 'Dasha love Fedora'
            }]
        }, sidebar: {}
    },
    getState() {
        return this._state
    },

    _callSubscriber() {
        console.log('state changed')
    },

    addPost() {
        let newPost = {
            id: 3, text: this._state.profilePage.newPostText, likesCount: 0
        };
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ' '
        this._callSubscriber(this._state)
    },

    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },

    subscribe(observer) {
        this._callSubscriber = observer
    }
}

export default store;