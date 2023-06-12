// Initialize Unity-JS save system.
window.unitySaved = false;
window.requestUnitySave = false;

// Attach event listener to window.onbeforeunload to prevent page unload until Unity has saved.
function unitySave() {
    if (!window.requestUnitySave){
        window.requestUnitySave = true;
        window.unityInstance.SendMessage("GameController", "onQuit");
        console.log("Unity save requested");
    }
}

window.onbeforeunload = function(event) {
    if (window.unitySaved)
        return;
    unitySave();
    console.log("Attempting to prevent page unload...");
    event.preventDefault();
    // alert("Are you sure you want to leave the page?");
    var confirmationMessage = "Are you sure you want to leave the page?";
    (event || window.event).returnValue = confirmationMessage; // For IE and Firefox
    return confirmationMessage; // For Chrome and Safari
};