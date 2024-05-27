function clicked() {
    if (pressed) {
        console.log(`Clicked at (${click_x}, ${click_y})`);
        // Add interaction logic here, if needed
    }
}

function moved() {
    if (pressed) {
        console.log(`Moved to (${click_x}, ${click_y})`);
        // Add interaction logic here, if needed
    }
}

function released() {
    if (!pressed) {
        console.log(`Released at (${click_x}, ${click_y})`);
        // Add interaction logic here, if needed
    }
}

function keyPressed(key) {
    console.log(`Key pressed: ${key}`);
    // Add interaction logic here, if needed
}

function keyReleased(key) {
    console.log(`Key released: ${key}`);
    // Add interaction logic here, if needed
}
