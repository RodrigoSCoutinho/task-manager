import { ArgumentMetadata, Injectable, PipeTransform } from "@nestjs/common";

@Injectable()
export class CreateUserValidationPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata) {
        console.log(`Value: ${JSON.stringify(value)}`)
        console.log(`Metadata: ${JSON.stringify(metadata)}`)
        throw new Error("Method not implemented.");
    }

}