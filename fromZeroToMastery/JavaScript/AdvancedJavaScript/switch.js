function moveCommand(direction){
    var whatHappens;
    switch(direction){
        case "forward":
            whatHappens = "衝衝衝...";
            break;
        case "back":
            whatHappens = "逃逃逃...";
            break;
        case "left":
            whatHappens = "'鑽鑽鑽...";
            break;
        case "right":
            whatHappens = "殺殺殺...";
            break;
        default:
            whatHappens = "當機";
    }
    return whatHappens;
}

