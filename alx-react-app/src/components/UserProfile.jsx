function UserProfile({name, age, bio}){
    return (
        <div>
            <h2>Your name is {name}</h2>
            <p>You are {age} years old</p>
            <p>{bio}</p>
        </div>
    );
}