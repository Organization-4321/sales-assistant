import { IApiResponseDTO } from '../interfaces-submodule/interfaces/dto/common/iapi-response.interface';
import { isFetchBaseQueryError } from './isFetchBaseQueryError';

export function getResponseErrorMessage(err: unknown) {
    if (isFetchBaseQueryError(err)) {
        const errorData = err.data as IApiResponseDTO;
        const error = 'error' in errorData ? errorData.error : 'Unknown error!';

        if (typeof error === 'string') return error;

        const errors =
            error?.filedsValidationErrors?.map((error) => error.errorMessage) ??
            error?.errorCode ??
            'Unknown error!';
        return errors;
    }
    return 'Unknown error!';
}
