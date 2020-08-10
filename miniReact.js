

class CustomSelect{
    constructor(id,labelText,name,options,className){
        this.label={
            contentText:`${labelText}`,
            for:(id)?`${id}`:``
        }

        this.select={
            options:options,
            value:`${name}`,
            id:`${id}`
        }
        this.className=(className)?className:'';
    }
//swae lee diva;kidi enjoyment
    render(){
        let r=`<div>
                    <label for="${this.label.for}">
                    <select name="${this.select.name}" id="${this.select.id}">`
        
        r+=this.select.options.map(el=>{
            return `<option value="${this.select.name}">${el}</option>`
        })

        r+=`</select></div>`;
        //locko let go;zyon la botte;
        return r;
               
    }


}
//let p = document.querySelector('div');
//console.log(p.textContent);

let options=['rer','ttre','ytre','rtyre'];
let t=new CustomSelect("tree",'ls','pop',options,'classf');
document.querySelector('div').innerHTML=t.render();

