---
title: Notification
slug: notification
type: component
summary: Use Notifications when communicating high priority alerts. Content might include saving, loading, confirmation, or error messages. It is important to specify which of these the content of the notification falls under in order to choose the correct color and icon. A small Text or Icon button can be added to single line Notifications except in the Chrome Extension Form.
published: 2018-12-11
author: michael
updated: 2019-01-02
status:
    - design-available
    - sketchlibrary-available
    - react-none
---

##  Examples

<figure>
    <img src="/static/images/notification-success.png" alt="Success Notification">
    <figcaption>Sucess Notification</figcaption>
</figure>

<figure>
    <img src="/static/images/notification-error.png" alt="Error Notification">
    <figcaption>Error Notification</figcaption>
</figure>

<figure>
    <img src="/static/images/notification-loading-ce.png" alt="Chrome Extension Loading Notification">
    <figcaption>Chrome Extension Loading Notification</figcaption>
</figure>

## Modifiers
* Color: Defaults to $leaf
* Icon: Defaults to null
* Button: Defaults to False (True)
* Form: Defaults to null (Chrome extension)