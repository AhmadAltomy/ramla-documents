# App Tasks

Tasks related to the app, including the app's UI, state, and navigation.

---

## Create Earning and Credit Cards UI in the app

- **Description**: You need to create the Earning and Credit Cards UI in the app.
- **Tags**: App, UI, Menu, Partner.
- **Due Date**:
- **Assigned**: Marah Alrefai

### Summary

We need to create the Earning and Credit UI in the app, and make sure that the UI is working correctly.
The UI should be able to show the Earning, and Credit, Earning must be shown in the partner user.

### Expected Outcome

- Conditional Rendering for Earning and Credit Cards.
    - Case 1: If the user is a partner, show the Earning and Credit.
    - Case 2: If the user is not a partner, show the Credit only.
- Earning and Credit UI.
    - Earning Card UI:
        - Dots horizontal icon.
        - Earning icon.
        - Earning balance with currency
        - `Your Earning` text.
    - Credit Card UI:
        - Dots horizontal icon.
        - Credit icon.
        - Credit balance with currency
        - `Credit` text.
- Earning and Credit UI should be shown in the app menu.
- on click earning card or dots horizontal icon, should open an action sheet with the following options:
    - `Earning History`: Open Earning History screen (Coming Soon).
    - `Cash Out`: Open Cash Out screen. (coming Soon).
- on click credit card or dots horizontal icon, should open an action sheet with the following options:
    - `Credit History`: Open Credit History screen (Coming Soon).
    - `Buy Credit`: Open Add Credit screen. (Buy Credit Page).

### Tasks

- [ ] Create conditional rendering for Earning and Credit Cards.
- [ ] Create Earning and Credit Cards UI.
- [ ] Create an action sheet for Earning and Credit Cards.
- [ ] Set the action sheet options, and navigate to the correct screen.
- [ ] Test The UI (Dark Mode, Light Mode, RTL, LTR).

### Help

- Use `Text` from `react-native-paper` for the text.
- Don't use `fontSize, fontWeight` in `Text` component, use `variant` instead.
- Use `useTheme` from `react-native-paper` to get the theme.
- Use `primaryContainer`, `secondaryContainer` from `useTheme` for the background color.
- Use `onSurface` from `useTheme` for the text color.

### Architecture & Design

#### Files structure

- `src/views/AppMenu/components/EarningCard.tsx` - Earning Card Component.
- `src/views/AppMenu/components/CreditCard.tsx` - Credit Card Component.
- `src/views/AppMenu/components/AppMenuCardWrapper.tsx` - App Menu Card Wrapper Component to display the Earning and
  Credit Cards.

### Additional Information

- [React Native Paper Text](https://callstack.github.io/react-native-paper/text.html)
- [React Native Paper useTheme](https://callstack.github.io/react-native-paper/theming.html#usetheme)
- [User Story](https://ambianze.atlassian.net/browse/KUN-142?atlOrigin=eyJpIjoiNzczNWNiMjhiODZmNDE0Njg5ZDg2MmM4MWYwZjA0NzciLCJwIjoiaiJ9)

### UI Design

![earning_credit__cards.png](/img/ui/earning_credit__cards.png)

### Guidelines

- The UI should be implemented using `react-native-paper`.
- The cards must work in both dark and light mode.
- The cards must work in both RTL and LTR.
- Using `StyleSheet` for styling not `inline styling`.
- Don't use `px` or `dp` for the font size, use `variant` instead.
- Lint the code before pushing it.
- Use `prettier` for formatting the code before pushing it.
- Don't add any props to the component.
- Limit the component to one file only.
- Don't use any external libraries.
- Use `useActionSheet` from `@pkg/ActionsSheet` to create the action sheet.
- Use `Flexbox` for the layout, `flexDirection: 'row'` for the direction, `justifyContent: 'space-between'` for the
  alignment.

---

## Resort action sheet items on click dots horizontal icon in the Post Card Component

- **Description**: You need to resort the action sheet items on click dots horizontal icon in the Post Card Component.
- **Tags**: App, UI, Post, Action Sheet.
- **Due Date**:
- **Assigned**: Marah Musleh

### Summary

We need to resort the action sheet items on click dots horizontal icon in the Post Card Component, and make sure that
the action sheet items are same as the User Story.

### Tasks

- [ ] Resort the action sheet items on click dots horizontal icon in the Post Card Component.
- [ ] The action sheet items should be same as the User Story.

### Help

My posts action sheet items:

- Edit
- Share
- Pin to top (Only if the user in my profile screen)
- Delete (Red text, and icon)

Other posts action sheet items:

- Share
- Save for later
- Follow author
- Mute the author
- Report the post (Red text, and icon)
- Block the author (Red text, and icon)

### Guidelines

- The order of the action sheet items should be same as the User Story.
- Pin to top item should be shown only if the user in my profile screen.
- Delete, Report the post, and Block the author items should be shown in red color, and with red icon.

---

## Share Post Fixing in `PostCard`, `PostHeader`.

- **Description**: You need to fix the share post in the `PostCard`, `PostHeader`.
- **Tags**: App, UI, Post, Share.
- **Due Date**:
- **Assigned**: Marah Alrefai

### Summary

We need to fix the share post in the `PostCard`, `PostHeader`, and make sure that the share post is working correctly.
It's not working in some cases like post card action sheet and post header action sheet.

### Expected Outcome

- Share post should be working correctly in the every `Share` icon/button in the app.
- Share post should be working correctly in the post card action sheet.
- Share post should be working correctly in the Article/Video/Audio post action sheet.

### Tasks

- [ ] Fix the share post in using `usePostShare` hook `Check example in the code`.
- [ ] Test The share post in the every `Share` icon/button in the app.
- [ ] Fix any share post not clickable in the app.

### Help

- Use `usePostShare` hook to share the post.

### Guidelines

- The fixing must not change any logic in the app.
- The fixing must not change any UI in the app.
- The fixing must not change any functionality in the app.
- Share function is working correctly in the app, just we want sure that it's working in the every `Share` icon/button
  in the app.

---

## Fixing required in the Credit Box component, and Wallet box component.

- **Description**: You need to fix the Credit Box component, and Wallet box component.
- **Tags**: App, UI, Credit, Wallet.
- **Due Date**:
- **Assigned**: Marah Alrefai

### Summary

The Credit Box component, and Wallet box component are perfictly working, but we need to fix some issues in the UI.

### Expected Outcome

- press anywhere in the Credit Box component, and Wallet box component, should open the bottom sheet.
- It should hide the credit box also if it's not a publisher, so just show the two boxes if the user is a publisher.

### Tasks

- [ ] Fix the Credit Box component, and Wallet box component.
- [ ] Be sure press anywhere in the Credit Box component, and Wallet box component, should open the bottom sheet.
- [ ] Be sure it should hide the credit box also if it's not a publisher, so just show the two boxes if the user is
  a publisher.
- [ ] Fixing in design
    - Padding inside the box is too big, and the icon must be in the top left corner, and the dot horizontal icon must
      be top right corner, it's so center now.
    - Add border radius to the box (4).
- [ ] Test The Credit Box component, and Wallet box component.

--- 

## Fixing in `ReportPost`, `ReportUser` System in the app needed.

- **Description**: You need to fix the `ReportPost`, `ReportUser` System in the app.
- **Tags**: App, UI, Post, Report.
- **Due Date**:
- **Assigned**: Marah Musleh

### Summary

We need to fix the `ReportPost` System in the app, and make sure that the `ReportPost`, `ReportUser` System is working
correctly.

### Expected Outcome

- The First page should have: "Why are you reporting this post? Help us understand the problem." text.
- Remove the post immediately from reporter feed when the reporter reports the post.
- Send a `Email` to the admin with the post-details, and the reporter-details.
- Fixing the reporting options in a list of options in a bottom sheet.

### Tasks

- [ ] Modify the first page in the `ReportPost` System to have the "Why are you reporting this post? Help us understand
  the problem." text.
- [ ] Remove the post immediately from reporter feed when the reporter reports the post.
    - Add new state in the `PostCard` is hidden or not. `const [isHidden, setIsHidden] = useState(false);`
    - Add new condition in the `PostCard` to hide the post if it's hidden.
    - Set the `isHidden` to `true` when the reporter reports the post.
- [ ] Send a `Email` to the admin with the post-details, and the reporter-details.
    - Add new function in Backend `App/models/reporting/user_report_struct.go` to the
      function `CreatePostReportController`
      to send the `Email` to the admin.
    - Create the email details like `Text`, `Subject`, `To`, `From`, `PostDetails`, `ReporterDetails`.
    - Make sure that the `Email` send to `Email: " <- will provide the email later -> "`.
- [ ] take a look to the `Requirements` section to know what is the `Reporting Options`.

### Help

- Test the email it has been sent using test email `Use your email to test the email`.
- Open the `User Story` to know what is the `Reporting Options`.
- Make sure to fix the same issues in the `ReportUser` System.

### References

- [User Story](https://ambianze.atlassian.net/browse/KUN-141?atlOrigin=eyJpIjoiYmZiMmEzYzhjZTQwNDkwMTgxOGZlNDRhMjE4NDcxNTQiLCJwIjoiaiJ9)

### Guidelines

- The `Reporting Options` should be same as the User Story.
- Email should be sent to the admin with the post-details, and the reporter-details.

---

## Add the `StartIcon` to the Publisher Profile if it's a publisher.

- **Description**: You need to add the `StartIcon` to the Publisher Profile if it's a publisher.
- **Tags**: App, UI, Profile, Publisher.
- **Due Date**:
- **Assigned**: Marah Alrefai

### Summary

We need to add the `StartIcon` to the Publisher Profile if it's a publisher, and make sure that the `StartIcon` is
working correctly.

### Expected Outcome

- The publisher with `Partner` role should have the `StartIcon` in the profile.
- When the user open the publisher profile, the `StartIcon` should be shown in the profile.

### Tasks

- [ ] Choose the correct icon for the `StartIcon`.
- [ ] Add the `StartIcon` to the Publisher Profile if it's a publisher.
- [ ] Test The `StartIcon` in the Publisher Profile if it's a publisher.

### Help

- Use `isPartner` the return from `usePublisherDetails` hook to know if the publisher is a partner or not.

### Guidelines

- The code must clean, and readable.
- Create a StarIconComponent in `ProfileScreen/components/StarIcon.tsx` to use it in the profile screen.
- The condition must be as a props passed to StartIcon component.
- Case 1: If the user is a partner, show the StartIcon return from the StarIconComponent.
- Case 2: If the user is not a partner, show nothing, return `null`.

---

## Handle reflection in the `PublisherCard` component, and `PostCard` component on (Bookmarked, Followed).

- **Description**: You need to handle reflection in the `PublisherCard` component, and `PostCard` component on
  (Bookmarked, Followed).

- **Tags**: App, UI, Publisher, Post, Reflection.
- **Due Date**:
- **Assigned**: Marah Alrefai

### Summary

The bookmark, and follow in the `PublisherCard` component, and `PostCard` component are working correctly, but we need
to handle reflection in the `PublisherCard` component, and `PostCard` component on (Bookmarked, Followed).

### Expected Outcome

- On press bookmark icon in the `PostCard` component, the bookmark status should be reflected in all the App.
- On press follow icon in the `PublisherCard` component, the follow status should be reflected in all the App.
- It should be reflected in other screens, not just only the screen that the user is in.

### How it works now?

1. The `User` open the app, the app `Fetch` the `Posts`, and `Publishers` data from the backend.
2. In the `Fetched` data from the backend, it's comming with the `Bookmarked`, and `Followed` status.
3. If the user `Bookmarked`, or `Followed` any post, or publisher, the app will reflect the status in the current card,
   or
   publisher card only.
4. When the user back to previous page that include `PostCard`, or `PublisherCard`, the status will be kept from the
   backend, and the app will not reflect the status in the current card, or publisher card.
5. So the status will be reflected in the current card, or publisher card only.

### How we can fix it?

1. We should create a new zustand store that include the `BookmarkedPostIDs`, and `FollowedPublisherIDs`.
2. On fetch data for `Posts`, `Publishers` from the backend, We don't save any things to this store.
3. We only need to save the `BookmarkedPostIDs`, and `FollowedPublisherIDs` to this store when the user `Bookmarked`,
   or `Followed` any post, or publisher.
4. Now in all the app, we should use this store to get the `Bookmarked`, and `Followed` status for any post, or
   publisher.
5. And we should have to `conditional`
    - Condition 1: The `Bookmarked` status or `FollowStatus` is true comming from the backend.
    - Condition 2: The `Bookmarked` status or `FollowStatus` is true in the `BookmarkedPostIDs`, or
      `FollowedPublisherIDs` store.
6. So we need `isBookmark` that comming from the backend, and is `BookmarkedPostIDs` include the post id.
7. And we need `isFollowed` that comming from the backend, and is `FollowedPublisherIDs` include the publisher id.

### Tasks

- [ ] Create a new zustand store that include the `BookmarkedPostIDs`, and `FollowedPublisherIDs`.
- [ ] Handle pressing on `Bookmark, Follow` icon in the `PublisherCard` component, and `PostCard` component or action
  sheet, to save or unsaved the `BookmarkedPostIDs`, and `FollowedPublisherIDs` to the store.
- [ ] Add the new condition to the `PostCard` component, and `PublisherCard` component to check if the post is bookmark
  or not, and if the publisher is followed or not.
- [ ] Test The `PostCard` component, and `PublisherCard` component to make sure that the reflection is working
  correctly.

### Guidelines

- The Store must handle all process, `Bookmark, UnBookmark, Follow, UnFollow`.
- You must handle adding the `BookmarkedPostIDs`, and `FollowedPublisherIDs` to the store from all the app functions
  that include `Bookmark, UnBookmark, Follow, UnFollow`, like `BottomSheet, PostCard, PublisherCard, PostView,
  ProfileScreen, PublisherProfileScreen, PostDetailsScreen, PublisherDetailsScreen`.
- You must handle removing the `BookmarkedPostIDs`, and `FollowedPublisherIDs` from the store from all the app
  functions that include `Bookmark, UnBookmark, Follow, UnFollow`, like `BottomSheet, PostCard, PublisherCard,
  PostView, ProfileScreen, PublisherProfileScreen, PostDetailsScreen, PublisherDetailsScreen`.
- You must handle the reflection in the `PostCard` component, and `PublisherCard` component to check if the post is
  bookmark or not, and if the publisher is followed or not.
- This code must not change any logic in the app.
- This code must not change any UI in the app.

---

## Fix the share post in the bottom sheet in the `PostCard` component.

- **Description**: You need to fix the share post in the bottom sheet in the `PostCard` component.
- **Tags**: App, UI, Post, Share.
- **Due Date**:
- **Assigned**: Marah Alrefai

### Summary

We need to fix the share post in the bottom sheet in the `PostCard` component, and make sure that the share post is
working correctly.

### Expected Outcome

- Share post should be working correctly in the bottom sheet in the `PostCard` component.
- Share post should be working correctly in the bottom sheet in the Article/Video/Audio post action sheet.
- The share post, sharing a wrong link, we must change the useSharePost to share the correct
  link. `https://ramla.solutions/article/${slug}` now it's sharing `https://ramla.solutionsarticle/${slug}

### Tasks

- [ ] Fix the share post in the bottom sheet in the `PostCard` component.
- [ ] Fix the share post in the bottom sheet in the Article/Video/Audio post action sheet.
- [ ] Fix the share post, sharing a wrong link, we must change the useSharePost to share the correct
  link. `https://ramla.solutions/article/${slug}` now it's sharing `https://ramla.solutionsarticle/${slug}

---

## Fixing the Create Program UI, Screen and Functionality.

- **Description**: You need to fix the Create Program UI, Screen and Functionality.
- **Tags**: App, UI, Program.
- **Due Date**:
- **Assigned**: Marah Alrefai

### Summary

We need to fix the Create Program UI, Screen and Functionality, and make sure that the Create Program UI, Screen and
Functionality is working correctly.

### Expected Outcome

- Program creation Title, Description, and Image should be like the Create Post UI.
- Connect the UI For title, description, and image to the data.

### Tasks

- [ ] Look at the `PostEditor` component to know how to create the UI for title, description, and image.
- [ ] Add the UI for title, description, and image for the Create Program UI.
- [ ] Connect the UI For title, description, and image to the data.
- [ ] Try to create a program, and make sure that the program is created correctly.

### Help

- Check the `PostEditor` component to know how to create the UI for title, description, and image.
- The Title have clear structure, and the description have clear structure.
- You can clone the `PostEditor` component, and change some things to make it work for the program.
- Image use `useImageProvider` hook to upload the image check it in the `PostEditor` component to know how to use it.

### Guidelines

- The UI must be like the Create Post UI.

---

## Implement the `Products API` in the app.

- **Description**: You need to implement the `Products API` in the app.
- **Tags**: App, API, Products.
- **Due Date**:
- **Assigned**: Marah Musleh

### Summary

We need to implement the `Products API` in the app, and make sure that the `Products API` is working correctly.

### Expected Outcome

- The `Products API` should be implemented in the app.
- The `Products screen` in `Buy Credit` in App Menu should be implemented with the `Products API`.

### Tasks

- [ ] Implement the `Products API` in the app.
- [ ] Implement the `Products screen` in `Buy Credit` in App Menu with the `Products API`.
- [ ] Test The `Products API` in the app.

### Help

You can use

```typescript
const productsApi = new ProductsApi()
productsApi.getProducts()
```

and use `useQuery` from `react-query` to get the data from the `Products API`.

```typescript
const { data, isLoading, isError } = useQuery('products', () => productsApi.getProducts())
```

---

## Implement the `Search history` in the search screen.

- **Description**: You need to implement the `Search history` in the search screen.
- **Tags**: App, UI, Search.
- **Due Date**:
- **Assigned**: Marah Alrefai

### Summary

In the search screen, there is a component for searching history boxes, so we need to implement the `Search history`
in the search screen, and make sure that the `Search history` is working correctly.

### How searching works now?

- On starting typing in the search input, The `debouncedValue` updated after 500ms to the new value.
- When the `debouncedValue` updated, the app will `Fetch` the `Search` data from the backend.

### What we need to do?

- We need to save the `debouncedValue` to the `Search history` store.
- `Search history` store should be saved in the `AsyncStorage`.
- The `Search history` store should save just 5 items.

### What we need to do in the UI?

- We need to show the `Search history` store in the search screen.
- There is a Search history component in the search screen, have a list of search history boxes.
- We need to show the `Search history` store in the search history boxes.
- We need to show the `Search history` store in the search history boxes in the correct order.

### Tasks

- [ ] Create a new zustand store that include the `Search history` store.
- [ ] The store should be saved in the `AsyncStorage` you can see the `useTranslation` store to know how to save the
  store in the `AsyncStorage` automatically.
- [ ] The store should save just 5 items.
- [ ] Show the `Search history` store in the search screen.

### Help

- Use `useTranslation` store to know how to save the store in the `AsyncStorage` automatically.

---

## Add paid post feature to the post-creation.

- **Description**: You need to add paid post feature to the post-creation.
- **Tags**: App, UI, Post, Paid.
- **Due Date**:
- **Assigned**: Marah Musleh

### Summary

In creating a new post we need to add paid post feature to the post-creation, we can make this by adding a new switch to
the post-creation screen, after press the next button, we need to show a new switch in the post details screen and price
input, and make sure that the paid post feature is working correctly.

### Expected Outcome

- New switch in the post-creation screen after press the next button.
- If the user press the switch and turn it on, a new price input should be shown.
- If the user press the switch and turn it off, the price input should be hidden.
- If the user press the switch and turn it on, the price input should be required, and must turn off the publish button
  until the user enter the price.
- The input field should accept only numbers, and the user can't enter any other characters, and the user can't enter
  any other characters.

### Tasks

- [ ] Pull the last update for Kun App repo to get the updated interface for the Post Type.
- [ ] Check the `PostType` interface to know how to get the is paid post status.
- [ ] Add new switch in the post-creation screen after press the next button.
- [ ] If the user press the switch and turn it on, a new price input should be shown.
- [ ] If the user press the switch and turn it off, the price input should be hidden.
- [ ] If the user press the switch and turn it on, the price input should be required, and must turn off the publish
  button until the user enter the price.
- [ ] The input field should accept only numbers, and the user can't enter any other characters, and the user can't
  enter any other characters.
- [ ] Test The paid post feature in the post-creation.

### Help

#### Paid post-status in the `PostType` interface

```typescript
export interface PostType {
  isPaidPost: number // 1- is free post, 2 is paid post
}
```

#### Paid price in the `PostType` interface

```typescript
  paid_price: number
```

#### Check the `usePostEditor` hook to check how the creation post works.

- Open the usePostEditor hook.
- Check onPublish function to add the new types for it like `isPaidPost, paid_price`.
- Add a new function to change the `isPaidPost, paid_price` in the post-state.
- Post-state should have `isPaidPost, paid_price` in the post-state.
- Use usePostEditor hook to handle the `isPaidPost, paid_price` in the post-state.

#### The preview component it's in the components/PostEditorPreview.tsx

!!!note
Check the usePostEditor hook to know how it handles the post-creation.
