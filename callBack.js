function explainCallBack(name, age, task){
    console.log('hello ', name);
    console.log('your age ', age);
    task();
}
function washFeet(){
    console.log('wash your feet');
}
function takeShower(){
    console.log('take shower');
}
function scrollTwitter(){
    console.log('scroll twitter');
}
explainCallBack('johnny depp', 58, washFeet);
explainCallBack('brad pitt', 58, takeShower);
explainCallBack('leonardo dicaprio', 47, scrollTwitter);
