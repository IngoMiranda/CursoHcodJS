class CalcController{
    constructor(){
        this._operation = [];
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


    clearAll(){


        this._operation.pop();

    }

    offOn(){

        this._operation = [];

    }

    addOperation(value){
    
        this._operation.push(value);

        console.log(this._operation);

    }

    setError(){

        this.displayCalc = "Error"

    }


    execBtn(value){

        switch (value){

            case 'offOn':
                this.offOn();
                break;

            case 'correction':
                this.clearAll();
                break;
            case 'division':
                
                break;
            case 'multiplication':
                
                break;
             case 'anyless':
                
                break;
            case 'most':
                
                break;
            case 'equal':
                
                break;
            case 'score':
                
                break;
            case 'percent':
                
                break;

            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6': 
            case '7':
            case '8':
            case '9':
                this.addOperation(Number(value));
                break;
            default:
                this.setError();
                break;

        }
        



    }

    addEventListenerAll(element, events, fn){

        events.split (' ').forEach(event =>{
            element.addEventListener(event, fn, false);
        });
    }

    initializeButtonsEvents(){

        let buttons = document.querySelectorAll("#keys > div > button");
        
        
        buttons.forEach((btn, index) =>{

            this.addEventListenerAll(btn,"click drag", e =>{ 

                let textBtn = btn.className.replace("btn-", "");
                this.execBtn(textBtn);
               
            });

            this.addEventListenerAll(btn, "mouseover mouseup mousedow", e =>{
                
                btn.style.cursor = "pointer";
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