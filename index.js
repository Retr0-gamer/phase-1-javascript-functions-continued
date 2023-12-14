function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
};

const mondayWork = function(work = "go to the office") {
    return `This Monday, I will ${work}.`
};

function wrapAdjective(effect = "*") {
    const specialEffectFunction = function(adjective = "special") {
        return `You are ${effect}${adjective}${effect}!`
    }
    return specialEffectFunction;
}