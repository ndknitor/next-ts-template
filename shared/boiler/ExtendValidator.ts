import { registerDecorator, ValidationArguments, ValidationOptions } from "class-validator";

interface IsFileOptions {
    mime: ('image/jpg' | 'image/png' | 'image/jpeg')[];
}
export function IsFile(options: IsFileOptions, validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        return registerDecorator({
            name: 'isFile',
            target: object.constructor,
            propertyName: propertyName,
            constraints: [],
            options: validationOptions,
            validator: {
                validate(value: any, args: ValidationArguments) {
                    if (value?.mimetype && (options?.mime ?? []).includes(value?.mimetype)) {
                        return true;
                    }
                    return false;
                },
            }
        });
    }
}
export function MinFileSize(minMB: number, validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        return registerDecorator({
            propertyName: 'minFileSize',
            target: object.constructor,
            constraints: [],
            options: validationOptions,
            validator: {
                validate(value: any, args: ValidationArguments) {
                    const target = value as File;
                    if (!target) {
                        return false;
                    }
                    if (minMB * 1024 * 1024 < target.size) {
                        return false;
                    }
                    return true;
                }
            }
        }
        );
    }
}
export function MaxFileSize(maxMB: number, validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        return registerDecorator({
            propertyName: 'maxFileSize',
            target: object.constructor,
            constraints: [],
            options: validationOptions,
            validator: {
                validate(value: any, args: ValidationArguments) {
                    const target = value as File;
                    if (!target) {
                        return false;
                    }
                    if (maxMB * 1024 * 1024 > target.size) {
                        return false;
                    }
                    return true;
                }
            }
        }
        );
    }
}