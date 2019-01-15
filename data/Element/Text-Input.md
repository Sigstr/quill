---
title: Text Input
slug: text-input
type: component
summary: Use Text Inputs to ask for inputs from users. Text Input is a complex component as it has a lot of modifiers
published: 2018-12-26
author: michael
updated: 2018-12-27
status:
    - design-inprogress
    - sketchlibrary-none
    - react-none
---

##  Examples
<p data-height="960" data-theme-id="light" data-slug-hash="BvdrzN" data-default-tab="result" data-user="auermi" data-pen-title="Inputs" class="codepen">See the Pen <a href="https://codepen.io/auermi/pen/BvdrzN/">Inputs</a> by Michael (<a href="https://codepen.io/auermi">@auermi</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Modifiers
<table> 
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
        <th>Default</th>
    </tr>
    <tr>
        <td>Size</td>
        <td>CSS class</td>
        <td>Controls the size of a field and changes font size, padding, and height.</td>
        <td>Regular</td>
    </tr>
    <tr>
        <td>Assistive Text</td>
        <td>String</td>
        <td>Used to display helpful information. If a message is passed, a label will show beneath the corresponding field.</td>
        <td>null</td>
    </tr>
    <tr>
        <td>Error</td>
        <td>String (Prop)</td>
        <td>Used to display errors. If an error message is passed, border and label will show as red.</td>
        <td>null</td>
    </tr>
    <tr>
        <td>Disabled</td>
        <td>HTML Attribute</td>
        <td>Disable a field to restrict user input with this attribute on the `<input>`.</td>
        <td>null</td>
    </tr>
    <tr>
        <td>Placeholder</td>
        <td>String (HTML Attribute)</td>
        <td>Used to give additional context to an input. Use sparingly, as they tend to add more confusion in form groups.</td>
        <td>null</td>
    </tr>
    <tr>
        <td>Icon</td>
        <td>String (Font Awesome Icon)</td>
        <td>Used to give additional context to an input. Can include a tooltip that shows on hover</td>
        <td>null</td>
    </tr>
    <tr>
        <td>Icon position</td>
        <td>CSS class</td>
        <td>Left or Right</td>
        <td>null</td>
    </tr>
    <tr>
        <td>Clear Button</td>
        <td>HTML Element</td>
        <td>Clears input. Only shows when there is a value in the field</td>
        <td>null</td>
    </tr>
</table>