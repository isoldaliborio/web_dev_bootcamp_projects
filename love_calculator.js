var a = prompt("What is your name?");
var b = prompt("what is theier name?");
var loveScore = Math.random();
loveScore = Math.floor((loveScore * 100) + 1)


if (loveScore > 70) {
    alert(" you match " + loveScore + "%. You love each other like Kanye loves Kanye");
} 
if (loveScore > 30 && loveScore <= 70) {
    alert(" you match " + loveScore + "%.");
} 
else {
    alert(" you match " + loveScore + "%. You go together like water and oil");
}
