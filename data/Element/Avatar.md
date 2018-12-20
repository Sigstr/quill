---
title: Avatar
slug: avatar
type: component
summary: Avatars populate avatar frames. An avatar can be either an image (i.e. Account logo or Contacts photo), or letters (the fallback for a missing accounts or contacts image). One letter is used if only account domain or email address is available. Two letters are used for first and last name for contacts, and two first words of an account. If an account in only one word, one letter would show. For example, "Sigstr" would show an S, if no image is available. Transversely, "Sigstr Inc." would show SI. Image avatars are unstyled 1:1 images, while Letter avatars have basic text and background styling. To add border radius, indicators, or increase the size of an avatar, use the Avatar Frame component. Letter sizing has three forms - Small, Regular, and Large. These styles are informed by the modifier set on the Avatar Frame, but defaults to Regular.
published: 2018-12-20
author: michael
updated: 2018-12-20
status: Stable
---

##  Examples

### Image (Contact)
![Image contact Avatar](/static/images/avatar-image-contact.png)

### Image (Account)
![Image account Avatar](/static/images/avatar-image-account.png)

### Letter (1 Letter)
![Letter Avatar](/static/images/avatar-letter.png)

### Letter (2 Letters)
![Letter Avatar](/static/images/avatar-letter-two.png)

## Modifiers
* Type: Defaults to Image (Letter)