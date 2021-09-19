const changeToAfternoon = () => {
    $("body").addClass("bodyAfternoon");
}

const changeToDefault = () => {
    $("body").removeClass("bodyAfternoon");
}

    export { changeToAfternoon,changeToDefault }