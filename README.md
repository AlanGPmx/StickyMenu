# Sticky Menu
This proyect doesn't need jQuery or any other library to work. Is write just with HTML, CSS and JS. I added Fre Fontawesome Library, but it doesn't necessary too.

## Installation
Download from GitHub

### Requirements
None

### Use
You have to add CSS...
```html
<link rel="stylesheet" href="main.css">
```

Code...
```html
<div class="container">
  <!-- This Header is totally optional -->
</div>
    
<nav class="navbar" id="navbar">
  <span class="navbar-toggle" id="js-navbar-toggle">
    <!-- Here you can add the icon to the menu -->
  </span>
  <a href="#" class="logo">
    <!-- Here you can add an image or just text -->
  </a>
  <ul class="main-nav" id="js-menu">
    <li>
      <a href="#" class="nav-links">Inicio</a>
    </li>
    <!-- Add all "li" as you need -->
  </ul>
</nav>

<main class="container text" id="underNav">
  <!-- Here's goes your main content and the most important info -->
</main>
```

... and JS files.
```html
<script src="main.js"></script>
```

### Description

This simple example was just for learning about this topic and I'm sure that you can use it and get it better. So do it.


### Options

Options               | Definition
---------------       | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 
`Icon / Logo`         | You can use simply text or add an image like the example
`Icon Menu`           | You can use icons like Fontawesome or any other library, and maybe add SGV
