import * as yup from 'yup';

import { FieldNames } from '../../pages/index/scripts/types';

export const registrationSchema = yup.object().shape({
    [FieldNames.name]: yup.string().required('Required field'),
    [FieldNames.email]: yup.string().email('Email should be valid').required('Required field'),
    [FieldNames.password]: yup.string().required('Required field'),
});
