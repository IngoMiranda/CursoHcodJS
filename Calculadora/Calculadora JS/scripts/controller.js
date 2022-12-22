class CalcController{
    constructor(){

        this._locale = 'pt-Br';
        this._displayCalcEl = document.querySelector('#display');
        this._dateEl = document.querySelector('#date');
        this._hourEl = document.querySelector('#hour');
        this._currentDate; 
        this.initialize();
        this.initializeButtonsEvents();
    }

    initialize(){
        
        this.setDisplayDateTime();
        setInterval (() => {

            this.setDisplayDateTime();

        }, 1000);

    }

    initializeButtonsEvents(){

        let buttons = document.querySelectorAll("#keys > div");

        buttons.forEach(btn =>{

            addEventListener("click", e=> {
                console.log(e)
    
            });
    
        });
    }

    setDisplayDateTime(){
        this.displayDate = this.currentDate.toLocaleDateString(this._locale, {day: "2-digit", month: "long", year: "numeric"});
        this.displayTime = this.currentDate.toLocaleTimeString();
    }

    get displayTime(){

        return this._hourEl.innerHTML;
    }

    set displayTime(value){

        return this._hourEl.innerHTML = value;
    }

    get displayDate(){

        return this._dateEl.innerHTML;
    }

    set displayDate(value){

        return this._dateEl.innerHTML = value;
    }


    get displayCalc(){ // recupera

        return this._displayCalcEl.innerHTML;
    

    }

    set displayCalc(value){ // para alterar o value


        this._displayCalcEl.innerHTML = value;

    }

    get currentDate(){

        return new Date();
    }

    set currentDate(value){

       return this.currentDate = value;
    }

}