// Store references to draggable pets and droppable houses
const draggableElements = document.querySelectorAll('.box');
const droppableElements = document.querySelectorAll('.droppable');
let score = 0;

// DRAG START
draggableElements.forEach(element => {
    element.addEventListener('dragstart', (dragStartEvent) => {
        dragStartEvent.dataTransfer.setData('text', dragStartEvent.target.id);
        dragStartEvent.target.classList.add('draggableFormat'); // Apply visual feedback when dragging
    });
});

// DROP EVENT
droppableElements.forEach(element => {
    element.addEventListener('drop', (dropEvent) => {
        dropEvent.preventDefault();
        const droppedElementId = dropEvent.dataTransfer.getData('text');
        const dropZoneId = element.getAttribute('data-draggable-id');

        // Check if the dragged element matches the correct droppable area
        if (droppedElementId === dropZoneId) {
            score += 1;
            document.getElementById('remarks').innerText = "Correct!";
            document.getElementById('scores').innerText = score;
            // Append the dragged element to the droppable area
            element.appendChild(document.getElementById(droppedElementId));
        } else {
            document.getElementById('remarks').innerText = "Incorrect!";
        }
    });

    // Allow the item to be dropped
    element.addEventListener('dragover', (dragOverEvent) => {
        dragOverEvent.preventDefault();
    });
});

// DRAG END (removes the drag styling)
draggableElements.forEach(element => {
    element.addEventListener('dragend', (dragEndEvent) => {
        dragEndEvent.target.classList.remove('draggableFormat');
    });
});
