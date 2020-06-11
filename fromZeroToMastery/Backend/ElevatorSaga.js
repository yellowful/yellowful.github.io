{
    init: function(elevators, floors) {
        var elevator = elevators[0]; // Let's use the first elevator

        // Whenever the elevator is idle (has no more queued destinations) ...
        elevator.on("idle", function() {
            // let's go to all the floors (or did we forget one?)
            elevator.goToFloor(0);
            elevator.goToFloor(4);
        });
        elevator.on("floor_button_pressed", function(floorNum) {
            elevator.goToFloor(floorNum);
        } );
        elevator.on("passing_floor", function(floorNum, direction) {
            if(elevator.destinationDirection()===direction){
                elevator.stop(floorNum);
            }});
    },
    update: function(dt, elevators, floors) {
        // We normally don't need to do anything here
    }
}