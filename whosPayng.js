function whosPaying(names) {
    var name = names[Math.floor(Math.random() * names.length)];
    console.log(name + " is going to buy lunch today!")
}

var names = ["Isolda", "Eduardo", "Deus"];
whosPaying(names);

