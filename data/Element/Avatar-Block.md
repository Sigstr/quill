---
title: Avatar Block
slug: avatar-block
type: component
summary: Avatar blocks are rows containing information on an account or a contact. They consist of several elements - The title is the Account/Contact Name, Two details hyphen-delineated (Accounts only one, domain, and Contacts, Job Title, Account name), a Signal, and an icon. If one or zero details, remove hypen. Small Avatar blocks can only have 1 detail.
published: 2018-12-20
author: michael
updated: 2018-12-20
status-design: Stable
---

##  Examples

### With Signal
![Avatar block with signal](/static/images/avatar-block-signal.png)

### Small (with Signal and Salesforce)
![Avatar block with signal](/static/images/avatar-block-small-signal-salesforce.png)

### No Detail (Small with icon)
![Avatar block with no detail and Salesforce](/static/images/avatar-block-no-detail-small-icon.png)

## Modifiers
* Signal: Defaults to show (network score)
* Icon: Defaults to none (takes any font awesome icon)
* Detail 1: Defaults to none
* Detail 2: Defaults to none (unavailable for small avatar blocks)
* Size: Defaults to Regular (small for chrome extension)
* State: Defaults to none (hover, focus)