let hrDIV;
let minDIV;
let secDIV;
let hr;
let min;
let sec;

window.onload = init();

function init(){
    this.hrDIV = document.getElementById("hr");
    this.minDIV = document.getElementById("min");
    this.secDIV = document.getElementById("sec");

    var date = new Date();
    this.hr = date.getHours();
    this.min = date.getMinutes();
    this.sec = date.getSeconds();

    civilianTime();

    this.hrDIV.innerHTML = this.hr;
    this.secDIV.innerHTML = this.min;
    if (this.min < 10) {
        this.minDIV.innerHTML = "0" + this.min;
    }
    ticker();
}

function civilianTime(){
    if (this.hr > 12){
        this.hr = this.hr - 12
    }
}

function ticker(){
    setInterval(
        function () {
            if (this.sec < 60) {
                this.sec += 1;
            }
            else if (this.sec == 60) {
                this.sec = 0;
                incMin();
            }
            this.secDIV.innerHTML = this.sec;
        }
    ,1000);
}

function incMin(){
    if (this.min < 60) {
        this.min += 1;
        if (this.min < 10) {
            this.minDIV.innerHTML = "0" + this.min;
        }
        else {
            this.min += 1;
            this.minDIV.innerHTML = this.min;
        }
    }
    else if (this.min == 60) {
        this.min = 0;
        incHr();
    }
}

function incHr(){
    if (this.hr < 24) {
        this.hr += 1;
    }
    else if (this.hr == 24) {
        this.hr = 1;
    }
    this.hrDIV.innerHTML = this.hr;
}
