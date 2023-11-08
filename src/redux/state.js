let state = {

    profilePage: {
        posts: [{id: 1, text: 'How are you?', likesCount: 240}, {id: 2, text: 'Im fine', likesCount: 125}]
    },

    dialogsPage: {
        dialogs: [{id: 1, name: 'Alina'}, {id: 2, name: 'Yana'}, {id: 3, name: 'Dasha'}],
        messages: [{id: 1, text: 'I Love Alina'}, {id: 2, text: 'Yana not love Vadim'}, {
            id: 3,
            text: 'Dasha love Fedora'
        }],
    }
}
export default state;