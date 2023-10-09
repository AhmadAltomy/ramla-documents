# App Tasks

Tasks related to the app development.

Environment:
- Mobile App (React Native)
- React Native (Frontend)
- Golang (Backend)


## Change the screen after logout

When the user logs out, the app should go to the login screen. Currently, it goes to the register screen.

### Solution

Change the handler for navigation to the login screen in the user services to the login screen when the user is open the app for the first time and login and after the user logs out.


## Adding the upload audio feature to the post creation screen

The user should be able to upload audio to the post creation screen and the audio should be uploaded to the backend not just recording the audio.

### Solution

- Add the upload audio button to the post creation screen.
- Install the expo document picker package.
- On the upload audio button press, open the document picker.
- Get the audio file from the document picker.
- Check the recording audio feature and the upload audio feature how they are implemented and use the same approach to upload the audio file to the backend.
- Add the audio file to the post creation request.

