---
title: Accessibility
slug: accessibility
type: foundation
summary: Sigstr takes the accessiblity of our products very seriously. With each new component we design, we do not forgo accessibility for increased visual appeal. The accessiblity which informs the greater usability of our product, comes before the visual aesthetic. However, we also do not believe that making our product accessible should cripple the visual appearance of it. Accessiblity and a polished UI come hand in hand.
published: 2019-01-19
author: michael
updated: 2019-01-19
---

## Color
All components meet or exceed the following standards:

* Color should always be combined with another form of visual indication to provide information or prompt action. Color - as visual idicator, is inaccessible for those with some or all vision loss. Text, Font weight, Iconography, and Illustration are examples of visual indicators that can be used in tandem with color to meet this standard.
* The combinations of text and their background colors should not fall below the WCAG recommended threshold ratio of 4.5:1. For type at least 18 points, or 14 point bold, 3:1 is an acceptable ratio.

These rules will help both visually impaired and the unimpaired to recieve the same information.

### Resources
* [Contrast Minimum - WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)
* [Test Contrast Ratios](https://contrast-ratio.com/#%23000-on-%23fff)


## Semantic Markup
When developing components, special attenion should be paid to the HTML tags.

One example of this would be the usage of the `<nav>` tag. Here's an excerpt from MDN on `<nav>`

<pre>The nav element represents a section of a page whose purpose is to provide navigation links, either within the current document or to other documents. Common examples of navigation sections are menus, tables of contents, and indexes.</pre>
[Read more about the nav element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav)

## Text
Within the suite of Sigstr apps, consise and consistent copy is especially important due to the complexity.

Here's an example - let's say we have a search text input on a page with a list of Contacts. Labeling the input is very important, so that the user knows what use the input provides. By adding concise placeholder text such as "Search for a Contact", the user knows what to expect upon interaction.

## Images
All images that contain information relevant to the usage of a page must contain alternative text. Avoid phrases such as "image of..." or "a picture of...". Images which add value in a decorative fashion do not require alternative text.

## Videos
All videos that can be accessed from within the Sigstr product require closed captioning. The videos should also have accesible media controls, so that users can easily start or stop the video.

## Keyboard Navigation
Users unable to use a mouse must be able to navigate through the app using only a keyboard. Pay special attention to elements that require hover to ensure they will show when focused by a keyboard or screenreader.

Tooltips should be accessible via focus by keyboard.

In a form, each field should be validated individually, after the focus is removed to keep users from having to navigate back an extra few input fields. For example, if a user is logging into Sigstr and enters an invalid email address, be sure to notify them as soon as they move on to the password input.