function work() {
    function WordCount(str){ 
        if(mytextarea == ''){
            return str.split(" ").length -1;
        }else{
            return str.split(" ").length;
        }
        
    }

    const mytextarea = document.getElementsByTagName('textarea')[0].value;
    const result = document.getElementsByTagName('h3')[0].innerHTML = `You have ${WordCount(mytextarea)} words in your text`
}

var date = new Date;
var year = date.getFullYear()
console.log(year);

const copy = document.getElementsByTagName('p')[0].innerHTML = `copyright &copy; Aahil ${year}`


