---
title: Message
slug: message
type: component
summary: Use messages when communicating conditions or indicating an event. Content can include authentication, information, confirmation, warnings, and error messages. It is important to specify which of these the content of the message falls under in order to choose the colors
published: 2018-12-11
author: michael
updated: 2018-12-27
status-design: Experimental
---

##  Examples

### Information
![Information Message](/static/images/message-info.png)

### Prompt message
![Prompt Message](/static/images/message-prompt.png)

### Warning (Chrome Extension)
![Warning Message](/static/images/message-warning-ce.png)

## Modifiers

* Width: (Defaults to auto)
* Color: (Defaults to $slate) One color is set for the component affecting the background (2% opacity), and the border (40% opacity)
* Button: Include Small Text button (only for use when it is a single line and not for the chrome extension)
* Form: (Defaults to null) Chrome extension version available