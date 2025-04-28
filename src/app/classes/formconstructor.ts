import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { productType, ProductType } from "./productType";
import { stringsValidator } from "../add-product/validators/stringsValidator";
import { pieceValidator } from "../add-product/validators/pieceValidator";
import { keysValidator } from "../add-product/validators/keysValidator";

export function formConstructor(
    type: string,
    productForm: FormGroup,
    fb: FormBuilder
) {
    const controlsToRemove = ['numberOfPieces', 'numbersOfStrings', 'numbersOfKeys'];
    controlsToRemove.forEach((control) => {
        if (productForm.contains(control)) {
            productForm.removeControl(control);
        }
    });

    if (type === productType[0]) {
        productForm.addControl('numberOfPieces', fb.control('', [Validators.required, pieceValidator]));
    } else if (type === productType[1]) {
        productForm.addControl('numbersOfKeys', fb.control('', [Validators.required, keysValidator]));
    } else if (type === productType[2]) {
        productForm.addControl('numbersOfStrings', fb.control('', [Validators.required, stringsValidator]));
    }
}