---
title: Typography
slug: typography
type: foundation
summary: Text is the main way that users visualize content and complete their work, so we've developed a typographic landscape that uses one font for all standard typefaces in Sigstr products. This ensures that the UI is optimized to be highly legible, performs well, and is frictionless as you move between Sigstr products and the rest of the system.
published: 2018-12-19
author: michael
updated: 2018-12-19
status: Experimental
---

## Font Stacks
We use sans-serif fonts for most of our type, the exception being when you want to display code then you should defer to monospace fonts. Serif fonts are not used in Sigstr products. All sans-serif fonts default to Source Sans Pro, and then fall back to the system fonts. All mono fonts default to Source Code Pro, and then fall back to the system monospaced fonts.

### Sans-serif
<table>
  <tr>
    <th>OS</th>
    <th>Font</th>
  </tr>
  <tr>
    <td>Windows</td>
    <td>Source Sans Pro<br>Segoe UI</td>
  </tr>
  <tr>
    <td>MacOS & iOS</td>
    <td>Source Sans Pro<br>SF Pro Text<br>SF Pro Display<br>Helvetica Neue</td>
  </tr>
  <tr>
    <td>Chrome OS & Android</td>
    <td>Source Sans Pro<br>Roboto<br>Noto Sans<br>Droid Sans</td>
  </tr>
  <tr>
    <td>Ubuntu</td>
    <td>Source Sans Pro<br>Ubuntu</td>
  </tr>
</table>

<pre>font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Ubuntu', 'Droid Sans', 'Helvetica Neue', sans-serif;</pre>

### Monospaced
<table>
  <tr>
    <th>OS</th>
    <th>Font</th>
  </tr>
  <tr>
    <td>Windows</td>
    <td>Source Code Pro<br>Segoe UI Mono</td>
  </tr>
  <tr>
    <td>MacOS & iOS</td>
    <td>Source Code Pro<br>SF Mono<br>Menlo</td>
  </tr>
  <tr>
    <td>Chrome OS & Android</td>
    <td>Source Code Pro<br>Roboto Mono</td>
  </tr>
  <tr>
    <td>Ubuntu</td>
    <td>Source Code Pro<br>Ubuntu Mono</td>
  </tr>
</table>

<pre>font-family: 'Source Code Pro', 'SF Mono', 'Segoe UI Mono', 'Roboto Mono', 'Ubuntu Mono', Menlo, monospace;</pre>