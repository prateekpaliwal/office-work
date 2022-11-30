import React, { useState } from 'react';

const friendsArray = [
    {
        id: 1,
        name: "handy",
        age: 19,
        hobbies: ["Cooking", "Reading"],
    },
    {
        id: 2,
        name: "Candy",
        age: 18,
        hobbies: ["Bathing", "Eating"],
    },
    {
        id: 3,
        name: "mandy",
        age: 20,
        hobbies: ["Making Videos", "Dancing", "Coding"],
    },
];

const TwoArray = () => {
    const [friends, setFriends] = useState(friendsArray);

    const handleThirdFriendHobby = () => {
        setFriends(
            friends.map((friend) =>
                friend.id === 3
                    ? {
                        ...friend,
                        hobbies: [...friend.hobbies, "random Hobby"]
                    }
                    : { ...friend }

            )
        )
    }



    return (
        <div>
            <ul>
                {friends.map((firend) => (
                    <li key={friends.id}>
                        <span>name: {firend.name}</span>
                        <span>name: {firend.age}</span>
                        <br />
                        <span>Hobbies</span>
                        <ul>
                            {firend.hobbies.map((hobby) => (
                                <li>{hobby}</li>
                            ))}
                        </ul>

                    </li>

                ))}

                <button onClick={handleThirdFriendHobby}>add hobby to mandy</button>


            </ul>
        </div>
    )
}

export default TwoArray