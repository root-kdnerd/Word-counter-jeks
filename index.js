function work() {
    function WordCount(str){ 
        return str.split(" ").length -1;
    }

    const mytextarea = document.getElementsByTagName('textarea')[0].value;
    const result = document.getElementsByTagName('h3')[0].innerHTML = `You have ${WordCount(mytextarea)} numbers in your text`
}

var date = new Date;
var year = date.getFullYear()
console.log(year);

const copy = document.getElementsByTagName('h4')[0].innerHTML = `copyright &copy; Aahil ${year}`


