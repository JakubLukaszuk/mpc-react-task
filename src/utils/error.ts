import { SerializedError } from "@reduxjs/toolkit";

export const getErrorMessage = ( error: SerializedError) =>{
    if(error.message)
    {
        return error.message;
    }
    return "Error";
}