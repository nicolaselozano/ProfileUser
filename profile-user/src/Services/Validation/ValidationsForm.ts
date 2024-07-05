const validReduxEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

interface Dicctionary<T>{
    [Key:string] : T
}

const EmavilValidate = (value:string) => {
    if(validReduxEmail.test(value)) return true;
    return "El email debe ser valido";
}

const MessageValidate = (value:string) => {
    if(value.length < 250 && value.length > 10) return true;
    return "El Mensaje debe tener menos de 250 caracteres y mas de 10 caracteres";
}

const AsuntoValidate = (value:string) => {
    if(value.length < 25 && value.length > 2) return true;
    return "El Asunto debe tener menos de 30 caracteres y mas de 2 caracter";
}

const ValidateActions:Dicctionary<(value:any) => true|string> = {
    email:EmavilValidate,
    mensaje:MessageValidate,
    asunto:AsuntoValidate
}

export const ValidateForm = (event:HTMLInputElement) => {

    const {name,value} =event;

    if(ValidateActions[name]){
        return ValidateActions[name](value);
    }else{
        return true
    }

}

