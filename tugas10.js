function incrementLoop(numLoop){
    let temp = 0;
    for(let i=1; i<=numLoop; i++){
        temp = temp + i;
        console.log(temp);
    }
}

incrementLoop(10);