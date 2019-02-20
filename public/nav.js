function toggle() {
  var toggle = document.getElementById("toggle");
  var menu = document.getElementById("menu");
  if (/active/.test(toggle.className)) {
    document.getElementById("toggle").className = 'navbar-burger';
    document.getElementById("menu").className = 'navbar-menu';
  } else {
    document.getElementById("toggle").className = 'navbar-burger is-active';
    document.getElementById("menu").className = 'navbar-menu is-active';
  }
}
