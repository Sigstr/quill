---
title: Avatar
slug: avatar
type: component
summary: Avatars fill in Avatar Frames and are not meant to be used alone. An Avatar can be one of two types&#58; Image (i.e. Account logo or Contacts photo), or Letter if no Image is present. Image avatars are unstyled 1:1 images, while Letter avatars have basic text and background styling. To add border radius, indicators, or increase the size of an avatar, use the Avatar Frame component. Avatar Letters change based on Size which is inherited from the Avatar Frame. One letter is used if only account domain or email address is available. Two letters are used for first and last name for contacts, and two first words of an account. If an account has a single-word name, one letter would show. For example, "Sigstr" would show an S, if no image is available. Conversely, "Sigstr Inc." would show SI.
published: 2018-12-20
author: michael
updated: 2018-12-31
status-design: available
status-sketch-lib: available
---

##  Examples

<figure>
    <img src="/static/images/avatar-image-account.png" alt="Avatar Image">
    <figcaption>Avatar Image</figcaption>
</figure>

<figure>
    <img src="/static/images/avatar-letter.png" alt="Avatar Letter">
    <figcaption>Avatar Letter</figcaption>
</figure>

## Modifiers
* Type: Defaults to Image (Letter)