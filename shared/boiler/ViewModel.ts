import { validate, ValidationError } from "class-validator";
import { Dispatch, SetStateAction } from "react";

export default class ViewModel {
    protected messages: ValidationError[] = [];
    private buildFormData = (formData :FormData, data: any, indexR :boolean,parentKey:string | undefined = undefined) =>
    {
        if (data && typeof data === 'object' && !(data instanceof Date) && !(data instanceof File)) {
            let keys: string[];
            if (indexR) {
                keys = Object.keys(data).slice(5);
                indexR = false;
            }
            else
            {
                keys = Object.keys(data);
            }
            keys.forEach(key => {
                
              this.buildFormData(formData, data[key], indexR,parentKey ? `${parentKey}[${key}]` : key);
            });
          } else {
            const value = data == null ? '' : data;
            if (parentKey) {
                formData.append(parentKey, value);
            }
          }
    }
    getMessage = (func: Function) => {
        if (!this.messages) {
            return ''
        }
        const messageObj = this.messages.find(o => o.property == getPropertyName(func));
        if (messageObj && messageObj.constraints) {
            const messageKeys = Object.values(Object.keys(messageObj.constraints));
            if (messageKeys.length > 0) {
                return messageObj.constraints[messageKeys[0]];
            }
        }
        return '';
    }
    getMessages = (func: Function) => {
        const result: string[] = [];
        if (!this.messages) {
            return result;
        }
        const messageObj = this.messages.find(o => o.property == getPropertyName(func));
        if (messageObj) {
            const messageKeys = Object.values(Object.keys(messageObj.constraints!));
            if (messageKeys.length > 0) {
                for (let i = 0; i < messageKeys.length; i++) {
                    const element = messageKeys[i];
                    result.push(messageObj.constraints![element]);
                }
                return result;
            }
        }
        return result;
    }
    check = async (action?: Dispatch<SetStateAction<number>>) => {
        this.messages = await validate(this);
        if (action) {
            action(Math.random());    
        }
        return this.messages.length == 0;
    }
    toFormData = () => {
        const formData = new FormData();
        this.buildFormData(formData, this,true);
        return formData;
    }
}
function getPropertyName(propertyFunction: Function) {
    const s = propertyFunction.toString().split(".");
    return s[s.length -1];
}