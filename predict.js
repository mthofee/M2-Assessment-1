//Rolling the dice to predict the winner
function predict(List)
{
    return List[Math.floor(Math.random()*List.length)];
}
const List = [
    'Best Consumer Solution',
    'Best Enterprise Solution',
    'Best African Solution',
    'Most Innovative Solution',
    'Best Gaming Solution',
    'Best Health Solution',
    'Best Agriculture Solution',
    'Best Educational Solution',
    'Best Finacial Solution',
    'Best Hackathon Solution',
    'Best South African Solution',
    'Best Campus Cup Solution',
    'Huawei AppGallery Catagory 15'
];
console.log("The winner is ", predict(List));

