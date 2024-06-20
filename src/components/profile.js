import "../style/profile.css"
const Profile = () => {
    return ( 
        <div className="profile-container">
            <div className="profile-title">
                Welcome Sandeep Sreekumar
            </div>
            <div className="profile-section">
                <div className="bookAdd-section">
                    <input type="text" placeholder="Enter the name of the Book" />
                    <input type="number" placeholder="Enter the Price of the Book" />
                    <textarea name="" id="" placeholder="Contact details"/>
                    <input type="button" value="Submit" />
                </div>
                <div className="bookView-section">

                </div>
            </div>
        </div>
     );
}
 
export default Profile;