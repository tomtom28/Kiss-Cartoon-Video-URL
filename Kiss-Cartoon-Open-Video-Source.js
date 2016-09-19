// ==UserScript==
// @name        Kiss Cartoon - Open Video in New Tab
// @namespace   Kiss Cartoon - Open Video Source URL in New Tab
// @description Open URL of Current Video in a New Tab
// @include     http://kisscartoon.me/Cartoon/*
// @version     1
// @grant       none
// ==/UserScript==

// Extract the URL to the Google Video Source
var videoURL = $("#my_video_1_html5_api").attr("src");

// Create New Hyperlink to bring user to the Video Source (in GoogleVideo)
var newtabButton = $('<a target="_blank">');
newtabButton.attr("href", videoURL);
newtabButton.text("Open Video Source URL");

// Apply various CSS Properties to make the link stand out
newtabButton.css({ "font-size": "20px", "float": "right", "padding-right": "42%", "padding-top": "10px", "color": "#00e600" });

// Append the New HyperLink to the existing navbar
$("#navsubbar").append( newtabButton );