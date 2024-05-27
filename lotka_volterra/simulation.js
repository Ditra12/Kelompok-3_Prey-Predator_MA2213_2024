let grid = [];

let pixel_size, length;

let initial_occupancy;

let prey_reproduction, predator_reproduction, prey_death, predator_death;
let pred_requirement;

function update() {
    let new_grid = newGrid();

    // predator loop
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if (grid[i][j] == 1) {
                let num_predators = getNumPredators(i, j);
                if (num_predators >= pred_requirement && Math.random() < predator_reproduction) {
                    // reproduction
                    grid[i][j] = 0;
                    new_grid[i][j] = 2;
                }
            }

            if (grid[i][j] == 2) {
                if (Math.random() < predator_death) {
                    // death
                    new_grid[i][j] = 0;
                }
                else {
                    // sustenance
                    new_grid[i][j] = 2;
                }
            }
        }
    }

    // prey loop
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if (grid[i][j] == 1) {
                if (Math.random() < prey_death) {
                    // death
                    new_grid[i][j] = 0;
                }
                else if (Math.random() < prey_reproduction) {
                    // reproduction
                    let neighbors = getEmptyNeighbors(i, j);
                    if (neighbors.length > 0) {
                        let random_index = Math.floor(Math.random() * neighbors.length);
                        let x = neighbors[random_index][0];
                        let y = neighbors[random_index][1];
                        new_grid[x][y] = 1;
                    }
                    new_grid[i][j] = 1;
                }
                else {
                    new_grid[i][j] = 1;
                }
            }
        }
    }

    grid = new_grid;

    let prey_count = 0;
    let pred_count = 0;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if (grid[i][j] == 1) prey_count++;
            if (grid[i][j] == 2) pred_count++;
        }
    }

    prey_num_display.innerHTML = "Prey: " + prey_count;
    pred_num_display.innerHTML = "Predators: " + pred_count;
}

function render() {
    context.clearRect(0, 0, canvas_width, canvas_height);

    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if (grid[i][j] == 1) {
                context.fillStyle = "blue";
                context.fillRect(i * pixel_size, j * pixel_size, pixel_size, pixel_size);
            }
            else if (grid[i][j] == 2) {
                context.fillStyle = "red";
                context.fillRect(i * pixel_size, j * pixel_size, pixel_size, pixel_size);
            }
        }
    }
}

function newGrid() {
    let new_grid = [];
    for (let i = 0; i < length; i++) {
        new_grid.push([]);
        for (let j = 0; j < length; j++) {
            new_grid[i].push(0);
        }
    }
    return new_grid;
}

function getNumPredators(i, j) {
    let count = 0;
    for (let x = Math.max(0, i - 1); x <= Math.min(length - 1, i + 1); x++) {
        for (let y = Math.max(0, j - 1); y <= Math.min(length - 1, j + 1); y++) {
            if (grid[x][y] == 2) count++;
        }
    }
    return count;
}

function getEmptyNeighbors(i, j) {
    let neighbors = [];
    for (let x = Math.max(0, i - 1); x <= Math.min(length - 1, i + 1); x++) {
        for (let y = Math.max(0, j - 1); y <= Math.min(length - 1, j + 1); y++) {
            if (grid[x][y] == 0) neighbors.push([x, y]);
        }
    }
    return neighbors;
}

function initParams() {
    prey_reproduction = parseFloat(prey_rep_input.value);
    predator_reproduction = parseFloat(pred_rep_input.value);
    prey_death = parseFloat(prey_ded_input.value);
    predator_death = parseFloat(pred_ded_input.value);
    pred_requirement = parseInt(pred_req_input.value);

    prey_rep_display.innerHTML = "Prey Reproduction Rate: " + prey_reproduction;
    prey_ded_display.innerHTML = "Prey Death Rate: " + prey_death;
    pred_rep_display.innerHTML = "Predator Reproduction Rate: " + predator_reproduction;
    pred_ded_display.innerHTML = "Predator Death Rate: " + predator_death;
    pred_req_display.innerHTML = "Predator Requirement: " + pred_requirement;

    length = 50;
    pixel_size = canvas_width / length;
    grid = newGrid();

    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if (Math.random() < initial_occupancy) {
                grid[i][j] = 1;
            }
        }
    }
}

// Update parameter simulasi berdasarkan input pengguna
function updateParams(variable) {
    if (variable === "prey-rep") {
        prey_reproduction = parseFloat(prey_rep_input.value);
        prey_rep_display.innerHTML = "Prey Reproduction Rate: " + prey_reproduction;
    } else if (variable === "prey-ded") {
        prey_death = parseFloat(prey_ded_input.value);
        prey_ded_display.innerHTML = "Prey Death Rate: " + prey_death;
    } else if (variable === "pred-rep") {
        predator_reproduction = parseFloat(pred_rep_input.value);
        pred_rep_display.innerHTML = "Predator Reproduction Rate: " + predator_reproduction;
    } else if (variable === "pred-ded") {
        predator_death = parseFloat(pred_ded_input.value);
        pred_ded_display.innerHTML = "Predator Death Rate: " + predator_death;
    } else if (variable === 'pred-req') {
        pred_requirement = parseInt(pred_req_input.value);
        pred_req_display.innerHTML = "Predator Requirement: " + pred_requirement;
    }
}

// Inisialisasi parameter simulasi saat halaman dimuat
initParams();
