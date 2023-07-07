# Firebase Registration Form

This is a JavaScript registration form that utilizes Firebase for data storage. The form allows users to input their name, phone number, email, password, gender, and work/student status. The form data is validated, and if the inputs are valid, the data is stored in both the local storage and the Firebase Realtime Database.

## Firebase Configuration

To connect the registration form with your Firebase project, you need to provide the Firebase configuration. Update the `firebaseConfig` object in the code with your own Firebase project credentials. You can find these credentials in your Firebase project settings.

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};
```

## Usage

To use the registration form, follow these steps:

1. Open the `index.html` file in a web browser.
2. Fill out the registration form with your name, phone number, email, password, gender, and work/student status.
3. Click the "Submit" button to validate the form inputs.
4. If the inputs are valid, the form data will be stored in both the local storage and the Firebase Realtime Database.
5. If the inputs are invalid, an alert message will be displayed.

## Form Validation

The registration form performs validation on the following inputs:

- Email: The email input is validated using a regular expression pattern. It should be in the format `name@example.com`.
- Password: The password input is validated to ensure it has a minimum length of 8 characters.
- Phone: The phone input is validated using a regular expression pattern. It should contain only numeric characters.

If any of the validation checks fail, an alert message will be displayed.

## Database Storage

The form data is stored in two places:

1. Local Storage: The form data is stored in the local storage using the `localStorage.setItem()` function. The data is retrieved and updated as an array in the local storage.
2. Firebase Realtime Database: The form data is also stored in the Firebase Realtime Database using the `database.ref().push()` function. The data is pushed to the "form-data" node in the database.

## Dependencies

The registration form relies on Firebase for data storage. Make sure to include the Firebase JavaScript SDK in your project. You can include it by adding the following script tag in your HTML file, preferably before the script that contains the form code.

```html
<script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-database.js"></script>
```

## License

Feel free to use and modify the code according to your needs. Contributions are welcome!

## Credits

This registration form application was created by [Romen Rakholiya](https://www.linkedin.com/in/romenrakholiya/).

You can find the original source code and more projects on [GitHub](https://github.com/yourusername).

If you have any questions or suggestions, please feel free to reach out to me at [romenrakholiya34@gmail.com].
