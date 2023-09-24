# Quick Todo

Quick Todo Tasks for the app.

## Home Screen, Sections and Posts

### Recommended for you (Section)

**Issue:**

- The recommended for you section is include my own posts.

**Steps to fix the issue:**

- [x] Add `WithoutMyPosts` Scope to model `Post`, and `PostQuery` in the `GetPosts` API (Backend) -> Waiting for
  `WithoutMyPosts` Scope from `Marah Musleh`.
- [x] `WithoutMyPosts` Scope should get the user id from the context and exclude user posts (Backend). -> Waiting for
  `WithoutMyPosts` Scope from `Marah Musleh`.
- [x] The `WithoutMyPosts` Scope should be added to the `GetPosts` query in the `RecommendedForYou` section (App).
- [x] Test the recommended for you section, and make sure that it's not include my own posts.

### Share Post (ActionSheet) -> Assigned to `Marah Alrefai`

**Issue:**

- The share-post action in `ActionSheet` When click three dots icon in the post-card component is not working.
- The share button should share the post-link.
- On click the link, the app should open the post-screen.

**Steps to fix the issue:**

- [x] Fix the sharing method in the `useSharePost` hook.
- [x] Fix the `DeepLink` handler in the `MainStack` screen.
- [x] In backend fix the API for `ArticlePage` to get the post by `slug` and open the app with the post-screen.
- [x] Check all share buttons are clickable and working correctly.

### Edit Post

**Issue:**

- On edit post, not get the Post body, video and audio correctly.
- The post-details must get fully from GetPost API.
- If the post is a video, the video must be shown in the video player.
- If the post is an audio, the audio must be shown in the audio player.
- The user should have the ability to edit the post-body, video, and audio.

**Steps to fix the issue:**

- [x] Fix the `GetPost` API to get the full post details.
- [x] On edit Post, Get the post-details from the `GetPost` API.
- [x] Display the post-details in the post-editor.
- [x] Make a new way to handle video, audio in `EditPost` if post includes video or audio.
- [x] Test the edit post, and make sure that it's working correctly.

### Report post -> Waiting for `Marah Musleh`

**Issue:**

- The First page should have: "Why are you reporting this post? Help us understand the problem."
- Remove the post immediately from reporter feed, search results, and recommendations.
- Email the reporter with the report details.
- Email the customer support team with the report details.
- Post has been reported must be flagged as reported in Admin Panel.
- Fixing the Reporting reason options in Post Report View.
- Fix comment on post-report view, to avoid keyboard when open the view.

**Steps to fix the issue:**

- [x] Fix the `EmailService` to be more flexible, easy to use, less code, and more readable.
- [x] Fix the `ReportPost` First page to look like the requirements.
- [x] Remove the post from the reporter feed immediately.
- [ ] In query `Posts` in the `GetPosts` API, add `WithoutReportedPosts` Scope to exclude reported posts.
- [ ] In Admin Panel `PostScreen` add `Reported` badge to the post has been reported. (Include a specific query to check
  the post has been reported).
- [x] Fix the `ReportPost` Options page to look like the requirements.
- [x] Add the `BottomSheetTextInput` component to the `ReportPost` Options BottomSheet.
- [ ] Test the report post, and make sure that it's working correctly.

### User Report -> Waiting for `Marah Musleh`

**Issue:**

- Same as the post-report.

**Steps to fix the issue:**

- [x] Same as the post-report.

### Post Screen (Audio)

**Issue:**

- The audio player must show the cover image of the post as a background.
- It's open the normal article if open from a Hero section.

**Steps to fix the issue:**

- [x] Add the functionality to show the cover image of the post as a background in the audio player.
- [x] Add the functionality to open the audio player if open from Hero section.
- [x] Test the audio player, and make sure that it's working correctly.

### Post Screen (Video)

**Issue:**

- The video player must be autoplay when open the video post-screen.
- Fix the video player controller to be shown/hidden when click on the video player.
- It's open the normal article if open from a Hero section.
- The video uploaded to the server must be compressed.
- Landscape mode must be enabled in the video player.

**Steps to fix the issue:**

- [x] Add the functionality to autoplay the video when open the video post-screen.
- [x] Fix the video player controller to be shown/hidden when click on the video player.
- [x] Add the functionality to open the video player if open from Hero section.
- [ ] Enable the landscape mode in the video player.
- [ ] Add the ability to compress the video before upload it to the server.
- [x] Change the video player `Profile` to handle '360p, 480p, 720p, 1080p' resolutions.
- [ ] Test the video player, and make sure that it's working correctly.

### Post Screen (Articles)

**Issue:**

- Empty space in the post-screen, if no image in the post.

**Steps to fix the issue:**

- [x] Fix the post-screen to be look good if no image in the post.
- [x] Test the post-screen, and make sure that it's working correctly.

### Post-Card Component

**Issue:**

- It's not handle any place press action.

**Steps to fix the issue:**

- [x] Handle press action in the post-card component.
- [x] Test the post-card component, and make sure that it's working correctly.

## Chat System

### Chat core system

**Issue:**

- The chat history must save in `MongoDB` database not `PostgreSQL` database.
- The chat system must have the ability to save unstructured data.
- Not able to get the chat history correctly with `Limit` and `LoadMore` functionality.
- Not correct `Online` status in the chat screen.
- Unable to receive notifications when the user is offline.
- No Entry point for the chat system.
- User can send a message to himself.
- Block specific user from sending messages to me.

**Steps to fix the issue:**

- [x] Recreate the `Chat Model` in `MongoDB` database.
- [x] Create the `APIs` correctly to handle the chat system.
- [x] Test the message structure, (Save, Get, Delete, etc...).
- [ ] Implement the `Online` status in the chat screen.
    - The user should be subscribed to his channel when open the `App`.
    - The user should be unsubscribed from his channel when close the `App`.
    - Must handle (Close, Minimize, etc...) the `App` to unsubscribe the user from his channel.
    - Add the `Online` status to the `User` model. (Or try to find a better way).
    - Add the `Online, LastSeen` status to the `Chat` model.
- [x] Notification cases
    - [x] Offline: Receive notification
    - [x] Online: Don't receive notification
    - [x] Online And Open Chat Screen: Don't receive notification
    - [x] Online And Open Chat Screen And Chat With The User: Don't receive notification
    - [x] Online And Not Open Chat Screen: In-App Notification
- [x] Fix the `ChatStructure` to get `UserChat` List.
- [x] Add entry point for the chat system.
- [x] The user should not be able to send a message to himself.
- [x] Add the functionality to block specific user from sending messages to me.
- [x] Test the chat system, and make sure that it's working correctly.

## My Profile Screen

### Trailer Summary

**Issue:**

- The trailer summary is not showing the video summary.
- The trailer summary is not validate the video url when add a url not uploading a video.
- On add a video url, the video url must be valid `YouTube` url.
- The trailer summary must open `Youtube Player Component` when click on the trailer summary (If it a youtube url).
- The trailer summary must open `Video Player Component` when click on the trailer summary (If it is a local video).
- Delete the trailer summary, Not delete the video from the server.

**Steps to fix the issue:**

- [x] Check the video player component, and make sure that it's working correctly.
- [x] Add `YoutubePlayer` component to the trailer summary.
- [x] Validate the video url is a valid `YouTube` url with regex. (See the help section).
- [x] Check if the video url is a valid `YouTube` url, open the `YoutubePlayer` component.
- [x] Check if the video url is a valid local video url, open the `VideoPlayer` component.
- [x] Fix the delete trailer summary, and check if trailer summary is not shown if the video is deleted.
- [x] Test the trailer summary, and make sure that it's working correctly.

**Help:**

```ts
const youtubeUrlRegex = /^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/;
```

### Follower, Following screen

**Issue:**

- Must add padding to the `Follower, Following` screen.
- Not clearing search history when switch between `Follower, Following` tabs.
- Design errors.

**Steps to fix the issue:**

- [x] Add padding to the `Follower, Following` screen.
- [x] Clear search history when switch between `Follower, Following` tabs.
- [x] Fix the design errors.
- [x] Test the `Follower, Following` screen, and make sure that it's working correctly.

### Counters in the profile screen

**Issue:**

- Fix the post count in the profile screen, to get the published post only.

**Steps to fix the issue:**

- [x] Fix the post count in the profile screen, to get the published post only.
- [x] Test the posts count in the profile screen, and make sure that it's working correctly.

### My Profile Screen

**Issue:**

- Not scrollable, and not able to see the full profile.
- Posts and programs are not shown correctly.
- Must be animated when scroll the profile screen.
- If the user not has profile image, It should open the `ChangeAvatar` ActionSheet.
- The Media viewer is not open the media correctly.
- Tabs are not working correctly.
- Redesign the structure of the profile screen. (@name, bio, buttons, etc...).

**Steps to fix the issue:**

- [ ] Fix the profile screen to be scrollable.
- [ ] New Tabs system, Create a new tabs system that is:
    - Animated swipe able tabs.
    - Material design tabs guidelines.
    - Tabs should be scrollable with the parent screen.
    - The not selected tab should be lazy loaded.
    - The selected tab should be loaded immediately.
    - Reusable tabs system.
- [ ] Fix the profile screen structure.
- [ ] Fix view media in the profile screen.
- [ ] Add the animation to the profile screen (Header, Scroll, etc...).
- [ ] Fix the profile screen design.
- [ ] Test the profile screen, and make sure that it's working correctly.

### Partner Star Icon -> Assigned to `Marah Alrefai`

**Issue:**

- In case the user is a partner, the star icon should be shown in the profile screen.
- The star icon should be shown beside the username.

**Steps to fix the issue:**

- [x] In `My Profile Screen`, check if the user is a partner.
- [x] If the user is a partner, show the star icon beside the username.
- [x] Test the star icon, and make sure that it's working correctly.

**Help:**

- Use `StarIcon` component from `react-native-vector-icons/MaterialCommunityIcons` for the star icon.
- Use `primary` color from `useTheme` for the star icon color.

## Home page

### Home page functionality

**Issue:**

- Pressing the home page icon twice should scroll to the top of the home page.

**Steps to fix the issue:**

- [ ] Add the functionality to scroll to the top of the home page when press the home page icon twice.

## Reflect Immediately

### Follow User not reflect immediately

**Issue:**

- When follow user, the user should be followed immediately.
- In the same page, the same publisher card it's working, but in other pages it's reflect and need to refresh the page.
- The user should be able to follow the user immediately without refreshing the page.

**Steps to fix the issue:**

- [x] Add new `ActionData` to save `IDs` of the user who followed.
- [x] In new `Follow` add the user id to the `ActionData` - `Follwing`.
- [x] Check all `cards, profile, pages` to check the `ServerData` And `ActionData - LocalData` to get the user who
  followed.
- [ ] It's runtime only data, so it's not saved because it's already fetched from the server after open the app.
- [ ] Test the follow user, and make sure that it's working correctly.

### Bookmark Post doesn't reflect immediately

**Issue:**

- When bookmark posts, the post should be bookmarked immediately.
- In the same page, the same post card it's working, but in other pages it's reflected and needs to refresh the page.
- The user should be able to bookmark the post immediately without refreshing the page.

**Steps to fix the issue:**

- [ ] Add new `ActionData` to save `IDs` of the post who bookmarked.
- [ ] In new `Bookmark` add the post id to the `ActionData` - `Bookmarked`.
- [ ] Check all `cards, profile, pages` to check the `ServerData` And `ActionData - LocalData` to get the post who
  bookmarked.
- [ ] It's runtime only data, so it's not saved because it's already fetched from the server after open the app.
- [ ] Test the bookmark post, and make sure that it's working correctly.

## Programs System

### Program Creation

**Issue:**

- The program creation design is not ready.
- The program form is not implemented.
- The program selects posts not working correctly.

**Steps to fix the issue:**

- [ ] Fix the design of the program creation.
- [ ] Implement the program form like post-creation form.
- [ ] Fix the program selects posts, and make sure that it's working correctly.
- [ ] Test the program creation, and make sure that it's working correctly.

### Program edit

**Issue:**

- Editing program is not working correctly.

**Steps to fix the issue:**

- [ ] Fix the program edit, to be able to edit the program details, select posts, and save the program.
- [ ] Test the program edit, and make sure that it's working correctly.

### Program card component

**Issue:**

- The program card component is fully completed.
- The design of the program card component is working correctly.

**Steps to fix the issue:**

- [ ] Fix the program card component design.
- [ ] Check the details, selected posts, title, author, etc... are shown correctly.
- [ ] Test the program card component, and make sure that it's working correctly.

## Admin Panel Screens

### Capitalize on the first letter of the actions

**Issue:**

- Not all actions are capitalized on the first letter.

**Steps to fix the issue:**

- [ ] Capitalize on the first letter of the actions.
- [ ] Test the actions, and make sure that it's working correctly.

### On press menu item, the filter should be reset

**Issue:**

- When click on the menu item, the filter should be reset.

**Steps to fix the issue:**

- [ ] Add the functionality to reset the filter when click on the menu item.
- [ ] Test the filter, and make sure that it's working correctly.

### App menu

**Issue:**

- Remove unused menu items.
- Fix the type of menu to be grouped and collapsed
- Background color of the menu.

**Steps to fix the issue:**

- [ ] Remove unused menu items.
- [ ] Fix the type of menu to be grouped and collapsed.
- [ ] Fix the background color of the menu.
- [ ] Test the menu, and make sure that it's working correctly.

## App Core Functionalities

### Landscape Mode

**Issue:**

- The app must avoid the landscape mode.
- The app must be in portrait mode only.
- Landscape mode should be able in the (video player and Post Editor) only.

**Steps to fix the issue:**

- [ ] Use `ScreenOrientation` from `expo-screen-orientation` to lock the app in portrait mode.
- [ ] The app should be not locked in portrait mode in the (video player and Post Editor), Check code snippet below.
- [ ] Must fix the (Post Editor and Video Player) screens to be look good in landscape mode.

**Help:**

```tsx Title="In video player and Post Editor"
import * as ScreenOrientation from 'expo-screen-orientation';

ScreenOrientation.unlockAsync();
```

```tsx Title="In all screens"
import * as ScreenOrientation from 'expo-screen-orientation';

ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
```

### Share system

**Issue:**

- The Share button in an action sheet is not working correctly.
- Share not sharing the post-link.

### Search Screen

**Issue:**

- No back button in the search screen, if not opened from the bottom tab.
- Error in Tab sections in the search screen.
- No history system in the search screen.
- Error in `Loading`, `No Results`, `Error` states in the search screen.
- Press anywhere in the search screen, should close the keyboard.

**Steps to fix the issue:**

- [ ] Add another screen for searching that is not opened from the bottom tab to add the back button.
- [ ] The Back button should be able to go back to the previous screen.
- [ ] Fix the tab sections in the search screen.
- [ ] Add the history system in the search screen.
    - Save search history in `AsyncStorage`.
    - Add the functionality to clear any search history.
    - Add the functionality to clear all search history.
    - Add the functionality to search from the history.
- [ ] Fix the `Loading`, `No Results`, `Error` states in the search screen.
- [ ] Add the functionality to close the keyboard when press any where in the search screen.
- [ ] Test the search screen, and make sure that it's working correctly.

### Notifications system

**Issue:**

- The notifications system is not receiving good structure data of the notification.
- The notifications system is not showing the notification correctly.
- The notification should include data like (title, body, image, action, user, post, etc...).
- Click on the notification should open the correct screen.
- Must handle all types of notifications (post, user, etc...).
- The notification should be shown correctly in the notification screen.
- The notification must save in `MongoDB` database.
- The notifications system must have s `Microservice` separate handle events to send notifications.

**Steps to fix the issue:**

- [ ] Fix the notification structure in the `Notification` model with the following fields:
    - `title`: The notification title.
    - `body`: The notification body.
    - `image`: The notification image.
    - `action`: The notification action. (Open Post, Open User).
    - `userID`: The notification user id, the user who will receive the notification.
    - `targetID`: The notification target id, the target of the notification (Post, User).
    - `type`: The notification type, the type of the notification (Follow, New post from user you follow, rating, direct
      message, Topic post) (See the User Story).
    - `data`: The notification unstructured data (User, Post, etc...).
    - `read`: The notification read status. (true, false).
    - `createdAt`: The notification created at.
    - `updatedAt`: The notification updated at.
- [ ] Save the notification in the `MongoDB` database.
- [ ] Create a `Notification` Microservice to handle receiving send notifications events.
    - [ ] The `Notification` Microservice should handle the following events: `send-notification`:
        - `single-notification`: (Simple notification, single user).
        - `multiple-notification`: (Simple notification, multiple users).
        - `on-create-post`: (Send notification to the user followers, and topic followers).
        - `on-rating-post`: (Send notification to the post-owner).
        - `on-follow-user`: (Send notification to the user who followed).
        - `on-direct-message`: (Send notification to the user who received the message).
    - [ ] The `Notification` Microservice should handle the following events: `get-notification`:
        - `get-user-notifications`: (Get user notifications).
        - `get-user-unread-notifications`: (Get user unread notifications).
        - `get-user-read-notifications`: (Get user read notifications).
    - [ ] The `Notification` Microservice should handle the following events: `set-notification`:
        - `set-notification-read`: (Set notification read status).
        - `set-notification-unread`: (Set notification unread status).
        - `set-notification-read-all`: (Set all user notifications read status).
        - `set-notification-unread-all`: (Set all user notifications unread status).
    - [ ] The `Notification` Microservice should handle the following events: `delete-notification`:
        - `delete-notification`: (Delete notification).
        - `delete-all-user-notifications`: (Delete all user notifications).
    - [ ] The `Notification` Microservice should handle the following events: `get-notification-count`:
        - `get-user-notifications-count`: (Get user notifications count).
        - `get-user-unread-notifications-count`: (Get user unread notifications count).
        - `get-user-read-notifications-count`: (Get user read notifications count).
- [ ] Handle the notification events on actions like (Follow, Rating, Direct Message, etc...).
- [ ] Display the notification in the notification screen.
- [ ] Add the functionality to mark the notification as read.
- [ ] Add the functionality to mark all notifications as read.
- [ ] Add the functionality to delete the notification.
- [ ] Add the functionality to delete all notifications.
- [ ] Test the notification system, and make sure that it's working correctly.

### Logs system

**Issue:**

- The logs system is not receiving good structure data of the log and not saving it in `MongoDB` database.
- The logs system must have a `Microservice` separate handle events:
    - Save logs.
    - Get logs.
    - Filter logs.
    - Delete logs.
    - Types of logs (info, error, warning, etc...).
    - Action of logs (create, update, delete, etc...).
- Post Screen, User Screen Not having logs working correctly.

**Steps to fix the issue:**

- [ ] Create the `LogSystemService` Microservice.
- [ ] Handle all logs events in the `LogSystemService` Microservice.
- [ ] Save the logs in the `MongoDB` database.
- [ ] Get logs with (Filter, Pagination, Specific log, etc...).
- [ ] Add the logs system to the `PostScreen` and `UserScreen`.
- [ ] Test the logs system, and make sure that it's working correctly.

## Post Editor Improvements

### Cover Image

**Issue:**

- In press next button, and not select cover image, the post-card view in editor must show an image placeholder, and
  on click the placeholder, it should open the `ChangeCoverImage` ActionSheet.

**Steps to fix the issue:**

- [ ] Add the functionality to show the image placeholder in the post-card view.
- [ ] Add the functionality to open the `ChangeCoverImage` ActionSheet when click the placeholder.
- [ ] Test the cover image, and make sure that it's working correctly.

### Tags

**Issue:**

- On press `Space` from the keyboard, the tag should be added to the tag list, not add `_` to the tag.
- Cannot create `Arabic` tags.

**Steps to fix the issue:**

- [x] Add the functionality to add the tag to the tag list when press `Space` from the keyboard.
- [x] When press enters refocusing the tag input.
- [x] Add the functionality to create `Arabic` tags.

### Audio Post

**Issue:**

- No option for uploading audio in the post-editor.
- On added audio then add another audio, the first audio should be replaced with the second audio.

**Steps to fix the issue:**

- [ ] Install `react-native-document-picker` to upload audio in the post-editor.
- [ ] Add the functionality to upload audio in the post-editor.
- [ ] Fix on add audio then add another audio the first audio should be replaced with the second audio.
- [ ] Test the audio post, and make sure that it's working correctly.

### Drafts

**Issue:**

- On press `Discard Draft` button, the draft should be deleted immediately.
- Delete draft from the drafts' list, should delete the draft immediately.
- Refresh the drafts count on focus the `AppMenu` that include the draft count.
- Draft does not handle press anywhere in the draft card to open the draft.

**Steps to fix the issue:**

- [x] On press `Discard Draft` button, delete current draft immediately.
- [ ] Delete draft from the draft list, delete the draft immediately.
- [ ] Refresh the drafts count on focus the `AppMenu` that include the draft count.
- [ ] On press anywhere in the draft card, open the draft.
- [ ] Fix the `Design` of the draft Card.
- [ ] Test the drafts, and make sure that it's working correctly.

### Title

**Issue:**

- Add an animated label for the title to write anything in the title input.

**Steps to fix the issue:**

- [ ] Add an animated label for the title on write any thing in the title input.

## Sticky Header

**Issue:**

- The sticky header must be shown in the following screens:
    - Post Screen.
    - User Screen.
    - Program Screen.
    - Topic Screen.
    - Search Screen.
    - Notifications Screen.
    - Chat Screen.

**Steps to fix the issue:**

- [ ] Create Sticky Header component.
- [ ] Add it to mentioned screens.
- [ ] Test the sticky header, and make sure that it's working correctly.

## Pull to refresh

**Issue:**

- The pull to refresh is must be shown in the following screens:
    - Post Screen.
    - User Screen.
    - Program Screen.
    - Topic Screen.
    - Search Screen.
    - Notifications Screen.
    - Chat Screen.
- The pull to refresh should be able to refresh the screen.
- The pull to refresh should be able to refresh the screen with the correct data.

**Steps to fix the issue:**

- [ ] Create Pull to a refresh component.
- [ ] Add it to mentioned screens.
- [ ] Add the functionality to refresh the screen.
- [ ] Add the functionality to refresh the screen with the correct data.
- [ ] Test the pull to refresh, and make sure that it's working correctly.

## Action sheet improvements

**Issue:**

- Overlay error in the action sheet.
- Not fixable enough.

**Steps to fix the issue:**

- [ ] Add the `Custom Backdrop` to the action sheet.
- [ ] Fix the action sheet to be more flexible, easy to use, less code, and more readable.
- [ ] Test the action sheet, and make sure that it's working correctly.

## Drafts System

### Drafts Screen

**Issue:**

- On deleted draft from the draft screen, the draft should be deleted immediately.
- On deleted draft from the draft screen, the draft count should be updated immediately.

**Steps to fix the issue:**

- [ ] Remove the draft from the list after delete it.
- [ ] Add a focus screen listener to the `AppMenu` to update the drafts count.
- [ ] Test the draft screen, and make sure that it's working correctly.

## Future Requests

- Hashtag number of posts.
- In home page, add a tabs to the home page to show the posts by (Latest, Following, Categories list (Topics)).
- Grouped the icons in the post-editor to be more readable.

# Quick Todo - in next release

- [ ] Try to fix the tabs in the search screen.
- [ ] If the user has login, then logout, show the login screen.
- [ ] Localize the country names to be in Arabic.
- [ ] Check if the interests less than 3 show a message to the user.
- [ ] Fixing the post-editor when have a bullet list to not change the size of the text.
- [ ] Updating the kun portal to the latest version.
- [ ] Add greeting on top of the app menu.
- [ ] Add a new screen with searching to have back button.
- [ ] Fixing the post-component to be more readable and easy to use.
- [ ] Preview post-body in the post-editor when press the next button.
- [ ] Clear the video post or audio post when press video or audio button in the post-card.
- [ ] On press entered after the tag, the tag should be added to the tag list.
- [ ] Fix the draft cards in the draft screen.
- [x] Fix the star icon in the profile screen.


# Quick Todo—in previous release

- [x] Remove autoplay from video and audio player.
- [x] Change the aspect ratio for the user avatar to be 1:1.
- [x] Fixing the views count in the post-screen.
- [x] Fixing the edit post screen.
- [x] Fixing the reading time for a post-card component.
- [x] Change the username label and hint in the profile editor.
- [x] Add the ability to choose the system default for appearance. (Light, Dark, System).
- [x] Change the label for country list.
- [x] Tag limit in the post-editor.
- [x] Click the author name in the post screen, should open the author profile.
- [x] Fixing the share post in the post screen.
- [x] Fix the editing bio in the profile editor.
- [x] Fix the name edit in the profile editor.
- [x] Discard draft button in the post editor should work correctly.
- [x] Create arabic tags in the post editor.



# Todo 

- [ ] Adding the empty placeholder if not having any posts or programs.
- [ ] Add a button to add new post or new program.
- [ ] Add a creation program in the Plus button on the home screen.
- [ ] Change the open media view to open the media and blue the background.
- [ ] Trailer summary and media add a loader when loading.
- [ ] The spell check in ios is not working currently.
- [ ] Add cover image to the post, Before press next button open a dialog to choose the cover image.
- [ ] Edit the audio,video post editor.
- [ ] Add the view audio, video count in the post-screen.
- [ ] The Fab animated button 
