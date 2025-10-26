import * as yup from 'yup';
export const listingSchema = yup.object({ name: yup.string().required() });
