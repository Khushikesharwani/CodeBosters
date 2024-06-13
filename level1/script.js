const nav = document.querySelector("nav"),
      toggleBtn = nav.querySelector(".toggle-btn");

toggleBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
});

function onDrag(event) {
    const navStyle = window.getComputedStyle(nav),
          navTop = parseInt(navStyle.top),
          navHeight = parseInt(navStyle.height),
          windHeight = window.innerHeight;

    let newTop = navTop + event.movementY;
    if (newTop < 1) {
        newTop = 1;
    } else if (newTop > windHeight - navHeight) {
        newTop = windHeight - navHeight;
    }
    nav.style.top = `${newTop}px`;
}

function onMouseDown(event) {
    event.preventDefault();  // Prevent default behavior to avoid unwanted side effects
    nav.addEventListener("mousemove", onDrag);
}

function onMouseUp() {
    nav.removeEventListener("mousemove", onDrag);
}

nav.addEventListener("mousedown", onMouseDown);
document.addEventListener("mouseup", onMouseUp);
nav.addEventListener("mouseleave", onMouseUp);
