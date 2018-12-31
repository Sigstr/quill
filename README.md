# Quill

## Overview
Quill is Sigstr's design system. This is a website documenting the components. This website is powered by [Statik]((https://github.com/thanethomson/statik/wiki/Installation)), a static site generator written in Python.

[https://quill.now.sh](https://quill.now.sh)

## Requirements
In order to run **Quill** locally, you will need:

* Python 2.7+ or Python 3.5+
* `pip` or `easy_install`

## Installation
To install Statik and it's dependencies, follow the instructions seen on the [Statik wiki](https://github.com/thanethomson/statik/wiki/Installation).

## Usage
To build the project in the current directory, writing output files to the `public` directory within the current directory:

```bash
> statik
```

To run the site locally, I recommend Python's [SimpleHTTPServer](https://docs.python.org/2/library/simplehttpserver.html)

```bash
> python -m SimpleHTTPServer 8000
```