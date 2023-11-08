import f from './Friends.module.css'

const Friends = () => {
    return (<div className={f.friendsBar}>
        <div className={f.item}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlQaN497YN3R4XW8Jj7oTQUJGow5nwK5vnwQ&usqp=CAU" alt=""/>
            Alina
        </div>
        <div className={f.item}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbREStjJ_Aj1shNiX4g7ynoSbuwtR6RKLpmw&usqp=CAU" alt=""/>
            Yana
        </div>
        <div className={f.item}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5npGliZFQTrNHqaJ4i_xMmdDxJHlTXUq75w&usqp=CAU" alt=""/>
            Dasha
        </div>







    </div>);
}
export default Friends;