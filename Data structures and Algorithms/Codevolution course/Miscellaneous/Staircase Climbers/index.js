function staircaseClimbers(steps, n){
    for(let i = steps.length; i < n; i++){
        steps[i] = steps[i - 1] + steps[i - 2]
    }
    return steps[n - 1]
}
console.log(staircaseClimbers([1, 2], 5))