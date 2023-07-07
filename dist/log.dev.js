"use strict";

//
var firebaseConfig = {
  apiKey: "AIzaSyBVHDva0972e85i1cVLr-LDyDaJhpIRz-M",
  authDomain: "login-and-sign-in-6c629.firebaseapp.com",
  databaseURL: "https://login-and-sign-in-6c629-default-rtdb.firebaseio.com",
  projectId: "login-and-sign-in-6c629",
  storageBucket: "login-and-sign-in-6c629.appspot.com",
  messagingSenderId: "609204425026",
  appId: "1:609204425026:web:8055826bad56bd900678db"
}; // Initialize Firebase

var app = firebase.initializeApp(firebaseConfig);
var database = firebase.database();
var form = document.querySelector("#registration-form"); // submit event

form.addEventListener("submit", function (e) {
  e.preventDefault();
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var gender = document.getElementById("gender").value;
  var work = document.getElementById("work").checked;
  var student = document.getElementById("student").checked;
  var formData = {
    name: name,
    phone: phone,
    email: email,
    password: password,
    gender: gender,
    work: work,
    student: student
  };
  var userData = JSON.parse(localStorage.getItem('userData')) || [];
  userData.push(formData);
  localStorage.setItem('userData', JSON.stringify(userData)); //push data in firebase 

  database.ref('form-data').push(formData).then(function () {
    form.reset();
    console.log('Form data saved successfully');
    alert("Form data saved successfully");
  })["catch"](function (error) {
    console.error('Error saving form data:', error);
  });
});