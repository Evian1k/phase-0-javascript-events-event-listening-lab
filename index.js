function addingEventListener() {
}
function addingEventListener() {
    const button = document.getElementById('button');
    console.log(button); // Debugging step
    if (button) {
        button.addEventListener('click', function() {
            alert('Button clicked!');
        });
    } else {
        console.error("Button not found!");
    }
}
