 Facebook-like application
 Below is an outline and first  how you can implement this.
 Download sourse code and install dependencies using (npm i) on both client and server folder

# Open server directory and create .env file
PORT=your_own_port_number
MONGO_LINK=your_own_mongodb_url
JWT_SECRET=your_own_secret


# Open  directory  client/src/components/timeline and edit timeline.jsx file

on line no 50 add cloudinary preset 
create account on cloudinary.com 
click on setting then go to upload thrn you can find Upload presets
 data.append("upload_preset", "add own preset");

and on line number 52 add own cloudinary your_cloud_name or username
 `https://api.cloudinary.com/v1_1/your_cloud_name/image/upload`,


Facebook-like application involves several key functionalities, including full authentication, forget password functionality, and features like posting, liking, and sharing.

Users  able to register for an account with unique credentials (email or username) and a password.
A secure authentication system using technologies like JSON Web Tokens (JWT) or OAuth for session management and user authentication.

Forget Password Functionality
Allow users to request a password reset if they forget their password.
a mechanism to send a password reset link to the user's registered email address.
a page  where users can input their email address to initiate the password password reset process.
Generate a unique token for the password reset link, which expires after a certain period for security reasons.
Upon receiving the reset request, verify the token and allow the user to set a new password

Posting Functionality:
Users  able to create posts, including text, images

Like and Share Functionality:
Usersable to react to posts by liking them.
A mechanism to track user likes for each post.
Allow users to share posts.

 
